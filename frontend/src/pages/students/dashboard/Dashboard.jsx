import React, { useState, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

// Sample mock data
const attendanceData = [
  { month: "Jan", attendance: 90 },
  { month: "Feb", attendance: 85 },
  { month: "Mar", attendance: 92 },
  { month: "Apr", attendance: 88 },
  { month: "May", attendance: 95 },
  { month: "Jun", attendance: 91 },
];

const progressData = [
  { name: "Math", value: 80 },
  { name: "Science", value: 70 },
  { name: "English", value: 90 },
  { name: "History", value: 60 },
  { name: "Art", value: 85 },
];

const COLORS = ["#4F46E5", "#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [stats, setStats] = useState({
    courses: 5,
    assignments: 2,
    attendance: 92,
    upcomingExams: 3,
  });

  const [announcements, setAnnouncements] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);

  // Simulate API call
  useEffect(() => {
    setAnnouncements([
      "📢 New study material uploaded for Math.",
      "📢 Science exam scheduled on 10th Sep.",
      "📢 Submit assignments by Friday.",
    ]);

    setRecentActivities([
      "✅ Completed assignment on Physics.",
      "✅ Viewed lecture notes for Chemistry.",
      "✅ Updated profile picture.",
    ]);
  }, []);

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome to your Dashboard
      </h1>

      {/* Quick Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card title="Courses Enrolled" value={stats.courses} />
        <Card title="Assignments Pending" value={stats.assignments} />
        <Card title="Attendance" value={`${stats.attendance}%`} />
        <Card title="Upcoming Exams" value={stats.upcomingExams} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Attendance Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="attendance" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Subject Progress</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={progressData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {progressData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Announcements */}
      <Panel title="Announcements" items={announcements} />

      {/* Recent Activities */}
      <Panel title="Recent Activities" items={recentActivities} />
    </div>
  );
};

// Card Component
const Card = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
    <h2 className="text-gray-500 text-sm">{title}</h2>
    <p className="text-2xl font-semibold text-gray-800">{value}</p>
  </div>
);

// Panel Component
const Panel = ({ title, items }) => (
  <div className="bg-white p-6 rounded-lg shadow mb-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
    <ul className="space-y-2 text-gray-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Dashboard;
