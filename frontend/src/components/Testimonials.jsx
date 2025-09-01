// src/components/Testimonials.jsx
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "NEET Aspirant",
    quote: "Udbhavan helped me score top ranks in NEET with personalized guidance!",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Amit Verma",
    role: "JEE Aspirant",
    quote: "The teachers here are amazing and the teaching methodology is excellent.",
    image:
      "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sneha Das",
    role: "Class 12 Student",
    quote: "I loved the environment here. The courses really prepared me well.",
    image:
      "https://randomuser.me/api/portraits/women/56.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Success Stories
        </h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Hear from our successful students and their achievements
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testi, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-20 h-20 mb-4">
              <img
                src={testi.image}
                alt={testi.name}
                className="w-full h-full rounded-full object-cover border-2 border-blue-200"
              />
            </div>
            <FaQuoteLeft className="text-blue-400 text-2xl mb-4" />
            <p className="text-gray-800 text-base md:text-lg mb-4">{testi.quote}</p>
            <h3 className="font-semibold text-blue-700 text-lg">{testi.name}</h3>
            <p className="text-gray-500 text-sm">{testi.role}</p>
          </div>
        ))}
      </div>

      {/* Optional floating circles for style */}
      <div className="absolute w-32 h-32 bg-blue-100 rounded-full opacity-20 top-[-40px] left-[-40px] animate-pulse-slow"></div>
      <div className="absolute w-24 h-24 bg-blue-200 rounded-full opacity-15 bottom-[-30px] right-[-30px] animate-pulse-slow"></div>
    </section>
  );
};

export default Testimonials;
