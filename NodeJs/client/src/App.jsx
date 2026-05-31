import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Courses from "./pages/Courses";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-36">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
        </Routes>

      </div>

    </div>
  );
};

export default App;