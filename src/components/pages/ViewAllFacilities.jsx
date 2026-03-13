import { FaCircle } from "react-icons/fa";
import facilities from '../../assets/images/facilities.jpg';

/* ── Two columns of facility names ── */
const colLeft = [
  "Pharmaceutics Lab",
  "Pharmacology Lab",
  "Pharmaceutical Chemistry Lab",
  "Pharmacognosy Lab",
  "Computer Lab",
  "Machine Room",
  "Central Instrumental Facility",
  "Animal House",
  "Classroom & Seminar Hall",
];

const colRight = [
  "Wi-fi Campus",
  "Central Library",
  "Dispensary",
  "Play Ground",
  "Fitness Centre",
  "Auditorium",
  "Girls Hostel",
  "Boys Hostel",
];

/* ── Photo grid — replace `src: null` with actual image paths ── */
const photos = [
  { id: 1, src: null, alt: "CCSU Campus entrance" },
  { id: 2, src: null, alt: "CCSU University building" },
  { id: 3, src: null, alt: "Pharmacy lab interior" },
  { id: 4, src: null, alt: "Lab equipment" },
];

/* ── Photo placeholder ── */
const PhotoPlaceholder = ({ index }) => {
  const gradients = [
    "from-blue-100 to-cyan-100",
    "from-green-100 to-teal-100",
    "from-orange-100 to-yellow-100",
    "from-purple-100 to-pink-100",
  ];
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center`}>
      <span className="text-xs text-gray-300 font-semibold">Photo {index + 1}</span>
    </div>
  );
};

const ViewAllFacilities = () => (
  <div className="w-full min-h-screen bg-white">

    {/* ── Hero Banner ── */}
    <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
          Charak School of Pharmacy
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
          Our Facilities
        </h1>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
        <p className="mt-4 text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Comprehensive infrastructure built to support world-class pharmaceutical education and research.
        </p>
      </div>
    </div>

    {/* ── Main Content ── */}
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Heading + Two-column list ── */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2f5a] font-['Georgia',serif] mb-8">
              Facilities
            </h2>

            {/* Two-column list box */}
            <div className="grid grid-cols-2 gap-0 rounded-xl overflow-hidden border border-gray-100 shadow-sm">

              {/* Column 1 — light blue */}
              <div className="bg-blue-50 px-6 py-7">
                <ul className="space-y-3">
                  {colLeft.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <FaCircle className="text-[7px] text-[#0f2f5a] mt-1.5 shrink-0" />
                      <span className="text-sm text-gray-700 font-medium leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 — light yellow */}
              <div className="bg-yellow-50 px-6 py-7">
                <ul className="space-y-3">
                  {colRight.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <FaCircle className="text-[7px] text-[#0f2f5a] mt-1.5 shrink-0" />
                      <span className="text-sm text-gray-700 font-medium leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* ── RIGHT: Decorative + Photo Grid ── */}
          <div className="relative">

            <img src={facilities} alt="facilities"/>

          </div>
        </div>
      </div>
    </section>

  </div>
);

export default ViewAllFacilities;