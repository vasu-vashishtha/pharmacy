import { FaFileAlt, FaIdCard, FaCamera, FaMoneyCheckAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";


import AdmissionIllustration from "../common/AdmissionIllustration";
import { Link } from "react-router-dom";

/* ── Document categories with icons and items ── */
const documentCategories = [
  {
    title: "Academic Documents",
    color: "blue",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
    titleColor: "text-blue-700",
    iconColor: "text-blue-500",
    icon: <FaFileAlt />,
    items: [
      "Online Registration Form",
      "High School Marksheet / Certificate",
      "Intermediate Marksheet / Certificate",
    ],
  },
  {
    title: "Certificate Documents",
    color: "cyan",
    borderColor: "border-cyan-200",
    bgColor: "bg-cyan-50",
    titleColor: "text-cyan-700",
    iconColor: "text-cyan-500",
    icon: <MdVerified />,
    items: [
      "Domicile Certificate",
      "Income Certificate",
      "Caste Certificate (if applicable)",
      "EWS Certificate (if applicable)",
      "Any other Quota Certificate (if applicable)",
      "Gap Certificate (if applicable)",
    ],
  },
  {
    title: "Original Documents",
    color: "orange",
    borderColor: "border-orange-200",
    bgColor: "bg-orange-50",
    titleColor: "text-orange-700",
    iconColor: "text-orange-500",
    icon: <FaIdCard />,
    items: [
      "Medical Certificate (Original)",
      "Character Certificate (Original)",
      "Transfer Certificate (Original)",
      "Migration Certificate (Original)",
    ],
  },
  {
    title: "Identity & Fees",
    color: "teal",
    borderColor: "border-teal-200",
    bgColor: "bg-teal-50",
    titleColor: "text-teal-700",
    iconColor: "text-teal-500",
    icon: <FaMoneyCheckAlt />,
    items: [
      "Aadhar Card",
      "Photographs (4 passport-size)",
      "Transaction ID (Submitted Fees)",
    ],
  },
];

/* Color config for dot bullets */
const dotColors = {
  blue:   "bg-blue-400",
  cyan:   "bg-cyan-400",
  orange: "bg-orange-400",
  teal:   "bg-teal-400",
};

const Document = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
              Charak School of Pharmacy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
              Documents Required
              </h1>
              <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
              <p className="mt-5 text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
             Check the essential documents required for completing the admission procedure.
              </p>
          </div>
        </div>

    <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Content ── */}
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-600 mb-3">
              Admission Process
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2f5a] leading-tight font-['Georgia',serif]">
              Documents Required <br className="hidden sm:block" /> For Admission
            </h2>
            <div className="mt-3 w-14 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />

            <p className="mt-5 text-gray-500 text-sm sm:text-base leading-relaxed">
              Please keep the following documents ready before starting your
              admission process. All documents should be self-attested unless
              otherwise specified.
            </p>

            {/* Document category cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {documentCategories.map((cat) => (
                <div
                  key={cat.title}
                  className={`rounded-xl border ${cat.borderColor} ${cat.bgColor} p-5 hover:shadow-md transition-shadow duration-200`}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-lg ${cat.iconColor}`}>{cat.icon}</span>
                    <h3 className={`text-xs font-bold uppercase tracking-widest ${cat.titleColor}`}>
                      {cat.title}
                    </h3>
                  </div>

                  {/* Items list */}
                  <ul className="space-y-2">
                    {cat.items.map((doc) => (
                      <li key={doc} className="flex items-start gap-2.5">
                        <span
                          className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${dotColors[cat.color]}`}
                        />
                        <span className="text-sm text-gray-700 leading-snug">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Note box */}
            <div className="mt-6 rounded-xl bg-yellow-50 border border-yellow-200 p-4 flex items-start gap-3">
              <span className="text-yellow-500 text-lg shrink-0 mt-0.5">⚠️</span>
              <p className="text-sm text-yellow-800 leading-relaxed">
                <span className="font-bold">Note:</span> All original documents
                must be submitted at the time of admission. Incomplete
                applications will not be processed.
              </p>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="https://exams.ccsuforms.in/Reg_BPharma"
                target="_blank"
                className="px-7 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-bold shadow-md transition-all duration-200 hover:scale-105"
              >
                Start Application
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3 rounded-lg border-2 border-[#0f2f5a] text-[#0f2f5a] text-sm font-bold hover:bg-[#0f2f5a] hover:text-white transition-all duration-200"
              >
                Contact for Help
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Illustration + Quick checklist ── */}
          <div className="flex flex-col items-center gap-6">
            <AdmissionIllustration />

            {/* Summary checklist card */}
            <div className="w-full rounded-2xl border border-gray-100 shadow-sm bg-white p-6">
              <h4 className="text-sm font-bold text-[#0f2f5a] mb-4 uppercase tracking-widest">
                Quick Checklist
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Online Registration Form",
                  "High School & Intermediate Marksheets",
                  "Domicile, Income & Caste Certificates",
                  "Medical, Character & TC (Originals)",
                  "Aadhar Card",
                  "4 Passport-size Photographs",
                  "Fee Transaction ID",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 group">
                    <span className="w-5 h-5 rounded-full border-2 border-cyan-400 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    </span>
                    <span className="text-sm text-gray-600 group-hover:text-[#0f2f5a] transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
    
  );
};

export default Document;