import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* White Transparent Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-lg"></div>

      {/* Floating Circles */}
      <div className="absolute w-64 h-64 bg-blue-200 rounded-full opacity-30 top-[-80px] left-[-80px] animate-pulse-slow"></div>
      <div className="absolute w-48 h-48 bg-blue-300 rounded-full opacity-25 bottom-[-60px] right-[-60px] animate-pulse-slow"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-700 mb-4 drop-shadow-lg animate-fade-in">
          Welcome to Udbhavan
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-blue-900 mb-6 drop-shadow-md animate-fade-in delay-200">
          Empowering Students, Teachers, and Administrators
        </p>
        <button
          onClick={() => navigate("/login-selection")}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 animate-fade-in delay-400"
        >
          Explore Courses
        </button>
      </div>

      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.25; }
            50% { transform: scale(1.2); opacity: 0.35; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
          }
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease forwards;
          }
          .animate-fade-in.delay-200 { animation-delay: 0.2s; }
          .animate-fade-in.delay-400 { animation-delay: 0.4s; }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
