import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* ── FACULTY DATA — replace image with real photo paths ── */
const facultyMembers = [
  {
    id: 1,
    name: "Dr. Vaishali Manikrao Patil",
    role: "Associate Professor & Principal / H.O.D.",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/vaishali.jpg",
    profileLink: "https://ccsuniversity.blr1.cdn.digitaloceanspaces.com/cv/pdf/VMP_Profile.pdf",
  },
  {
    id: 2,
    name: "Dr. Amrish Kumar",
    role: "Associate Professor",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/F-Amrish-Kumar.jpg",
    profileLink: "https://ccsuniversity.blr1.cdn.digitaloceanspaces.com/cv/pdf/re-Amrish-Kumar.pdf",
  },
  {
    id: 3,
    name: "Dr. Bhoomika Chaudhary",
    role: "Assistant Professor",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/F-Bhoomika.jpg",
    profileLink: "https://ccsuniversity.blr1.cdn.digitaloceanspaces.com/cv/pdf/re-bhoomika.pdf",
  },
  {
    id: 4,
    name: "Sh. Ranjan Kaushik",
    role: "Assistant Professor",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/F-Rajan-Kaushik.jpg",
    profileLink: "https://ccsuniversity.blr1.cdn.digitaloceanspaces.com/cv/pdf/re-Rajan-Kaushik.pdf",
  },
  {
    id: 5,
    name: "Mr. Dharmender Singh",
    role: "Assistant Professor",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/F-Dharmender-Singh.jpg",
    profileLink: "https://ccsuniversity.blr1.cdn.digitaloceanspaces.com/cv/pdf/Re-Dharmender-Singh.pdf",
  },
];

/* How many cards visible at once per breakpoint */
const getVisibleCount = () => {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth >= 1280) return 5;
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 640)  return 3;
  return 1;
};

/* ── Placeholder Avatar ── */
const AvatarFallback = () => (
  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center mx-auto">
    <FaUserTie className="text-slate-400 text-4xl" />
  </div>
);

const FacultyMembers = () => {
  const [current, setCurrent]         = useState(0);
  const [visibleCount, setVisible]    = useState(getVisibleCount());
  const trackRef                      = useRef(null);

  /* Responsive visible count */
  useEffect(() => {
    const onResize = () => setVisible(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const totalPages = Math.ceil(facultyMembers.length / visibleCount);

  const goTo = useCallback((page) => {
    setCurrent(Math.max(0, Math.min(page, totalPages - 1)));
  }, [totalPages]);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  /* Visible slice */
  const start   = current * visibleCount;
  const visible = facultyMembers.slice(start, start + visibleCount);

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto">

        {/* ── Heading ── */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2f5a] font-['Georgia',serif]">
            Faculty Members
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />
        </div>

        {/* ── Carousel Wrapper ── */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous"
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#0f2f5a] hover:bg-[#0f2f5a] hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          {/* Cards Track */}
          <div
            ref={trackRef}
            className="grid gap-4 transition-all duration-500"
            style={{
              gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
            }}
          >
            {visible.map((member, idx) => (
              <div
                key={member.id}
                className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col items-center text-center"
                style={{
                  opacity: 1,
                  animation: `fadeSlideIn 0.35s ease both`,
                  animationDelay: `${idx * 60}ms`,
                }}
              >
                {/* Photo */}
                <div className="relative mb-4">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full mx-auto ring-4 ring-white shadow-md"
                    />
                  ) : (
                    <AvatarFallback />
                  )}
                  {/* Hover ring */}
                  <div className="absolute -inset-1 rounded-full border-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Name */}
                <h3 className="text-sm sm:text-base font-bold text-[#0f2f5a] leading-tight">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-xs text-gray-500 font-medium">
                  ({member.role})
                </p>

                {/* Divider */}
                <div className="my-3 w-8 h-px bg-gray-200 group-hover:w-12 group-hover:bg-cyan-400 transition-all duration-300" />

                {/* Profile link */}
                <Link
                  to={member.profileLink}
                  className="text-[11px] font-bold tracking-widest uppercase text-[#0f2f5a] hover:text-cyan-600 transition-colors"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={current >= totalPages - 1}
            aria-label="Next"
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#0f2f5a] hover:bg-[#0f2f5a] hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>

        {/* ── Dot Indicators ── */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-3 bg-[#0f2f5a]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* ── View All Button ── */}
        <div className="flex justify-center mt-8">
          <Link
            to="/academics/faculty-members"
            className="px-8 py-3 rounded-lg border-2 border-[#0f2f5a] text-[#0f2f5a] text-sm font-bold hover:bg-[#0f2f5a] hover:text-white transition-all duration-200 hover:scale-105"
          >
            View All Faculty
          </Link>
        </div>

      </div>

      {/* Keyframe */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default FacultyMembers;