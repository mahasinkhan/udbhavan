import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserShield,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardList,
  FaLifeRing,
} from "react-icons/fa";

const LoginSelection = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const cardStyle =
    "bg-white/80 backdrop-blur-md rounded-2xl p-8 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:from-blue-200 hover:to-blue-300 flex flex-col items-center justify-center text-center";

  const iconCircle =
    "bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-4 text-blue-700 text-3xl shadow-md";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 pt-16 px-4">
      <h2 className="text-5xl font-extrabold mb-16 text-blue-800 drop-shadow-lg text-center">
        Select Login Type
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl">
        {/* Administrator */}
        <div
          className={`${cardStyle} bg-gradient-to-tr from-blue-50 to-white`}
          onClick={() => handleClick("/login/admin")}
        >
          <div className={iconCircle}>
            <FaUserShield />
          </div>
          <span className="font-bold text-xl text-gray-800">
            Administrator Login
          </span>
        </div>

        {/* Student */}
        <div
          className={`${cardStyle} bg-gradient-to-tr from-green-50 to-white`}
          onClick={() => handleClick("/login/student")}
        >
          <div className={iconCircle}>
            <FaUserGraduate />
          </div>
          <span className="font-bold text-xl text-gray-800">Student Login</span>
        </div>

        {/* Teacher */}
        <div
          className={`${cardStyle} bg-gradient-to-tr from-purple-50 to-white`}
          onClick={() => handleClick("/login/teacher")}
        >
          <div className={iconCircle}>
            <FaChalkboardTeacher />
          </div>
          <span className="font-bold text-xl text-gray-800">Teacher Login</span>
        </div>

        {/* Result */}
        <div
          className={`${cardStyle} bg-gradient-to-tr from-yellow-50 to-white`}
          onClick={() => handleClick("/login/result")}
        >
          <div className={iconCircle}>
            <FaClipboardList />
          </div>
          <span className="font-bold text-xl text-gray-800">Result</span>
        </div>

        {/* Help Desk */}
        <div
          className={`${cardStyle} bg-gradient-to-tr from-red-50 to-white`}
          onClick={() => handleClick("/login/helpdesk")}
        >
          <div className={iconCircle}>
            <FaLifeRing />
          </div>
          <span className="font-bold text-xl text-gray-800">Help Desk</span>
        </div>
      </div>
    </div>
  );
};

export default LoginSelection;
