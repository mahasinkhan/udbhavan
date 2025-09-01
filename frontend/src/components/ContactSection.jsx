// src/components/ContactSection.jsx
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
            Contact Us
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Have questions or need help? Reach out to us, and our support team
            will assist you promptly.
          </p>

          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-blue-700 text-lg sm:text-xl flex-shrink-0" />
              <span className="text-gray-800">
                Sultanganj More (Near Kaliachak Panchayat Office-I), <br />
                Kaliachak, Malda - 732201, West Bengal
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-700 text-lg sm:text-xl" />
              <span className="text-gray-800">+91 12345 67890</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-700 text-lg sm:text-xl" />
              <span className="text-gray-800">info@udbhavan.edu</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="bg-blue-700 text-white p-3 rounded-full hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-blue-700 text-white p-3 rounded-full hover:scale-110 transition-transform"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-blue-700 text-white p-3 rounded-full hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg w-full">
          <form className="space-y-5 sm:space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 sm:py-4 rounded-lg shadow-lg w-full transition-all duration-300 text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Contact & Location Section */}
      {/* Contact & Location Section */}
<div className="mt-12 max-w-4xl mx-auto w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
  <iframe
    title="Udbhavan Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.382657804795!2d88.10737257530442!3d24.866774845598732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa4a3c6b29c5b5%3A0x7f6c68e9d3d6c0c9!2sSultanganj%20More%2C%20Kaliachak%2C%20Malda%2C%20West%20Bengal%20732201!5e0!3m2!1sen!2sin!4v1696223832827!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </section>
  );
};

export default ContactSection;
