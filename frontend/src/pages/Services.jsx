import React, { useState } from "react";
import {
  ShoppingBasket,
  Milk,
  Apple,
  Flame,
  Snowflake,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";
import { categories, storeInfo } from "../mockData";
import { Toaster } from "../components/ui/sonner";
import { toast } from "sonner";

const Services = () => {
  const [copiedCategory, setCopiedCategory] = useState(null);

  const iconMap = {
    ShoppingBasket: ShoppingBasket,
    Milk: Milk,
    Apple: Apple,
    Flame: Flame,
    Nut: ShoppingBasket,
    Snowflake: Snowflake,
  };

  const handleWhatsAppClick = (categoryTitle) => {
    const message = encodeURIComponent(
      `Hello J K Chems! I would like to order from "${categoryTitle}" category.`
    );
    window.open(`https://wa.me/91${storeInfo.phone}?text=${message}`, "_blank");
  };

  const handleCopyMessage = (categoryTitle) => {
    const message = `Hello J K Chems! I would like to order from "${categoryTitle}" category. Please share the available items and prices.`;
    navigator.clipboard.writeText(message);
    setCopiedCategory(categoryTitle);
    toast.success("Message copied to clipboard!");
    setTimeout(() => setCopiedCategory(null), 2000);
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />
      
      <section className="bg-gradient-to-br from-green-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services & Categories
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              From daily groceries to specialty items, we deliver everything you need 
              for your home with same-day delivery guarantee.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category) => {
              const Icon = iconMap[category.icon] || ShoppingBasket;
              return (
                <div
                  key={category.id}
                  className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 p-8 rounded-2xl hover:shadow-xl hover:border-green-300 transition-all group"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:scale-110 transition-all">
                    <Icon size={32} className="text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => handleWhatsAppClick(category.title)}
                      className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle size={18} />
                      Order on WhatsApp
                    </button>
                    <button
                      onClick={() => handleCopyMessage(category.title)}
                      className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                    >
                      {copiedCategory === category.title ? (
                        <>
                          <Check size={18} className="text-green-600" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={18} />
                          Copy Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Call us now and our team will help you with product availability, 
            pricing, and placing your order.
          </p>
          <a
            href={`tel:${storeInfo.phone}`}
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-lg"
          >
            Call Now: {storeInfo.phone}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
