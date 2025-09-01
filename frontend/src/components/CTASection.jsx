// src/components/CTASection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 overflow-hidden rounded-xl mx-auto max-w-7xl">
      {/* Floating decorative circles */}
      <div className="absolute w-32 h-32 sm:w-40 sm:h-40 bg-white/20 rounded-full top-[-40px] left-[-40px] animate-pulse-slow"></div>
      <div className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-white/15 rounded-full bottom-[-30px] right-[-30px] animate-pulse-slow"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
          Ready to Start Your Journey with Udbhavan?
        </h2>
        <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
          Join today and empower your academic success with expert guidance.
        </p>
        <button
          onClick={() => navigate("/login-selection")}
          className="bg-white text-blue-700 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg"
        >
          Join Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
