// src/components/FeaturesSection.jsx
import React from "react";
import { FaChalkboardTeacher, FaUserGraduate, FaMedal, FaHandsHelping } from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Faculty",
    description: "Learn from experienced educators who guide you to success.",
    color: "bg-blue-100",
  },
  {
    icon: <FaUserGraduate />,
    title: "Personalized Guidance",
    description: "Tailored coaching to suit each student's learning pace.",
    color: "bg-green-100",
  },
  {
    icon: <FaMedal />,
    title: "Exam Preparation Success",
    description: "Proven track record with 100% preparation support.",
    color: "bg-yellow-100",
  },
  {
    icon: <FaHandsHelping />,
    title: "Student Support",
    description: "Continuous support through mentoring and help desk.",
    color: "bg-purple-100",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Why Choose Udbhavan
        </h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Explore the strengths that make us the preferred institute for students
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center ${feature.color}`}
          >
            <div className="text-5xl text-blue-700 mb-4">{feature.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Optional floating shapes for decoration */}
      <div className="absolute w-32 h-32 bg-blue-50 rounded-full opacity-20 top-[-40px] left-[-40px] animate-pulse-slow"></div>
      <div className="absolute w-24 h-24 bg-green-50 rounded-full opacity-15 bottom-[-30px] right-[-30px] animate-pulse-slow"></div>
    </section>
  );
};

export default FeaturesSection;
