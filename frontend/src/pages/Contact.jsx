import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { storeInfo } from "../mockData";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello J K Chems! I would like to get in touch regarding grocery delivery.`
    );
    window.open(`https://wa.me/91${storeInfo.phone}?text=${message}`, "_blank");
  };

  const handleGetDirections = () => {
    window.open(storeInfo.mapLink, "_blank");
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Have questions or want to place an order? We're here to help! 
              Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <a
              href={`tel:${storeInfo.phone}`}
              className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 p-6 rounded-2xl hover:shadow-lg hover:border-green-400 transition-all text-center group"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                <Phone size={28} className="text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone 1</h3>
              <p className="text-green-600 font-semibold text-sm">+91 {storeInfo.phone}</p>
              <p className="text-sm text-gray-500 mt-2">Click to call</p>
            </a>

            <a
              href={`tel:${storeInfo.phone2}`}
              className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 p-6 rounded-2xl hover:shadow-lg hover:border-green-400 transition-all text-center group"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                <Phone size={28} className="text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone 2</h3>
              <p className="text-green-600 font-semibold text-sm">+91 {storeInfo.phone2}</p>
              <p className="text-sm text-gray-500 mt-2">Click to call</p>
            </a>

            <a
              href={`tel:${storeInfo.phone3}`}
              className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 p-6 rounded-2xl hover:shadow-lg hover:border-green-400 transition-all text-center group"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                <Phone size={28} className="text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone 3</h3>
              <p className="text-green-600 font-semibold text-sm">+91 {storeInfo.phone3}</p>
              <p className="text-sm text-gray-500 mt-2">Click to call</p>
            </a>

            <button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 p-6 rounded-2xl hover:shadow-lg hover:border-orange-400 transition-all text-center group"
            >
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
                <MessageCircle size={28} className="text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-orange-600 font-semibold text-sm">+91 {storeInfo.phone}</p>
              <p className="text-sm text-gray-500 mt-2">Send message</p>
            </button>

            <a
              href={`mailto:${storeInfo.email}`}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-6 rounded-2xl hover:shadow-lg hover:border-gray-400 transition-all text-center group"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-600 transition-colors">
                <Mail size={28} className="text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 font-semibold text-sm break-all">{storeInfo.email}</p>
              <p className="text-sm text-gray-500 mt-2">Send email</p>
            </a>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleGetDirections}
              className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 p-6 rounded-2xl hover:shadow-lg hover:border-green-400 transition-all text-center group"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                <Navigation size={28} className="text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get Directions</h3>
              <p className="text-green-600 font-semibold">Open in Maps</p>
              <p className="text-sm text-gray-500 mt-2">View location</p>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Visit Our Store
              </h2>

              <div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Store Address
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {storeInfo.address.line1}<br />
                      {storeInfo.address.line2}<br />
                      {storeInfo.address.city}, {storeInfo.address.state}<br />
                      {storeInfo.address.pincode}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Opening Hours
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Monday - Tuesday</span>
                        <span className="text-gray-600">10:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Wednesday</span>
                        <span className="text-red-600 font-semibold">Closed</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Thursday - Sunday</span>
                        <span className="text-gray-600">10:00 AM - 10:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Find Us on Map
              </h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[500px]">
                <iframe
                  title="J K Chems Location"
                  src={storeInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Place Your Order?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us now and get fresh groceries delivered to your doorstep today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${storeInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-lg"
            >
              <Phone size={22} />
              Call Now
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle size={22} />
              WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
