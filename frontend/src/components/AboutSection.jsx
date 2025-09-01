// src/components/AboutSection.jsx
import React, { useEffect, useState } from "react";

const statsData = [
  { label: "Students Cleared NEET", value: 500 },
  { label: "Students Cleared JEE", value: 350 },
  { label: "Expert Faculty Members", value: 25 },
  { label: "Courses Offered", value: 10 },
];

const AboutSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] += Math.ceil(stat.value / 100);
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Why Choose Udbhavan
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          Our institute is dedicated to empowering students to achieve excellence in academics with expert guidance, innovative teaching methods, and a supportive environment.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
          <p className="text-gray-700">To provide personalized coaching and comprehensive guidance to help students succeed in competitive exams and beyond.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h3>
          <p className="text-gray-700">To be the leading educational institute that nurtures talented individuals and equips them with the knowledge, skills, and confidence to achieve their dreams.</p>
        </div>
      </div>

      {/* Achievements / Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto text-center">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-4xl font-bold text-blue-700 mb-2">{counts[index]}+</h3>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Optional floating shapes for modern design */}
      <div className="absolute w-32 h-32 bg-blue-50 rounded-full opacity-20 top-[-40px] left-[-40px] animate-pulse-slow"></div>
      <div className="absolute w-24 h-24 bg-green-50 rounded-full opacity-15 bottom-[-30px] right-[-30px] animate-pulse-slow"></div>
    </section>
  );
};

export default AboutSection;
