import { FaUniversity, FaAward, FaCheckCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import AdmissionIllustration from "../common/AdmissionIllustration";

// const approvals = [
//   {
//     icon: <FaUniversity className="text-blue-600 text-xl" />,
//     label: "Affiliated University",
//     value: "Chaudhary Charan Singh University (CCSU), Meerut",
//     bg: "bg-blue-50 border-blue-100",
//   },
//   {
//     icon: <MdVerified className="text-cyan-600 text-xl" />,
//     label: "Regulatory Body",
//     value: "Pharmacy Council of India (PCI), New Delhi",
//     bg: "bg-cyan-50 border-cyan-100",
//   },
//   {
//     icon: <FaAward className="text-orange-500 text-xl" />,
//     label: "Module",
//     value: "Self Finance — Faculty of Pharmacy, CCSU",
//     bg: "bg-orange-50 border-orange-100",
//   },
// ];

const Affiliation = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
              Charak School of Pharmacy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
              Affiliation &amp; Approvals
              </h1>
              <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
              <p className="mt-5 text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Affiliation &amp; Approvals approved by the Pharmacy Council of India (PCI) and affiliated with
              Chaudhary Charan Singh University, Meerut.
              </p>
          </div>
        </div>

        <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text Content ── */}
          <div>
            {/* Section Label */}
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-600 mb-3">
              About the Institution
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2f5a] leading-tight font-['Georgia',serif]">
              Affiliation &amp; Approvals
            </h2>
            <div className="mt-3 w-14 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />

            {/* Description paragraphs */}
            <div className="mt-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Charak School of Pharmacy (CSOP) is founded as a part of the Faculty of
                Pharmacy, Chaudhary Charan Singh University, Meerut under self finance module.
              </p>
              <p>
                B.Pharm course conducting at CSOP is approved by the Pharmacy Council of
                India, New Delhi.
              </p>
            </div>
          </div>

          {/* ── RIGHT: Illustration ── */}
          <div className="flex items-center justify-center">
            <AdmissionIllustration />
          </div>

        </div>
      </div>
    </section>
    </>
    
  );
};

export default Affiliation;