import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const TeacherLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add Teacher login API call here
    console.log("Teacher Login", { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="flex justify-center items-center mt-20 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
            Teacher Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="teacher@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Forgot password?{" "}
            <Link to="/forgot-password" className="text-blue-700 hover:underline">
              Click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
