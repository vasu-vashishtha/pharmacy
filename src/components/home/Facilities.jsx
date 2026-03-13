import { useRef } from "react";
import { Link } from "react-router-dom";
import { GiChemicalDrop, GiMedicines, GiMicroscope } from "react-icons/gi";
import { MdComputer, MdBiotech, MdScience, MdWifi } from "react-icons/md";
import { FaWrench, FaFlask, FaLeaf, FaTablets, FaStethoscope, FaHeartbeat, FaBook, FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* ── ALL Facilities DATA ── */
const facilities = [
  {
    id: 1,
    label: "Central Instrumental Facility",
    icon: <FaStethoscope className="text-3xl text-white" />,
    bgColor: "bg-[#1a8fe3]",
    shadowColor: "shadow-blue-200",
    hoverBorder: "hover:border-blue-300",
  },
  {
    id: 2,
    label: "Fitness Centre",
    icon: <FaHeartbeat className="text-3xl text-white" />,
    bgColor: "bg-purple-600",
    shadowColor: "shadow-purple-200",
    hoverBorder: "hover:border-purple-300",
  },
  {
    id: 3,
    label: "Central Library",
    icon: <FaBook className="text-3xl text-white" />,
    bgColor: "bg-cyan-500",
    shadowColor: "shadow-cyan-200",
    hoverBorder: "hover:border-cyan-300",
  },
  {
    id: 4,
    label: "Wi-fi Campus",
    icon: <MdWifi className="text-3xl text-white" />,
    bgColor: "bg-[#1a8fe3]",
    shadowColor: "shadow-blue-200",
    hoverBorder: "hover:border-blue-300",
  },
  {
    id: 5,
    label: "Pharmaceutics Lab",
    icon: <FaTablets className="text-3xl text-white" />,
    bgColor: "bg-[#1a8fe3]",
    shadowColor: "shadow-blue-200",
    hoverBorder: "hover:border-blue-300",
  },
  {
    id: 6,
    label: "Pharmacology Lab",
    icon: <GiMedicines className="text-3xl text-white" />,
    bgColor: "bg-purple-600",
    shadowColor: "shadow-purple-200",
    hoverBorder: "hover:border-purple-300",
  },
  {
    id: 7,
    label: "Pharmaceutical Chemistry Lab",
    icon: <FaFlask className="text-3xl text-white" />,
    bgColor: "bg-cyan-500",
    shadowColor: "shadow-cyan-200",
    hoverBorder: "hover:border-cyan-300",
  },
  {
    id: 8,
    label: "Pharmacognosy Lab",
    icon: <FaLeaf className="text-3xl text-white" />,
    bgColor: "bg-[#1a8fe3]",
    shadowColor: "shadow-blue-200",
    hoverBorder: "hover:border-blue-300",
  },
  {
    id: 9,
    label: "Computer Lab",
    icon: <MdComputer className="text-3xl text-white" />,
    bgColor: "bg-red-500",
    shadowColor: "shadow-red-200",
    hoverBorder: "hover:border-red-300",
  },
  {
    id: 10,
    label: "Machine Room",
    icon: <FaWrench className="text-3xl text-white" />,
    bgColor: "bg-teal-500",
    shadowColor: "shadow-teal-200",
    hoverBorder: "hover:border-teal-300",
  },
  {
    id: 11,
    label: "Microbiology Lab",
    icon: <GiMicroscope className="text-3xl text-white" />,
    bgColor: "bg-emerald-500",
    shadowColor: "shadow-emerald-200",
    hoverBorder: "hover:border-emerald-300",
  },
  {
    id: 12,
    label: "Biochemistry Lab",
    icon: <MdBiotech className="text-3xl text-white" />,
    bgColor: "bg-orange-500",
    shadowColor: "shadow-orange-200",
    hoverBorder: "hover:border-orange-300",
  },
  {
    id: 13,
    label: "Research Lab",
    icon: <MdScience className="text-3xl text-white" />,
    bgColor: "bg-indigo-500",
    shadowColor: "shadow-indigo-200",
    hoverBorder: "hover:border-indigo-300",
  },
  {
    id: 14,
    label: "Analytical Lab",
    icon: <GiChemicalDrop className="text-3xl text-white" />,
    bgColor: "bg-pink-500",
    shadowColor: "shadow-pink-200",
    hoverBorder: "hover:border-pink-300",
  },
];

const SCROLL_AMOUNT = 320;

const Facilities = () => {
  const trackRef = useRef(null);

  const scrollLeft  = () => trackRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  const scrollRight = () => trackRef.current?.scrollBy({ left:  SCROLL_AMOUNT, behavior: "smooth" });

  return (
    <section className="w-full bg-[#f0f2f5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">

        {/* ── Section Heading ── */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2f5a] font-['Georgia',serif]">
            Facilities
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />
          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            State-of-the-art laboratories and infrastructure to support
            academic excellence and pharmaceutical research.
          </p>
        </div>

        {/* ── Carousel ── */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#0f2f5a] hover:bg-[#0f2f5a] hover:text-white transition-all duration-200 hover:scale-110"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          {/* Scrollable track — scrollbar hidden */}
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scroll-smooth px-1 py-3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {facilities.map((item) => (
              <Link
                to="/viewallfacilities"
                key={item.id}
                className={`group flex-shrink-0 flex flex-col items-center gap-4 bg-white rounded-xl border border-gray-100 p-6 w-44 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${item.hoverBorder}`}
              >
                {/* Icon circle */}
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${item.bgColor} flex items-center justify-center shadow-md ${item.shadowColor} group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center leading-snug group-hover:text-[#0f2f5a] transition-colors">
                  {item.label}
                </p>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#0f2f5a] hover:bg-[#0f2f5a] hover:text-white transition-all duration-200 hover:scale-110"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>

        {/* Hide webkit scrollbar */}
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        {/* ── CTA Button ── */}
        <div className="flex justify-center mt-10">
          <Link
            to="/viewallfacilities"
            className="px-10 py-3.5 rounded-lg bg-[#0f2f5a] hover:bg-[#1a3a6b] text-white text-sm font-bold tracking-wide shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            View All Facilities
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Facilities;