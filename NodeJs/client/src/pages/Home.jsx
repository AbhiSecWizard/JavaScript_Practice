import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900 overflow-x-hidden relative">
      
      {/* BACKGROUND DECORATIONS (2D Abstract Shapes) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0">
        {/* Decorative Grid Pattern */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366f1" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Soft Glowing Gradient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[100px]" />
      </div>

      {/* HERO SECTION CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Catchy Marketing Content */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 text-xs font-semibold text-indigo-700 tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
              Introducing Nexus Engine v2.0
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Publish thoughts. <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Organize seamlessly.
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A premium space built for authors and developers. Share interactive publications, structure your inventory, and enjoy crisp typography layouts out-of-the-box.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => navigate("/signup")}
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                Get Started Free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              
              <button
                onClick={() => navigate("/login")}
                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold rounded-xl transition-all hover:bg-slate-50 cursor-pointer flex items-center justify-center"
              >
                Sign In
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Custom 2D Hero SVG Element */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="w-full max-w-[480px] lg:max-w-none aspect-square relative drop-shadow-[0_16px_32px_rgba(99,102,241,0.08)]">
              
              {/* Dynamic 2D Flat Technical SVG Representation */}
              <svg viewBox="0 0 500 500" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Outer Rounded Wrapper Canvas */}
                <rect x="20" y="20" width="460" height="460" rx="32" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                
                {/* Mock Application Top Header Nav Bar */}
                <rect x="40" y="45" width="8" height="8" rx="4" fill="#EF4444" />
                <rect x="54" y="45" width="8" height="8" rx="4" fill="#F59E0B" />
                <rect x="68" y="45" width="8" height="8" rx="4" fill="#10B981" />
                <rect x="100" y="47" width="60" height="4" rx="2" fill="#E2E8F0" />
                <line x1="20" y1="75" x2="480" y2="75" stroke="#EDF2F7" strokeWidth="2" />

                {/* Left Sidebar Layout Guide Block */}
                <rect x="45" y="105" width="110" height="14" rx="6" fill="#F1F5F9" />
                <rect x="45" y="135" width="85" height="10" rx="5" fill="#EEF2F6" />
                <rect x="45" y="160" width="95" height="10" rx="5" fill="#EEF2F6" />
                <rect x="45" y="185" width="70" height="10" rx="5" fill="#EEF2F6" />
                
                {/* Main Component Block Display Layout */}
                <rect x="185" y="105" width="275" height="150" rx="16" fill="url(#svgGradient)" />
                {/* Dynamic Content Rows */}
                <rect x="185" y="280" width="220" height="16" rx="6" fill="#1E293B" />
                <rect x="185" y="310" width="275" height="10" rx="5" fill="#94A3B8" />
                <rect x="185" y="330" width="250" height="10" rx="5" fill="#CBD5E1" />
                
                {/* Secondary Small Status Component Badge */}
                <rect x="185" y="375" width="40" height="40" rx="20" fill="#6366F1" />
                <rect x="240" y="383" width="90" height="10" rx="5" fill="#334155" />
                <rect x="240" y="401" width="60" height="8" rx="4" fill="#94A3B8" />

                {/* Floating Absolute Geometric Design Accent Pills */}
                <g className="animate-bounce" style={{ animationDuration: '4s' }}>
                  <rect x="360" y="375" width="95" height="36" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                  <circle cx="382" cy="393" r="7" fill="#10B981" />
                  <rect x="398" y="389" width="42" height="8" rx="4" fill="#64748B" />
                </g>

                {/* Definitions Container for Vector Colors */}
                <defs>
                  <linearGradient id="svgGradient" x1="185" y1="105" x2="460" y2="255" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1" />
                    <stop offset="1" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
          </div>

        </div>
      </div>

      {/* THREE-COLUMN INTEGRATIONS FEATURE SECTION */}
      <section className="bg-white border-t border-slate-100 py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Engineered for Speed
            </h2>
            <p className="mt-4 text-base text-slate-500 leading-relaxed">
              Everything you need to create user feeds, secure route pipelines, and store data under a single modern structure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-5 font-bold">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-slate-900">User Dashboard</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Seamless isolated views that dynamically query database posts linked uniquely to your authentication session profiles.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-5 font-bold">
                🔒
              </div>
              <h3 className="text-lg font-bold text-slate-900">Secure Sessions</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Strict HTTP-only cookie cross-origin credential routing prevents bad actors from spoofing tokens outside your app context.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 sm:col-span-2 lg:col-span-1 mx-auto w-full">
              <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center mb-5 font-bold">
                🎨
              </div>
              <h3 className="text-lg font-bold text-slate-900">Tailwind Aesthetic</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Carefully optimized scaling hierarchies, fluid hover states, and smooth geometric grids custom tailored for a high-end SaaS presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;