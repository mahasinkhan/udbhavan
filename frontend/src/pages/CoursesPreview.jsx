import React from "react";

const courses = [
  {
    title: "NEET Preparation",
    description: "Comprehensive preparation for NEET with expert faculty.",
    color: "bg-green-100/70",
  },
  {
    title: "JEE Coaching",
    description: "Master Physics, Chemistry, and Math for IIT-JEE.",
    color: "bg-yellow-100/70",
  },
  {
    title: "Class 11-12",
    description: "Strong foundation for higher studies with personalized guidance.",
    color: "bg-blue-100/70",
  },
];

const CoursesPreview = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Optional floating circles */}
      <div className="absolute w-32 h-32 bg-blue-100 rounded-full opacity-20 top-[-40px] left-[-40px] animate-pulse-slow"></div>
      <div className="absolute w-24 h-24 bg-blue-200 rounded-full opacity-15 bottom-[-30px] right-[-30px] animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Explore Our Courses
        </h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Select the best courses to boost your academic journey
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${course.color} flex flex-col justify-between`}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              {course.title}
            </h3>
            <p className="text-gray-700 mb-6">{course.description}</p>
            <button className="mt-auto bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-all duration-300">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesPreview;
