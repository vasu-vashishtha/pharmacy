import { FaCheckCircle, FaCalendarAlt, FaBook } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import AdmissionIllustration from "../common/AdmissionIllustration";

const eligibilityPoints = [
  {
    icon: <FaBook className="text-blue-600 text-base shrink-0 mt-0.5" />,
    text: "Students who have passed 10+2 with Physics, Chemistry, Biology/Mathematics and English as one of the subjects.",
  },
  {
    icon: <FaCalendarAlt className="text-cyan-600 text-base shrink-0 mt-0.5" />,
    text: "Candidates completing 17 years of age on or before 31st December 2025 are eligible to apply for the B.Pharm course.",
  },
  {
    icon: <MdScience className="text-orange-500 text-base shrink-0 mt-0.5" />,
    text: "Any other qualification approved by the Pharmacy Council of India as equivalent to the above examinations.",
  },
];

const Eligibility = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
              Charak School of Pharmacy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
              Eligibility
              </h1>
              <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
              <p className="mt-5 text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Check the eligibility requirements for admission to different pharmacy courses.
              </p>
          </div>
        </div>

    <section className="w-full bg-gray-50 py-14 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-600 mb-3">
              Admission Criteria
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2f5a] leading-tight font-['Georgia',serif]">
              Eligibility
            </h2>
            <div className="mt-3 w-14 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />

            <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
              A pass in any of the following examinations is required to be eligible
              for admission to the B.Pharm program at Charak School of Pharmacy:
            </p>

            {/* Eligibility checklist */}
            <ul className="mt-6 space-y-4">
              {eligibilityPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0 mt-0.5">
                    <FaCheckCircle className="text-cyan-500 text-xs" />
                  </span>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {pt.text}
                  </p>
                </li>
              ))}
            </ul>

            {/* Subjects highlight bar */}
            <div className="mt-8 rounded-xl bg-blue-50 border border-blue-100 p-5">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                Required Subjects at 10+2 Level
              </p>
              <div className="flex flex-wrap gap-2">
                {["Physics", "Chemistry", "Biology / Mathematics", "English"].map((sub) => (
                  <span
                    key={sub}
                    className="px-3 py-1.5 rounded-full bg-white border border-blue-200 text-xs font-semibold text-blue-800 shadow-sm"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* Apply CTA */}
            <div className="mt-8">
              <a
                href="https://exams.ccsuforms.in/Reg_BPharma"
                target="_blank"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-bold shadow-md transition-all duration-200 hover:scale-105"
              >
                Apply Now →
              </a>
            </div>
          </div>

          
          <div className="flex items-center justify-center">
            <AdmissionIllustration />
          </div>

        </div>
      </div>
    </section>
    </>
    
  );
};

export default Eligibility;