import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBookOpen,
  FaPhoneAlt,
  FaInfoCircle,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import logoForNav from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  // 1. सबसे महत्वपूर्ण सुधार: स्टेट बनते समय ही localStorage से वैल्यू उठाएं
  // इससे रीफ्रेश करने पर UI कभी भी फ्लिकर (झटका) नहीं मारेगा
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("login") === "true";
  });

  // 2. अब आपको माउंट होने पर बार-बार चेक करने वाले useEffect की जरूरत नहीं है
  // लेकिन अगर यूजर दूसरे टैब में लॉगआउट करता है, तो उसे सिंक में रखने के लिए यह इस्तेमाल कर सकते हैं
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("login") === "true");
    };

    // अन्य विंडोज/टैब में होने वाले बदलावों को ट्रैक करने के लिए (Optional पर बढ़िया प्रैक्टिस)
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // लॉगआउट फंक्शन
  const handleLogout = () => {
    localStorage.removeItem("login");
    setIsLoggedIn(false);
    navigate("/login"); 
  };

  const navItems = [
    { name: "Home", path: "/", icon: <FaGraduationCap size={18} /> },
    { name: "Courses", path: "/courses", icon: <FaBookOpen size={18} /> },
    { name: "About", path: "/about", icon: <FaInfoCircle size={18} /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt size={18} /> },
  ];

  return (
    <div className="fixed top-5 left-0 w-full z-50 flex justify-center">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-[94%] max-w-7xl px-8 py-4 flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
      >
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.08, rotate: 2 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logoForNav}
            className="w-[95px] object-contain drop-shadow-xl"
            alt="logo"
          />
        </motion.div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-3">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => `
                relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 overflow-hidden
                ${isActive ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30" : "text-gray-200 hover:bg-white/10 hover:text-white"}
              `}
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* BUTTONS / PROFILE SECTION */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            /* --- IF USER IS LOGGED IN SHOW PROFILE & LOGOUT --- */
            <div className="flex items-center gap-5">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-gray-200 hover:text-blue-400 cursor-pointer transition-colors"
                onClick={() => navigate("/profile")}
              >
                <FaUserCircle size={24} />
                <span className="text-sm font-medium hidden sm:inline">Profile</span>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 font-medium hover:bg-red-500 hover:text-white transition-all duration-300 text-sm"
              >
                <FaSignOutAlt size={14} />
                Logout
              </motion.button>
            </div>
          ) : (
            /* --- IF USER IS NOT LOGGED IN SHOW LOGIN & GET STARTED --- */
            <>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink
                  to="/login"
                  className="px-5 py-2.5 rounded-xl border border-blue-400 text-white font-medium hover:bg-blue-500 transition-all duration-300 text-sm"
                >
                  Login
                </NavLink>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 0px 25px rgb(59 130 246)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to="/login"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg transition-all duration-300 text-sm"
                >
                  Get Started
                </NavLink>
              </motion.div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;