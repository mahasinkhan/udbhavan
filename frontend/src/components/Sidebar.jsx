// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { Home, User, Book, FileText, Calendar, ClipboardList, MessageSquare, Download, Settings, LogOut, ChevronLeft, ChevronRight } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { path: "/students/dashboard", label: "Dashboard", icon: <Home size={20}/> },
    { path: "/students/profile", label: "Profile", icon: <User size={20}/> },
    { path: "/students/courses", label: "Courses", icon: <Book size={20}/> },
    { path: "/students/assignments", label: "Assignments", icon: <FileText size={20}/> },
    { path: "/students/attendance", label: "Attendance", icon: <Calendar size={20}/> },
    { path: "/students/exams-results", label: "Exams & Results", icon: <ClipboardList size={20}/> },
    { path: "/students/messages", label: "Messages", icon: <MessageSquare size={20}/> },
    { path: "/students/resources", label: "Resources", icon: <Download size={20}/> },
    { path: "/students/settings", label: "Settings", icon: <Settings size={20}/> },
  ];

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 shadow-lg relative">
      {/* Collapse/Expand button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-[-15px] bg-gray-900 p-2 rounded-full shadow-lg"
      >
        {isOpen ? <ChevronLeft size={20}/> : <ChevronRight size={20}/>}
      </button>

      {/* Logo */}
      {isOpen && (
        <h2 className="text-2xl font-bold mb-8 text-center tracking-wide">🎓 Student LMS</h2>
      )}

      {/* Menu */}
      <nav className="flex flex-col gap-2 flex-grow">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 hover:bg-indigo-600 hover:shadow-lg ${
                isActive ? "bg-indigo-600 font-semibold" : "text-gray-300"
              }`
            }
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <NavLink
        to="/logout"
        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-red-600 transition-all duration-200 mt-auto"
      >
        <LogOut size={20}/>
        {isOpen && "Logout"}
      </NavLink>
    </div>
  );
};

export default Sidebar;
