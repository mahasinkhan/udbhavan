// src/pages/students/profilePage/Profile.jsx
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Loader2, Edit, Camera } from "lucide-react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    contact: "1234567890",
    guardianName: "Jane Doe",
    guardianContact: "0987654321",
    address: "123 Main Street, City",
    dob: "2005-05-15",
  });

  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert("✅ Profile updated successfully!");
      setLoading(false);
      setEditMode(false);
    }, 1500);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col md:flex-row gap-6">
      {/* Profile Picture Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-full md:w-1/4"
      >
        <div className="relative w-32 h-32 mb-4">
          <img
            src={profilePic || "https://via.placeholder.com/150"}
            alt="Profile"
            className="rounded-full w-full h-full object-cover border-4 border-indigo-500"
          />
          <label className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full cursor-pointer hover:bg-indigo-700">
            <Camera size={18} className="text-white" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePicChange}
            />
          </label>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{formData.name}</h2>
        <p className="text-gray-500">{formData.email}</p>
        <button
          onClick={() => setEditMode(!editMode)}
          className="mt-4 flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          <Edit size={16} /> {editMode ? "Cancel" : "Edit Profile"}
        </button>
      </motion.div>

      {/* Profile Details Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-6 flex-1"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              disabled={!editMode}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                editMode ? "focus:ring-indigo-500 bg-white" : "bg-gray-100"
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              disabled={!editMode}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                editMode ? "focus:ring-indigo-500 bg-white" : "bg-gray-100"
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Guardian Name</label>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              disabled={!editMode}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                editMode ? "focus:ring-indigo-500 bg-white" : "bg-gray-100"
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Guardian Contact</label>
            <input
              type="text"
              name="guardianContact"
              value={formData.guardianContact}
              disabled={!editMode}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                editMode ? "focus:ring-indigo-500 bg-white" : "bg-gray-100"
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              disabled={!editMode}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                editMode ? "focus:ring-indigo-500 bg-white" : "bg-gray-100"
              }`}
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-600 mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              disabled={!editMode}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                editMode ? "focus:ring-indigo-500 bg-white" : "bg-gray-100"
              }`}
            />
          </div>

          {editMode && (
            <div className="col-span-1 md:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : "Update Profile"}
              </button>
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Profile;
