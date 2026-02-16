import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { storeInfo } from "../mockData";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">JK</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">J K Chems</h1>
              <p className="text-xs text-gray-600">Fresh Groceries Delivered</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-green-600 ${
                  isActive(link.path) ? "text-green-600" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Call Button */}
          <a
            href={`tel:${storeInfo.phone}`}
            className="hidden md:flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            <Phone size={18} />
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium py-2 transition-colors hover:text-green-600 ${
                    isActive(link.path) ? "text-green-600" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${storeInfo.phone}`}
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors mt-2"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
