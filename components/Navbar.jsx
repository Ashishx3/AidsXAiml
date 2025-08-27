"use client";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import "@/styles/Heeo.css"
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1B1B2F] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="text-2xl fonte font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C8D] to-[#FF9A8D] tracking-wide hover:scale-105 transition-transform duration-300">
          IT Block 
        </div>

        {/* Navigation Links */}
        <div className="space-x-8 hidden md:flex font-medium">
          {["Home", "Admins", "Batch", "Gallery", "Contact"].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              className="relative  text-[#F7D6E0] hover:text-[#FF5C8D] transition duration-300 group"
            >
              {link}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#FF5C8D] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Section: Dashboard + Login Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Dashboard Icon */}
          <Link
            href="/dashboard"
            className="p-2 rounded-lg bg-[#FF5C8D]/10 text-[#FF5C8D] hover:bg-[#FF5C8D]/20 transition"
            title="Dashboard"
          >
            <LayoutDashboard className="w-6 h-6" />
          </Link>

          {/* Login Buttons */}
          <button className="px-4 py-2 rounded-lg bg-white text-[#1B1B2F] font-semibold shadow-md hover:scale-105 transition">
            Google Login
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#FF5C8D] text-white font-semibold shadow-md hover:bg-[#e14c76] transition">
            Other Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-2 rounded-xl text-[#FF5C8D] hover:bg-[#FF5C8D]/10 transition">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full h-10 items-center flex justify-center fontee bg-slate-950 text-center text-white">Managed By Dev Rai</div>
    </nav>
  );
};

export default Navbar;
