import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { storeInfo } from "../mockData";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">JK</span>
              </div>
              <h3 className="text-xl font-bold text-white">J K Chems</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted neighborhood grocery partner since {storeInfo.yearStarted}. 
              Delivering fresh groceries with reliability and care across {storeInfo.location}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-green-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-green-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-green-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-green-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-gray-400 mb-1">Mobile Numbers:</p>
                  <a href={`tel:${storeInfo.phone}`} className="text-sm hover:text-green-500 transition-colors">
                    +91 {storeInfo.phone}
                  </a>
                  <a href={`tel:${storeInfo.phone2}`} className="text-sm hover:text-green-500 transition-colors">
                    +91 {storeInfo.phone2}
                  </a>
                  <a href={`tel:${storeInfo.phone3}`} className="text-sm hover:text-green-500 transition-colors">
                    +91 {storeInfo.phone3}
                  </a>
                  <p className="text-xs text-gray-400 mt-2 mb-1">Landline:</p>
                  <a href={`tel:${storeInfo.landline1.replace(/\s/g, '')}`} className="text-sm hover:text-green-500 transition-colors">
                    {storeInfo.landline1}
                  </a>
                  <a href={`tel:${storeInfo.landline2.replace(/\s/g, '')}`} className="text-sm hover:text-green-500 transition-colors">
                    {storeInfo.landline2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <a href={`mailto:${storeInfo.email}`} className="text-sm hover:text-green-500 transition-colors break-all">
                  {storeInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  {storeInfo.address.line1}, {storeInfo.address.line2}, {storeInfo.address.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Opening Hours</h4>
            <div className="flex items-start gap-3 mb-4">
              <Clock size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-white">Monday - Tuesday</p>
                <p className="text-gray-400">10:30 AM - 10:00 PM</p>
                <p className="font-medium text-white mt-2">Wednesday</p>
                <p className="text-red-400">Closed</p>
                <p className="font-medium text-white mt-2">Thursday - Sunday</p>
                <p className="text-gray-400">10:30 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} J K Chems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
