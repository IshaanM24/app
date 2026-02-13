import React, { useState } from "react";
import { Package, Users, Building, Home, CheckCircle } from "lucide-react";
import { storeInfo } from "../mockData";
import { Toaster } from "../components/ui/sonner";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const BulkOrders = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    orderType: "home",
    items: "",
    budget: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const benefits = [
    {
      icon: Package,
      title: "Special Discounts",
      description: "Get up to 15% off on bulk orders and regular subscriptions",
    },
    {
      icon: Users,
      title: "For Homes & PGs",
      description: "Perfect for large families, paying guests, and hostels",
    },
    {
      icon: Building,
      title: "Business Orders",
      description: "Reliable supply for cafés, restaurants, and small businesses",
    },
    {
      icon: Home,
      title: "Monthly Subscriptions",
      description: "Set up recurring orders and never run out of essentials",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.area) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to backend API
      const response = await axios.post(`${API}/bulk-orders`, formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.data.success) {
        setOrderId(response.data.order_id);
        setIsSubmitted(true);
        toast.success("Enquiry submitted successfully!");
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setOrderId(null);
          setFormData({
            name: "",
            phone: "",
            area: "",
            orderType: "home",
            items: "",
            budget: "",
          });
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting bulk order:", error);
      const errorMessage = error.response?.data?.detail || "Failed to submit enquiry. Please try again or call us directly.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Package size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bulk & Business Orders
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Special discounts and pricing for bulk orders, regular subscriptions, 
              and business requirements. Save more when you order more!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our Bulk Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                Request Bulk Order Quote
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Fill in the details and we'll get back to you with the best pricing
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Enquiry Submitted!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for your interest. We'll contact you within 2 hours 
                    with pricing and availability details.
                  </p>
                  {orderId && (
                    <p className="text-sm text-gray-500 mb-4">
                      Reference ID: <span className="font-mono text-green-600">{orderId.substring(0, 8)}</span>
                    </p>
                  )}
                  <p className="text-sm text-gray-500">
                    Or call us directly: <a href={`tel:${storeInfo.phone}`} className="text-green-600 font-semibold">{storeInfo.phone}</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  {/* Area */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Delivery Area *
                    </label>
                    <input
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="e.g., Gorakhpur, Katanga, Railway Colony"
                    />
                  </div>

                  {/* Order Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Order Type
                    </label>
                    <select
                      name="orderType"
                      value={formData.orderType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    >
                      <option value="home">Home / Family</option>
                      <option value="pg">PG / Hostel</option>
                      <option value="business">Business / Restaurant</option>
                      <option value="subscription">Monthly Subscription</option>
                    </select>
                  </div>

                  {/* Preferred Items */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Items (Optional)
                    </label>
                    <textarea
                      name="items"
                      value={formData.items}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="List the items you regularly need (e.g., rice, dal, oil, milk, vegetables)"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Expected Monthly Budget (Optional)
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="e.g., ₹5000 - ₹10000"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 2 hours with pricing and availability
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How Bulk Orders Work
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  1. Submit Your Requirements
                </h3>
                <p className="text-gray-600">
                  Fill in the form above or call us directly with your monthly grocery needs 
                  and expected quantities.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  2. Get Custom Quote
                </h3>
                <p className="text-gray-600">
                  We'll analyze your requirements and provide a customized quote with special 
                  bulk discounts and pricing.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  3. Schedule Regular Deliveries
                </h3>
                <p className="text-gray-600">
                  Set up a delivery schedule that works for you - weekly, bi-weekly, or monthly. 
                  We'll ensure you never run out of essentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prefer to Discuss Over Phone?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Call us now and speak directly with our team about bulk orders and pricing
          </p>
          <a
            href={`tel:${storeInfo.phone}`}
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-lg"
          >
            Call Now: {storeInfo.phone}
          </a>
        </div>
      </section>
    </div>
  );
};

export default BulkOrders;
