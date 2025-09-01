// src/components/NewsSection.jsx
import React from "react";

const newsData = [
  {
    title: "NEET 2025 Batch Open",
    description:
      "Enroll now for our NEET 2025 batch with expert faculty and proven strategies.",
    date: "Aug 15, 2025",
  },
  {
    title: "JEE Advanced Tips",
    description:
      "Top 10 tips to boost your JEE Advanced preparation and score higher.",
    date: "Aug 10, 2025",
  },
  {
    title: "Success Story: Class 12 Student",
    description:
      "Read how Ananya scored 650+ in NEET with personalized guidance.",
    date: "Aug 8, 2025",
  },
];

const NewsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
          Latest News & Updates
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl">
          Stay updated with our latest events, news, and tips
        </p>
      </div>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-blue-50/80 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
                {news.title}
              </h3>
              <p className="text-gray-700 mb-4">{news.description}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">{news.date}</span>
              <button className="text-blue-700 font-semibold text-sm hover:underline">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Optional floating circles for visual effect */}
      <div className="absolute w-32 h-32 bg-blue-100 rounded-full opacity-10 top-[-40px] left-[-40px] animate-pulse-slow"></div>
      <div className="absolute w-24 h-24 bg-blue-200 rounded-full opacity-10 bottom-[-30px] right-[-30px] animate-pulse-slow"></div>
    </section>
  );
};

export default NewsSection;
