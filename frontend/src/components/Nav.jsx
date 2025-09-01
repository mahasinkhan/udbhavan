import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-lg text-blue-700 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5xnrOW3SZyJ1vkpmLA38eOszm2Y70YiEYNg&s"
              alt="Udbhavan Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-xl">Udbhavan</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-yellow-500 transition-colors duration-300">Home</Link>
            <Link to="/about" className="hover:text-yellow-500 transition-colors duration-300">About</Link>
            <Link to="/courses" className="hover:text-yellow-500 transition-colors duration-300">Courses</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition-colors duration-300">Contact</Link>
            <Link
              to="/login"
              className="bg-blue-700 text-white px-4 py-1 rounded-lg hover:bg-blue-800 transition-all duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-700 focus:outline-none">
              {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white/90 backdrop-blur-lg px-4 pt-2 pb-4 space-y-2 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-60" : "max-h-0"}`} >

        <Link to="/" className="block hover:text-yellow-500 transition-colors duration-300">Home</Link>
        <Link to="/about" className="block hover:text-yellow-500 transition-colors duration-300">About</Link>
        <Link to="/courses" className="block hover:text-yellow-500 transition-colors duration-300">Courses</Link>
        <Link to="/contact" className="block hover:text-yellow-500 transition-colors duration-300">Contact</Link>
        <Link
  to="/login"
  className="bg-blue-700 text-white px-4 py-1 rounded-lg hover:bg-blue-800 transition-all duration-300"
>
  Login
</Link>

      </div>
    </nav>
  );
};

export default Nav;
