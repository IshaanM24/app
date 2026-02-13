import React from "react";
import { Phone, MessageCircle, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { storeInfo } from "../mockData";

const StickyBottomBar = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello J K Chems! I would like to order groceries from ${storeInfo.location}.`
    );
    window.open(`https://wa.me/91${storeInfo.phone}?text=${message}`, "_blank");
  };

  const handleOrderFormClick = () => {
    navigate("/bulk-orders");
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="grid grid-cols-3 gap-1 p-2">
        {/* Call Button */}
        <a
          href={`tel:${storeInfo.phone}`}
          className="flex flex-col items-center justify-center gap-1 py-3 px-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
        >
          <Phone size={20} className="text-green-600" />
          <span className="text-xs font-medium text-green-700">Call</span>
        </a>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="flex flex-col items-center justify-center gap-1 py-3 px-2 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
        >
          <MessageCircle size={20} className="text-orange-600" />
          <span className="text-xs font-medium text-orange-700">WhatsApp</span>
        </button>

        {/* Order Form Button */}
        <button
          onClick={handleOrderFormClick}
          className="flex flex-col items-center justify-center gap-1 py-3 px-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
        >
          <ClipboardList size={20} className="text-white" />
          <span className="text-xs font-medium text-white">Order Form</span>
        </button>
      </div>
    </div>
  );
};

export default StickyBottomBar;
