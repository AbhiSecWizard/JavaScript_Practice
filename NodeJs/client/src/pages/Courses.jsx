import { useState, useMemo } from "react";
import data from "../assets/data.json";

// React Icons
import { FaStar, FaRegClock, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";

const Courses = () => {
 
  const [pagination, setPagination] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const PerPageItem = 10;
    const filteredCourses = useMemo(() => {
  return data.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [searchTerm]);

  // 1. Total items और Total pages को बार-बार कैलकुलेट होने से बचाना
const totalItem = filteredCourses.length;
  const totalPage = Math.ceil(totalItem / PerPageItem);

  // 2. सिर्फ जरूरत पड़ने पर ही डेटा को स्लाइस करना (Optimized)
  const currentCourses = useMemo(() => {
    const lastIndex = pagination * PerPageItem;
    const firstIndex = lastIndex - PerPageItem;
    return filteredCourses.slice(firstIndex, lastIndex);;
  }, [pagination,filteredCourses]);

  // 3. पजिशनेन एरे को मेमोइज़ करना ताकि हर रेंडर पर नया एरे न बने
  const pageNumbers = useMemo(() => {
    return Array.from({ length: totalPage }, (_, i) => i + 1);
  }, [totalPage]);
 
  return (
    <div className="min-h-screen flex flex-col items-center text-white py-10 px-4">
      <h1 className="text-5xl font-bold text-center mb-4 ">
       Learn Your Dream Skills
      </h1>
      <p className="text-2xl font-bold text-center mb-10">Realible Price </p>
      <div className="items-center mb-10 uppercase ">
       {/* <input type="text" className="uppercase outline-none border-2 border-blue-400 rounded-4xl rounded-r-none pl-10 w-2xl py-3" placeholder="Search your dream course" /> */}
<input
  type="text"
  value={searchTerm}
  onChange={(e) => {
    setSearchTerm(e.target.value);
    setPagination(1);
  }}
  className="uppercase outline-none border-2 border-blue-400 rounded-4xl rounded-r-none pl-10 w-2xl py-3"
  placeholder="Search your dream course"
/>
       <button className="py-3 rounded-4xl rounded-l-none bg-blue-400 border-2 border-blue-400 px-7 font-bold">Search</button>
      </div>
      {/* Course Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {currentCourses.map((item) => (
          // ध्यान दें: यहाँ key के लिए item.id का उपयोग करना बेस्ट है, अगर id नहीं है तो item.title का उपयोग करें
          <div
            key={item.id || item.title} 
            className="w-full max-w-[290px] mx-auto min-h-[400px] flex flex-col border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-200"
          >
            {/* Image Section */}
            <div className="relative h-40 w-full bg-gray-800">
              <img
                src={item.courseImage}
                alt={item.courseName}
                className="w-full h-full object-cover"
                loading="lazy" // ब्राउज़र परफॉर्मेंस के लिए इमेजेस को लेज़ी लोड करें
              />
              <span className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                {item.category}
              </span>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-1 gap-2">
              {/* Category/Name & Rating */}
              <div className="flex justify-between items-center text-[11px] text-gray-400 font-medium">
                <span className="flex items-center gap-1 text-blue-400 truncate max-w-[150px]">
                  <FiBookOpen size={11} /> {item.courseName}
                </span>
                <span className="flex items-center gap-0.5 text-yellow-400 font-bold">
                  <FaStar size={11} /> {item.rating}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-100 line-clamp-2 leading-snug">
                {item.title}
              </h3>

              {/* Short Description */}
              <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                {item.description}
              </p>

              {/* Instructor & Meta info (Single Line) */}
              <div className="flex items-center justify-between text-[11px] text-gray-500 mt-1 pt-2 border-t border-gray-800">
                <span className="truncate max-w-[100px]">By {item.instructor}</span>
                <span className="flex items-center gap-1">
                  <FaRegClock size={11} /> {item.duration}
                </span>
                <span className="text-emerald-400 font-medium">{item.level}</span>
              </div>

              {/* Price & Action Button */}
              <div className="flex items-center justify-between mt-auto pt-3">
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-gray-500">Price</span>
                  <span className="text-lg font-bold text-white">₹{item.price}</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-150">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
        <button
          onClick={() => setPagination((prev) => Math.max(prev - 1, 1))}
          disabled={pagination === 1}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all
            ${pagination === 1 ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-gray-900 text-white hover:bg-gray-800"}`}
        >
          <FaChevronLeft size={10} /> Prev
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => setPagination(page)}
            className={`w-8 h-8 rounded-lg text-sm font-medium transition-all
              ${pagination === page ? "bg-blue-600 text-white" : "bg-gray-900 text-gray-400 hover:bg-gray-800"}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setPagination((prev) => Math.min(prev + 1, totalPage))}
          disabled={pagination === totalPage}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all
            ${pagination === totalPage ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-gray-900 text-white hover:bg-gray-800"}`}
        >
          Next <FaChevronRight size={10} />
        </button>
      </div>
    </div>
  );
};

export default Courses;