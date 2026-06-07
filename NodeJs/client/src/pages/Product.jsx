import { useState } from "react";
import axios from "axios";

const Product = () => {
  const [postData, setPostData] = useState({
    title: "",
    subtitle: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL || "http://localhost:3000/"}api/v1/createpost`,
        postData,
        { withCredentials: true }
      );

      console.log("Post Created:", response.data);
      setStatus({ type: "success", message: "Post published successfully!" });
      
      setPostData({ title: "", subtitle: "", description: "" });
    } catch (error) {
      console.error(error.response?.data || error.message);
      setStatus({ 
        type: "error", 
        message: error.response?.data?.message || "Failed to create post." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased flex items-center justify-center">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
        
        {/* Component Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Create a New Publication
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            Fill in the details below to deploy your post directly onto the main dashboard feed.
          </p>
        </div>

        {/* Dynamic Status Notifications */}
        {status.message && (
          <div className={`mb-5 p-3.5 rounded-xl text-sm border flex items-center gap-2 ${
            status.type === "success" 
              ? "bg-green-50 border-green-100 text-green-700" 
              : "bg-red-50 border-red-100 text-red-600"
          }`}>
            <span>{status.message}</span>
          </div>
        )}

        {/* Input Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Post Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="e.g., Mastering Database Relationships"
              value={postData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Subtitle / Hook Line
            </label>
            <input
              type="text"
              name="subtitle"
              required
              placeholder="e.g., An architectural guide for Mongoose models"
              value={postData.subtitle}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Detailed Description
            </label>
            <textarea
              name="description"
              required
              rows="5"
              placeholder="Write the primary body content of your post here..."
              value={postData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all resize-none"
            />
          </div>

          {/* Action Trigger Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Publishing..." : "Publish Post"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default Product;