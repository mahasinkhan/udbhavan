// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-40px] left-[-40px] w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-[-30px] right-[-30px] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & About */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5xnrOW3SZyJ1vkpmLA38eOszm2Y70YiEYNg&s"
                alt="Udbhavan Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-xl text-white">Udbhavan</span>
            </Link>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering students, teachers, and administrators with
              high-quality education, tools, and guidance.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-between md:justify-around">
            <div>
              <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-yellow-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-yellow-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-yellow-400 transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-yellow-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-white">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/login-selection" className="hover:text-yellow-400 transition-colors">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-yellow-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-yellow-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold mb-3 text-white">Stay Connected</h3>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe to get updates on new courses and events.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-1"
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-gray-900 transition-colors"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-gray-900 transition-colors"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-gray-900 transition-colors"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-gray-900 transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} Udbhavan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
