// src/pages/students/coursesPage/Courses.jsx
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const sampleCourses = [
  { id: 1, name: "Mathematics", teacher: "Mr. Smith", progress: 70 },
  { id: 2, name: "Physics", teacher: "Ms. Johnson", progress: 45 },
  { id: 3, name: "Chemistry", teacher: "Dr. Adams", progress: 60 },
  { id: 4, name: "English Literature", teacher: "Mrs. Brown", progress: 80 },
  { id: 5, name: "History", teacher: "Mr. Davis", progress: 30 },
];

const Courses = () => {
  const [search, setSearch] = useState("");

  const filteredCourses = sampleCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(search.toLowerCase()) ||
      course.teacher.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Courses</h1>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length === 0 ? (
          <p className="text-gray-600 col-span-full">No courses found.</p>
        ) : (
          filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h2>
              <p className="text-gray-500 mb-4">Instructor: {course.teacher}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-4 rounded-full mb-2">
                <div
                  className="bg-indigo-600 h-4 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-gray-600 text-sm">{course.progress}% Completed</p>

              <button className="mt-auto bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition mt-4">
                View Course
              </button>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Courses;
