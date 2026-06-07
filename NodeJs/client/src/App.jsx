import { Route, Routes, Link, useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./pages/Login";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import PostList from "./pages/PostList";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

// Global axios defaults setup (Best practice)
axios.defaults.withCredentials = true;

// 1. PROTECTED ROUTE COMPONENT
const ProtectedRoute = () => {
  const [auth, setAuth] = useState({ isAuthenticated: null, loading: true });

  useEffect(() => {
    const verifyUser = async () => {
      try {
        // Backend par ek verification endpoint hit karein (like your profile route)
        await axios.get(`${import.meta.env.VITE_API_URL || "http://localhost:3000/"}api/v1/profile`);
        setAuth({ isAuthenticated: true, loading: false });
      } catch (error) {
        setAuth({ isAuthenticated: false, loading: false });
      }
    };
    verifyUser();
  }, []);

  // Jab tak API request complete na ho, ek elegant loading skeleton dikhayein
  if (auth.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin h-8 w-8 text-indigo-600 border-4 border-slate-200 border-t-indigo-600 rounded-full" />
      </div>
    );
  }

  // Agar authenticated hai toh child routes render honge, nahi toh kick to login
  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

// 2. APP NAVBAR COMPONENT
const AppNavbar = () => {
  return (
 <>
 <Navbar/>
 </> 
  );
};

// 3. MAIN APP COMPONENT
const App = () => {
  const location = useLocation();
  
  // Auth pages aur Home page par Navbar hide rakhne ke liye rule
  const hideNavbarPages = ["/", "/signup", "/login"];
  const shouldHideNavbar = hideNavbarPages.includes(location.pathname);

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900 selection:bg-indigo-100">
      {/* Dynamic Navbar rendering */}
      {!shouldHideNavbar && <AppNavbar />}
      
      <main className={!shouldHideNavbar ? "pt-20" : ""}>
        <Routes>
          {/* Public Routes (Anyone can see these) */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          
          {/* PROTECTED ROUTES LAYER */}
          <Route element={<ProtectedRoute />}>
            <Route path="/product" element={<Product />} />
            <Route path="/postlist" element={<PostList />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;