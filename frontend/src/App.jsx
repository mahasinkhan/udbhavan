// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer"; // Make sure you have Footer.jsx

// Pages
import Home from "./pages/Home";
import LoginSelection from "./pages/LoginSelection";
import StudentLogin from "./pages/students/loginPage/StudentLogin";
import StudentRegister from "./pages/students/registerPage/StudentRegister";

// Student Layout & Pages
import StudentLayout from "./layouts/StudentLayout";
import Dashboard from "./pages/students/dashboard/Dashboard";
import Profile from "./pages/students/profile/Profile";
import Courses from "./pages/students/courses/Course";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav will appear on all pages */}
      <Nav />

      {/* Main content */}
      <div className="flex-grow">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSelection />} />
          <Route path="/login/student" element={<StudentLogin />} />
          <Route path="/register/student" element={<StudentRegister />} />

          {/* Protected student routes with sidebar */}
          <Route path="/students" element={<StudentLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="courses" element={<Courses />} />
            {/* Add more student pages here */}
          </Route>

          {/* Placeholder routes */}
          <Route
            path="/login/admin"
            element={<h1 className="pt-20 text-center text-3xl">Admin Login</h1>}
          />
          <Route
            path="/login/teacher"
            element={<h1 className="pt-20 text-center text-3xl">Teacher Login</h1>}
          />
          <Route
            path="/login/result"
            element={<h1 className="pt-20 text-center text-3xl">Result Login</h1>}
          />
          <Route
            path="/login/helpdesk"
            element={<h1 className="pt-20 text-center text-3xl">Help Desk</h1>}
          />
        </Routes>
      </div>

      {/* Footer will appear on all pages */}
      <Footer />
    </div>
  );
};

export default App;
