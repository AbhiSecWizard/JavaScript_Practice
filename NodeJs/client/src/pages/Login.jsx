import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "sonner"; // Sonner library se toast aur container import kiya

// Backend API configuration
const API_BASE_URL = "http://localhost:3000/api/vi";
axios.defaults.withCredentials = true;

const Auth = () => {
  const navigate = useNavigate();

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    const isLogin = localStorage.getItem("login");
    if (isLogin) {
      navigate("/");
    }
  }, [navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Frontend Validations using Sonner Toasts
    if (!inputValue.email || !inputValue.password) {
      return toast.error("कृपया सभी जरूरी फील्ड्स भरें!");
    }

    if (!isLoginMode && !inputValue.username) {
      return toast.error("कृपया यूज़रनेम भरें!");
    }

    if (!isLoginMode && inputValue.password !== inputValue.confirmPassword) {
      return toast.error("पासवर्ड मैच नहीं हो रहा है!");
    }

    try {
      setIsLoading(true);

      if (isLoginMode) {
        // --- LOGIN INTEGRATION ---
        const response = await axios.post(`${API_BASE_URL}/login`, {
          email: inputValue.email,
          password: inputValue.password
        });

        if (response.data.success) {
          toast.success("सफलतापूर्वक लॉगिन हो गया!");
          localStorage.setItem("login", "true");
          
          // Chota sa delay taaki user toast message dekh sake redirection se pehle
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }

      } else {
        // --- REGISTER INTEGRATION ---
        const response = await axios.post(`${API_BASE_URL}/register`, {
          username: inputValue.username,
          email: inputValue.email,
          password: inputValue.password
        });

        if (response.data.status) {
          toast.success("रजिस्ट्रेशन सफल रहा! अब लॉगिन करें।");
          setIsLoginMode(true); 
          setInputValue({ username: "", email: "", password: "", confirmPassword: "" });
        }
      }
    } catch (error) {
      console.error("Auth Error:", error);
      // Backend se aane wala exact custom message toast par dikhega
      const backendMessage = error.response?.data?.message || "Kuch galat hua. Kripya fir se prayas karein.";
      toast.error(backendMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4 selection:bg-blue-500 selection:text-white">
      {/* Toaster Component: Ye dark theme ke notifications ko handle karega */}
      <Toaster position="top-center" richColors theme="dark" closeButton />

      <form 
        onSubmit={handleFormSubmit} 
        className="w-full max-w-md bg-gray-900/50 backdrop-blur-xl border border-gray-800/80 shadow-2xl rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300"
      >
        <div className="flex flex-col gap-1 text-center mb-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-100">
            {isLoginMode ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-sm text-gray-400">
            {isLoginMode ? "Sign in to access your dashboard" : "Get started with your free account today"}
          </p>
        </div>

        {/* Username (Only Signup Mode) */}
        {!isLoginMode && (
          <div className="flex flex-col gap-1.5">
            <label htmlFor="username" className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={inputValue.username}
              onChange={handleOnChange}
              id="username"
              placeholder="johndoe"
              className="bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white transition-all text-sm placeholder:text-gray-600"
              required
            />
          </div>
        )}

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={inputValue.email}
            onChange={handleOnChange}
            id="email"
            placeholder="name@example.com"
            className="bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white transition-all text-sm placeholder:text-gray-600"
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={inputValue.password}
            onChange={handleOnChange}
            id="password"
            placeholder="••••••••"
            className="bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white transition-all text-sm placeholder:text-gray-600"
            required
          />
        </div>

        {/* Confirm Password (Only Signup Mode) */}
        {!isLoginMode && (
          <div className="flex flex-col gap-1.5">
            <label htmlFor="confirmPassword" className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={inputValue.confirmPassword}
              onChange={handleOnChange}
              id="confirmPassword"
              placeholder="••••••••"
              className="bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white transition-all text-sm placeholder:text-gray-600"
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <button 
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/50 disabled:text-gray-400 font-semibold text-white py-3 rounded-xl transition-all mt-2 active:scale-[0.99] flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 text-sm"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Securing session...
            </>
          ) : isLoginMode ? "Sign In" : "Get Started"}
        </button>

        {/* Toggle Mode Link */}
        <p className="text-center text-sm text-gray-400 mt-1">
          {isLoginMode ? "New to our platform?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => {
              setIsLoginMode(!isLoginMode);
              setInputValue({ username: "", email: "", password: "", confirmPassword: "" });
            }}
            className="text-blue-500 hover:text-blue-400 underline underline-offset-4 font-medium focus:outline-none transition-colors"
          >
            {isLoginMode ? "Create an account" : "Sign in instead"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Auth;