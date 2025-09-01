import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    class: "",
    batch: "",
    contact: "",
    guardianName: "",
    guardianContact: "",
    address: "",
    dob: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  // ✅ Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Client-side validation
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.class) newErrors.class = "Class is required";
    if (!formData.batch) newErrors.batch = "Batch is required";
    if (!formData.contact) newErrors.contact = "Contact is required";
    return newErrors;
  };

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    setServerError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register/student",
        formData,
        { withCredentials: true } // 🔑 send/receive cookies (JWT)
      );

      if (res.data.success) {
        alert("🎉 Student Registered Successfully!");
        navigate("/login"); // redirect to login
      }
    } catch (error) {
      console.error(error);
      setServerError(
        error.response?.data?.message || "Registration failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 p-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Student Registration
        </h2>

        {serverError && (
          <p className="text-red-600 bg-red-50 border border-red-200 p-2 rounded mb-4 text-center">
            {serverError}
          </p>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Class */}
          <div>
            <label className="block text-gray-700 font-medium">Class</label>
            <input
              type="text"
              name="class"
              placeholder="e.g. 10th, 12th, Dropper"
              value={formData.class}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
            />
            {errors.class && <p className="text-red-500 text-sm">{errors.class}</p>}
          </div>

          {/* Batch */}
          <div>
            <label className="block text-gray-700 font-medium">Batch</label>
            <input
              type="text"
              name="batch"
              placeholder="Batch Name/ID"
              value={formData.batch}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
            />
            {errors.batch && <p className="text-red-500 text-sm">{errors.batch}</p>}
          </div>

          {/* Contact */}
          <div>
            <label className="block text-gray-700 font-medium">Contact</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter contact number"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
            />
            {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
          </div>

          {/* Guardian Name */}
          <div>
            <label className="block text-gray-700 font-medium">Guardian Name</label>
            <input
              type="text"
              name="guardianName"
              placeholder="Guardian's Name"
              value={formData.guardianName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Guardian Contact */}
          <div>
            <label className="block text-gray-700 font-medium">Guardian Contact</label>
            <input
              type="text"
              name="guardianContact"
              placeholder="Guardian's Contact"
              value={formData.guardianContact}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Address */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium">Address</label>
            <textarea
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-gray-700 font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-800 transition-all duration-300"
            >
              {loading ? (
                <Loader2 className="animate-spin mr-2" size={20} />
              ) : (
                "Register"
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default StudentRegister;
