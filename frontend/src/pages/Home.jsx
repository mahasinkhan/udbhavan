// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import CoursesPreview from "./CoursesPreview";
import FeaturesSection from "../components/FeaturesSection";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";
import NewsSection from "../components/NewsSection";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection"; 

const Home = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative z-10">
        <HeroSection />
        <div className="absolute w-64 h-64 bg-gray-200 rounded-full opacity-20 top-[-80px] left-[-80px] animate-pulse-slow"></div>
        <div className="absolute w-48 h-48 bg-gray-300 rounded-full opacity-15 bottom-[-60px] right-[-60px] animate-pulse-slow"></div>
      </section>

      {/* Courses Preview */}
      <section className="relative z-10">
        <CoursesPreview />
        <div className="absolute w-32 h-32 bg-gray-200 rounded-full opacity-15 top-[-40px] left-[-40px] animate-pulse-slow"></div>
      </section>

      {/* Features */}
      <section className="relative z-10">
        <FeaturesSection />
        <div className="absolute w-24 h-24 bg-gray-300 rounded-full opacity-10 bottom-[-30px] right-[-30px] animate-pulse-slow"></div>
      </section>

      {/* About */}
      <section className="relative z-10">
        <AboutSection />
        <div className="absolute w-28 h-28 bg-gray-200 rounded-full opacity-15 top-[20%] left-[-60px] animate-pulse-slow"></div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10">
        <Testimonials />
        <div className="absolute w-32 h-32 bg-gray-200 rounded-full opacity-15 top-[-50px] right-[-50px] animate-pulse-slow"></div>
      </section>

      {/* News */}
      <section className="relative z-10">
        <NewsSection />
        <div className="absolute w-28 h-28 bg-gray-300 rounded-full opacity-10 bottom-[-40px] left-[-40px] animate-pulse-slow"></div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10">
        <CTASection />
        <div className="absolute w-32 h-32 bg-gray-300 rounded-full opacity-10 top-[-50px] left-[-50px] animate-pulse-slow"></div>
      </section>

      {/* Contact */}
      <section className="relative z-10">
        <ContactSection />
        <div className="absolute w-32 h-32 bg-gray-200 rounded-full opacity-10 bottom-[-40px] right-[-40px] animate-pulse-slow"></div>
      </section>
    </div>
  );
};

export default Home;
