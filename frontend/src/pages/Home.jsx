import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MessageCircle,
  ShoppingBasket,
  Truck,
  Star,
  BadgePercent,
  IndianRupee,
  CheckCircle,
  Package,
  MessageSquare,
  ArrowRight,
  Milk,
  Flame,
  Snowflake,
  Heart,
  Activity,
} from "lucide-react";
import { storeInfo, usps, howItWorks, categories, testimonials } from "../mockData";

const Home = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello J K Chems! I would like to order groceries from ${storeInfo.serviceArea}.`
    );
    window.open(`https://wa.me/91${storeInfo.phone}?text=${message}`, "_blank");
  };

  const iconMap = {
    Star: Star,
    Truck: Truck,
    BadgePercent: BadgePercent,
    IndianRupee: IndianRupee,
    MessageSquare: MessageSquare,
    CheckCircle: CheckCircle,
    Package: Package,
    ShoppingBasket: ShoppingBasket,
    Milk: Milk,
    Flame: Flame,
    Nut: ShoppingBasket,
    Snowflake: Snowflake,
    Heart: Heart,
    Activity: Activity,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-orange-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <Star size={16} className="text-orange-500 fill-orange-500" />
              <span className="text-sm font-medium text-gray-700">
                {storeInfo.rating}+ Rating | Trusted Since {storeInfo.yearStarted}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Fresh Groceries Delivered Fast in{" "}
              <span className="text-green-600">Gorakhpur, Jabalpur</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Same-day delivery, bulk discounts, and nominal delivery charges. 
              Your trusted neighborhood grocery partner for all daily essentials.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${storeInfo.phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all hover:scale-105 shadow-lg"
              >
                <Phone size={22} />
                Call Now: {storeInfo.phone}
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all hover:scale-105 shadow-lg"
              >
                <MessageCircle size={22} />
                WhatsApp Order
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              📍 Serving Gorakhpur, Katanga, Railway Colony & nearby areas
            </p>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp) => {
              const Icon = iconMap[usp.icon];
              return (
                <div
                  key={usp.id}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Icon size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {usp.title}
                  </h3>
                  <p className="text-sm text-gray-600">{usp.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, fast, and reliable grocery delivery in just 3 easy steps
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.step} className="relative">
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight size={24} className="text-green-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Categories Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for your home, delivered fresh and fast
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.slice(0, 6).map((category) => {
              const Icon = iconMap[category.icon] || ShoppingBasket;
              return (
                <div
                  key={category.id}
                  className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 rounded-2xl hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors">
                      <Icon size={24} className="text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-green-600 font-medium text-sm hover:text-green-700 flex items-center gap-2 group"
                  >
                    Order on WhatsApp
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by hundreds of families in Gorakhpur, Jabalpur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-orange-500 fill-orange-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order Fresh Groceries?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Call us now or send a WhatsApp message with your grocery list. 
            We'll deliver it the same day!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${storeInfo.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-lg"
            >
              <Phone size={22} />
              {storeInfo.phone}
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle size={22} />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
