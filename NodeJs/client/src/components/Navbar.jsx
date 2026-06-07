import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await axios.post(
        `${import.meta.env.VITE_API_URL || "http://localhost:3000/"}api/v1/logout`,
        {},
        { withCredentials: true }
      );
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const getProfile = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL || "http://localhost:3000/"}api/v1/profile`
      );
      console.log("Profile Data Successfully Retrieved:", response.data.user);
      alert(`Logged in as: ${response.data.user?.username || "User"}`);
    } catch (error) {
      console.error("Profile Fetch Failed:", error.response?.data?.message || error.message);
    }
  };

  // Active styles utility function for clean code
  const linkStyles = ({ isActive }) =>
    `text-sm font-semibold tracking-wide transition-colors duration-200 ${
      isActive ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <nav className="bg-white border-b border-slate-200 fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between shadow-sm font-sans antialiased">
      {/* Brand Logo Section */}
      <div className="flex items-center space-x-8">
        <NavLink to="/product" className="text-xl font-black tracking-tight text-indigo-600">
          NEXUS<span className="text-slate-800">.</span>
        </NavLink>
        
        {/* Navigation Middle Links */}
        <div className="hidden sm:flex space-x-6">
          <NavLink to="/product" className={linkStyles}>
            Create Post
          </NavLink>
          <NavLink to="/postlist" className={linkStyles}>
            Your Feed
          </NavLink>
        </div>
      </div>

      {/* Operational Actions Section */}
      <div className="flex items-center space-x-4">
        <button
          onClick={getProfile}
          className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
        >
          Check Profile
        </button>
        
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="text-sm font-semibold bg-red-50 text-red-600 px-4 py-2 rounded-xl hover:bg-red-100 disabled:opacity-50 transition-all cursor-pointer"
        >
          {isLoggingOut ? "Leaving..." : "Logout"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;