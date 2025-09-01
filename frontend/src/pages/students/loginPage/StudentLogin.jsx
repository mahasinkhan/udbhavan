// src/pages/students/loginPage/StudentLogin.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const StudentLogin = () => {
  const navigate = useNavigate();

  // 🔹 State for form fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // 🔹 State for UI improvements
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ important for cookies
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        console.log("✅ Login successful", data.user);
        navigate("/students/dashboard", { state: { user: data.user } });
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🎓 Student Login
        </h2>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 text-sm text-red-600 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-indigo-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Extra Links */}
        <div className="mt-6 text-center text-gray-600">
          <p>
            Don’t have an account?{" "}
            <Link
              to="/register/student"
              className="text-indigo-600 hover:underline font-medium"
            >
              Register
            </Link>
          </p>
          <p className="mt-2">
            <Link
              to="/forgot-password"
              className="text-sm text-indigo-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentLogin;
