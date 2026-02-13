from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
from models.bulk_order import BulkOrder, BulkOrderCreate, BulkOrderResponse


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# Bulk Order Routes
@api_router.post("/bulk-orders", response_model=BulkOrderResponse)
async def create_bulk_order(order_input: BulkOrderCreate):
    """
    Create a new bulk order enquiry
    """
    try:
        # Create bulk order object
        order_data = order_input.model_dump(by_alias=True)
        bulk_order = BulkOrder(
            name=order_data['name'],
            phone=order_data['phone'],
            area=order_data['area'],
            order_type=order_data['orderType'],
            items=order_data.get('items'),
            budget=order_data.get('budget')
        )
        
        # Convert to dict for MongoDB
        doc = bulk_order.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        
        # Insert into database
        result = await db.bulk_orders.insert_one(doc)
        
        if result.inserted_id:
            logger.info(f"Bulk order created: {bulk_order.id} - {bulk_order.name}")
            return BulkOrderResponse(
                success=True,
                message="Enquiry submitted successfully! We'll contact you within 2 hours.",
                order_id=bulk_order.id
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to create order")
            
    except Exception as e:
        logger.error(f"Error creating bulk order: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error submitting enquiry: {str(e)}")


@api_router.get("/bulk-orders", response_model=List[BulkOrder])
async def get_bulk_orders(status: str = None):
    """
    Get all bulk order enquiries (for admin use)
    Optional status filter: pending, contacted, completed
    """
    try:
        query = {}
        if status:
            query['status'] = status
            
        orders = await db.bulk_orders.find(query, {"_id": 0}).to_list(1000)
        
        # Convert ISO string timestamps back to datetime objects
        for order in orders:
            if isinstance(order['created_at'], str):
                order['created_at'] = datetime.fromisoformat(order['created_at'])
        
        return orders
    except Exception as e:
        logger.error(f"Error fetching bulk orders: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error fetching orders: {str(e)}")


@api_router.get("/bulk-orders/{order_id}", response_model=BulkOrder)
async def get_bulk_order(order_id: str):
    """
    Get a specific bulk order by ID
    """
    try:
        order = await db.bulk_orders.find_one({"id": order_id}, {"_id": 0})
        
        if not order:
            raise HTTPException(status_code=404, detail="Order not found")
        
        # Convert ISO string timestamp back to datetime object
        if isinstance(order['created_at'], str):
            order['created_at'] = datetime.fromisoformat(order['created_at'])
        
        return order
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching bulk order {order_id}: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error fetching order: {str(e)}")


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()