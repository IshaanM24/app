from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import uuid


class BulkOrderCreate(BaseModel):
    """Schema for creating a new bulk order enquiry"""
    name: str = Field(..., min_length=2, max_length=100)
    phone: str = Field(..., min_length=10, max_length=15)
    area: str = Field(..., min_length=2, max_length=100)
    order_type: str = Field(..., alias="orderType")
    items: Optional[str] = Field(None, max_length=1000)
    budget: Optional[str] = Field(None, max_length=50)
    
    class Config:
        populate_by_name = True


class BulkOrder(BaseModel):
    """Schema for bulk order enquiry with database fields"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    area: str
    order_type: str
    items: Optional[str] = None
    budget: Optional[str] = None
    status: str = Field(default="pending")  # pending, contacted, completed
    created_at: datetime = Field(default_factory=datetime.utcnow)
    notes: Optional[str] = None
    
    class Config:
        populate_by_name = True


class BulkOrderResponse(BaseModel):
    """Response schema for bulk order submission"""
    success: bool
    message: str
    order_id: str
