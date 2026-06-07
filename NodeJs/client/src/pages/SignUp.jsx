import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleOnChange(e) {
    const { value, name } = e.target;
    setInput((val) => ({
      ...val,
      [name]: value,
    }));
    if (errorMessage) setErrorMessage("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}api/v1/createuser`, input);
      
      // Account create hone ke baad user ko clean workflow ke liye login screen par bhejna best practice hai
      navigate("/login");
    } catch (error) {
      console.error("Error from frontend of the signup page", error);
      const backendError = error.response?.data?.message || "Registration failed. Please try again.";
      setErrorMessage(backendError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50/50 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
        
        {/* Brand/Header */}
        <div className="text-center mb-8">
          <span className="text-2xl font-black tracking-tight text-indigo-600">
            NEXUS<span className="text-slate-800">.</span>
          </span>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 tracking-tight">
            Create an account
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            Join us to start managing your personalized content
          </p>
        </div>

        {/* Error Alert Box */}
        {errorMessage && (
          <div className="mb-5 p-3.5 bg-red-50 border border-red-100 rounded-xl flex items-start gap-2.5 text-sm text-red-600 animate-fadeIn">
            <svg className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Input Field */}
          <div>
            <label htmlFor="username" className="block text-xs font-semibold text-slate-700 tracking-wider uppercase mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={input.username}
              onChange={handleOnChange}
              placeholder="johndoe"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200"
            />
          </div>

          {/* Email Input Field */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 tracking-wider uppercase mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={input.email}
              onChange={handleOnChange}
              placeholder="name@company.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200"
            />
          </div>

          {/* Password Input Field */}
          <div>
            <label htmlFor="password" className="block text-xs font-semibold text-slate-700 tracking-wider uppercase mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={input.password}
              onChange={handleOnChange}
              placeholder="At least 8 characters"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold text-sm rounded-xl transition-all shadow-sm shadow-indigo-100 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Creating account...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {/* Dynamic Navigation Link */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer underline underline-offset-4 decoration-indigo-200 hover:decoration-indigo-500 transition-colors"
          >
            Sign In
          </span>
        </p>

      </div>
    </div>
  );
};

export default SignUp;