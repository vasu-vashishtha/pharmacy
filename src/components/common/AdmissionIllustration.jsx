import { FaGraduationCap, FaCheckCircle, FaMicrochip } from "react-icons/fa";
import { MdBarChart, MdPerson } from "react-icons/md";

/* Shared decorative illustration used across all admission sections */
const AdmissionIllustration = () => (
  <div className="relative w-full h-64 sm:h-72 flex items-center justify-center select-none pointer-events-none">

    {/* ── Dot grid — top right ── */}
    <div
      className="absolute top-0 right-0 w-44 h-36 opacity-40"
      style={{
        backgroundImage: "radial-gradient(circle, #f97316 1.5px, transparent 1.5px)",
        backgroundSize: "13px 13px",
      }}
    />

    {/* ── Orange striped circle — top centre-right ── */}
    <div
      className="absolute top-2 right-28 sm:right-40 w-20 h-20 rounded-full border-[6px] border-orange-500"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg,#f97316 0,#f97316 3px,transparent 0,transparent 50%)",
        backgroundSize: "10px 10px",
      }}
    />

    {/* ── Teal striped circle — bottom right ── */}
    <div
      className="absolute bottom-2 right-4 w-16 h-16 rounded-full border-[5px] border-teal-500"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg,#14b8a6 0,#14b8a6 3px,transparent 0,transparent 50%)",
        backgroundSize: "9px 9px",
      }}
    />

    {/* ── Main Illustration cluster ── */}
    <div className="relative w-56 h-56">

      {/* Dashed orbit ring */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300 opacity-70" />

      {/* Cyan blob background */}
      <div className="absolute top-10 left-8 w-32 h-32 rounded-full bg-cyan-100 opacity-80" />

      {/* ── Monitor / chart ── */}
      <div className="absolute top-4 left-6 w-24 h-20 rounded-xl bg-white border-2 border-blue-600 shadow-md flex flex-col overflow-hidden">
        {/* Monitor top bar */}
        <div className="bg-blue-600 h-4 flex items-center px-1.5 gap-1">
          <MdPerson className="text-white text-xs" />
        </div>
        {/* Pie chart placeholder */}
        <div className="flex-1 flex items-center justify-center p-1">
          <div className="relative w-10 h-10">
            <div className="w-10 h-10 rounded-full bg-orange-300 absolute" />
            <div
              className="w-10 h-10 rounded-full absolute"
              style={{
                background:
                  "conic-gradient(#16a34a 0% 35%, #fb923c 35% 70%, #60a5fa 70% 100%)",
              }}
            />
            <div className="absolute inset-2 rounded-full bg-white" />
          </div>
        </div>
        {/* Monitor stand */}
        <div className="bg-blue-100 h-2" />
      </div>

      {/* ── Grad cap ── */}
      <div className="absolute top-2 right-4 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shadow-md">
        <FaGraduationCap className="text-white text-2xl" />
      </div>

      {/* ── Funnel / filter ── */}
      <div className="absolute bottom-8 left-10 flex flex-col items-center gap-1">
        {/* Filter dots */}
        <div className="flex gap-2">
          {[0,1,2].map(i => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-teal-500" />
          ))}
        </div>
        {/* Funnel body */}
        <div className="w-10 h-0 border-l-[20px] border-r-[20px] border-t-[18px] border-l-transparent border-r-transparent border-t-blue-500" />
        <div className="w-4 h-6 bg-blue-500 rounded-b-sm" />
        {/* Chip */}
        <div className="w-7 h-7 bg-blue-800 rounded-md flex items-center justify-center">
          <FaMicrochip className="text-cyan-300 text-xs" />
        </div>
      </div>

      {/* ── Check badge ── */}
      <div className="absolute bottom-6 right-3 w-14 h-14 bg-white border-2 border-blue-300 rounded-xl shadow-md flex items-center justify-center">
        <FaCheckCircle className="text-orange-400 text-3xl" />
      </div>

      {/* Connector lines (decorative) */}
      <div className="absolute top-20 left-28 w-8 h-0.5 bg-blue-400 rotate-45" />
      <div className="absolute top-28 left-24 w-0.5 h-10 bg-blue-400" />
    </div>
  </div>
);

export default AdmissionIllustration;