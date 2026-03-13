import { FaClock, FaCheckCircle, FaGraduationCap, FaFlask, FaMicroscope, FaLeaf } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { GiMolecule, GiDna1 } from "react-icons/gi";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────
   PROGRAMS DATA
───────────────────────────────────────── */
const programs = [
  {
    id: "bpharm",
    label: "A",
    title: "B. Pharm",
    fullTitle: "Bachelor of Pharmacy",
    duration: "4 Years (8 Semesters)",
    seats: "60 Seats",
    tagColor: "bg-blue-100 text-blue-700 border-blue-200",
    accentColor: "#1a8fe3",
    eligibility: {
      intro: "A pass in any of the following examinations –",
      points: [
        "Candidate shall have passed 10+2 examination conducted by the respective state/central government authorities recognized as equivalent to 10+2 examination by the Association of Indian Universities (AIU) with English as one of the subjects and Physics, Chemistry, Mathematics/Biology as optional subjects individually.",
        "Any other qualification approved by the Pharmacy Council of India as equivalent to any of the above examinations.",
      ],
    },
    highlights: ["PCI Approved", "CCSU Affiliated", "8 Semesters"],
  },
  {
    id: "bpharm-lateral",
    label: "B",
    title: "B.Pharm (Lateral Entry)",
    fullTitle: "Bachelor of Pharmacy – Lateral Entry",
    duration: "3 Years (6 Semesters)",
    seats: "10% of Sanctioned Intake",
    tagColor: "bg-cyan-100 text-cyan-700 border-cyan-200",
    accentColor: "#06b6d4",
    eligibility: {
      intro: "A pass in any of the following examinations –",
      points: [
        "A pass in D.Pharm (Diploma in Pharmacy) course from an institution approved by the Pharmacy Council of India under section 12 of the Pharmacy Act.",
        "Any other qualification recognized as equivalent to the above by the Pharmacy Council of India (PCI) and the respective University.",
      ],
    },
    highlights: ["Direct 2nd Year", "D.Pharm Eligible", "6 Semesters"],
  },
  {
    id: "mpharm",
    label: "C",
    title: "M.Pharm (Proposed)",
    fullTitle: "Master of Pharmacy",
    duration: "2 Years (4 Semesters)",
    seats: "15 Seats (Proposed)",
    tagColor: "bg-purple-100 text-purple-700 border-purple-200",
    accentColor: "#9333ea",
    eligibility: {
      intro: "A pass in any of the following examinations –",
      points: [
        "B.Pharm degree from a PCI approved institution with minimum 55% marks in aggregate.",
        "GPAT qualified candidates will be given preference in admission as per PCI and University norms.",
        "Subject to approval from Pharmacy Council of India and University authorities.",
      ],
    },
    highlights: ["Post Graduate", "GPAT Preferred", "4 Semesters"],
  },
];

/* ─────────────────────────────────────────
   Science Illustration (SVG-based)
───────────────────────────────────────── */
const ScienceIllustration = () => (
  <div className="relative w-full h-80 lg:h-full flex items-center justify-center select-none pointer-events-none">
    {/* Decorative dot grid — top right */}
    <div
      className="absolute top-0 right-0 w-40 h-40 opacity-30"
      style={{
        backgroundImage: "radial-gradient(circle, #f97316 1.5px, transparent 1.5px)",
        backgroundSize: "12px 12px",
      }}
    />
    {/* Decorative circle — top left */}
    <div className="absolute top-4 left-8 w-20 h-20 rounded-full border-[6px] border-orange-400 opacity-70"
      style={{ backgroundImage: "repeating-linear-gradient(45deg,#f97316 0,#f97316 3px,transparent 0,transparent 50%)", backgroundSize: "10px 10px" }}
    />
    {/* Decorative circle — bottom right */}
    <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full border-[6px] border-teal-500 opacity-70"
      style={{ backgroundImage: "repeating-linear-gradient(45deg,#14b8a6 0,#14b8a6 3px,transparent 0,transparent 50%)", backgroundSize: "10px 10px" }}
    />

    {/* Center science icons cluster */}
    <div className="relative flex items-end justify-center gap-4 pb-4">
      {/* Microscope */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-100 flex items-center justify-center shadow-lg">
          <FaMicroscope className="text-blue-600 text-4xl sm:text-5xl" />
        </div>
      </div>

      {/* DNA / Flask center piece */}
      <div className="flex flex-col items-center mb-4">
        <div className="w-14 h-14 rounded-full bg-blue-800 flex items-center justify-center shadow-md mb-2">
          <GiMolecule className="text-white text-2xl" />
        </div>
        <div className="w-10 h-24 rounded-full bg-blue-500 opacity-80 shadow" />
      </div>

      {/* Plant / Nature */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center shadow-md mb-1">
          <FaLeaf className="text-green-600 text-3xl" />
        </div>
        <div className="w-4 h-10 bg-green-500 rounded-full mx-auto" />
      </div>

      {/* DNA / Magnifier */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center shadow-md">
          <GiDna1 className="text-amber-600 text-3xl" />
        </div>
      </div>

      {/* Flask */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-800 flex items-center justify-center shadow-lg">
          <FaFlask className="text-white text-4xl sm:text-5xl" />
        </div>
      </div>
    </div>

    {/* Floating badge */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white border border-blue-100 shadow-md rounded-full px-4 py-2">
      <MdScience className="text-blue-600 text-lg" />
      <span className="text-xs font-bold text-blue-800 tracking-wide">PCI Approved Programs</span>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Single Program Block
───────────────────────────────────────── */
const ProgramBlock = ({ program, isLast }) => (
  <div
    id={program.id}
    className={`py-10 ${!isLast ? "border-b-2 border-dashed border-gray-200" : ""}`}
  >
    {/* Program Label + Title */}
    <div className="flex items-start gap-4 mb-6">
      <span
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm shadow-md"
        style={{ backgroundColor: program.accentColor }}
      >
        {program.label}
      </span>
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2f5a] leading-tight font-['Georgia',serif]">
          {program.title}
        </h2>
        <p className="text-sm text-gray-400 font-medium mt-0.5">{program.fullTitle}</p>
      </div>
    </div>

    {/* Highlight chips */}
    <div className="flex flex-wrap gap-2 mb-6">
      {program.highlights.map((h) => (
        <span
          key={h}
          className={`text-xs font-semibold px-3 py-1 rounded-full border ${program.tagColor}`}
        >
          {h}
        </span>
      ))}
    </div>

    {/* Duration */}
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-1">
        <FaClock style={{ color: program.accentColor }} className="text-base shrink-0" />
        <h3 className="text-base font-bold text-gray-800">Duration:</h3>
      </div>
      <p className="ml-6 text-gray-600 text-sm sm:text-base">{program.duration}</p>
      {program.seats && (
        <p className="ml-6 text-gray-500 text-sm mt-0.5">
          <span className="font-semibold">Intake:</span> {program.seats}
        </p>
      )}
    </div>

    {/* Eligibility */}
    <div>
      <div className="flex items-center gap-2 mb-2">
        <FaGraduationCap style={{ color: program.accentColor }} className="text-base shrink-0" />
        <h3 className="text-base font-bold text-gray-800">Eligibility:</h3>
      </div>
      <p className="ml-6 text-gray-600 text-sm sm:text-base mb-3">
        {program.eligibility.intro}
      </p>
      <ul className="ml-6 space-y-3">
        {program.eligibility.points.map((pt, i) => (
          <li key={i} className="flex items-start gap-3">
            <FaCheckCircle
              className="mt-1 shrink-0 text-sm"
              style={{ color: program.accentColor }}
            />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{pt}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
const Courses = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
              Charak School of Pharmacy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
              Academic Programs
              </h1>
              <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
              <p className="mt-5 text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Explore the academic programs offered, designed to provide comprehensive knowledge and professional skills in pharmacy.
              </p>
          </div>
        </div>

        <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-start">

          {/* LEFT: Program content */}
          <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm px-6 sm:px-10 py-4">
            {programs.map((program, i) => (
              <ProgramBlock
                key={program.id}
                program={program}
                isLast={i === programs.length - 1}
              />
            ))}
          </div>

          {/* RIGHT: Sticky illustration */}
          <div className="hidden lg:block sticky top-24 h-[520px] bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-6">
            <ScienceIllustration />

            {/* Quick nav */}
            <div className="mt-6 space-y-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Jump to Program
              </p>
              {programs.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-200 group"
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-extrabold shrink-0"
                    style={{ backgroundColor: p.accentColor }}
                  >
                    {p.label}
                  </span>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-[#0f2f5a] transition-colors">
                    {p.title}
                  </span>
                  <span className="ml-auto text-gray-300 group-hover:text-gray-500 text-xs">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Apply CTA ── */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#0f2f5a] to-[#1a3a6b] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Georgia',serif]">
              Ready to start your pharmacy career?
            </h3>
            <p className="mt-2 text-blue-200 text-sm sm:text-base">
              Applications for 2025-26 session are now open. Limited seats available.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="https://exams.ccsuforms.in/Reg_BPharma"
              target="_blank"
              className="px-7 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-bold shadow-md transition-all duration-200 hover:scale-105"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 rounded-lg border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-all duration-200"
            >
              Contact Admissions
            </Link>
          </div>
        </div>

      </div>
    </section>
    </>
    
  );
};

export default Courses;