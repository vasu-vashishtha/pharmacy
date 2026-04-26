import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";

const facultyData = [
  {
    id: 1,
    name: "Dr. Vaishali Manikrao Patil",
    designation: "Associate Professor & Principal / H.O.D.",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/vaishali.jpg",
    profileLink: "https://ccsuniversity.blr1.cdn.digitaloceanspaces.com/cv/pdf/VMP_Profile.pdf",
  },
  {
    id: 2,
    name: "Dr. Amrish Kumar",
    designation: "Associate Professor",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/F-Amrish-Kumar.jpg",
    profileLink: "https://ccsuniversity.blr1.cdn.digitaloceanspaces.com/cv/pdf/re-Amrish-Kumar.pdf",
  },
  {
    id: 3,
    name: "Dr. Bhoomika Chaudhary",
    designation: "Assistant Professor",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/F-Bhoomika.jpg",
    profileLink: "https://ccsuniversity.blr1.cdn.digitaloceanspaces.com/cv/pdf/re-bhoomika.pdf",
  },
  {
    id: 4,
    name: "Sh. Ranjan Kaushik",
    designation: "Assistant Professor",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/F-Rajan-Kaushik.jpg",
    profileLink: "https://ccsuniversity.blr1.cdn.digitaloceanspaces.com/cv/pdf/re-Rajan-Kaushik.pdf",
  },
  {
    id: 5,
    name: "Mr. Dharmender Singh",
    designation: "Assistant Professor",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/F-Dharmender-Singh.jpg",
    profileLink: "https://ccsuniversity.blr1.cdn.digitaloceanspaces.com/cv/pdf/Re-Dharmender-Singh.pdf",
  },
];

/* ── Initials Avatar Fallback ── */
const AvatarFallback = ({ name }) => {
  const initials = name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(-2)
    .map((w) => w[0].toUpperCase())
    .join("");
  return (
    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 via-slate-100 to-cyan-100 flex items-center justify-center">
      <span className="text-2xl font-extrabold text-[#0f2f5a] tracking-tight select-none">
        {initials}
      </span>
    </div>
  );
};

/* ── Single Faculty Card ── */
const FacultyCard = ({ member }) => (
  <div className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center pt-16 pb-8 px-5">

    {/* Hover top accent line */}
    <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#0f2f5a] via-cyan-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* ── Floating circular photo ── */}
    <div className="absolute -top-12 left-1/2 -translate-x-1/2">
      <div className="w-[108px] h-[108px] sm:w-[116px] sm:h-[116px] rounded-full bg-white shadow-md flex items-center justify-center ring-2 ring-gray-100 group-hover:ring-cyan-300 transition-all duration-300">
        <div className="w-24 h-24 sm:w-[100px] sm:h-[100px] rounded-full overflow-hidden">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <AvatarFallback name={member.name} />
          )}
        </div>
      </div>
    </div>

    {/* Name */}
    <h3 className="text-sm sm:text-[15px] font-bold text-[#0f2f5a] leading-snug mt-2">
      {member.name}
    </h3>

    {/* Designation */}
    <p className="mt-1.5 text-xs text-gray-500 font-medium">
      ({member.designation})
    </p>

    {/* Divider */}
    <div className="my-4 w-8 h-px bg-gray-200 group-hover:w-14 group-hover:bg-cyan-400 transition-all duration-300" />

    {/* Read More */}
    <Link
      to={member.profileLink}
      className="text-[11px] font-bold tracking-widest uppercase text-[#0f2f5a] hover:text-cyan-600 transition-colors duration-200"
    >
      Read More
    </Link>
  </div>
);

/* ─────────────────────────────────────────
   FACULTY PAGE
───────────────────────────────────────── */
const FacultyPage = () => (
  <>
    <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
              Charak School of Pharmacy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
                Faculty Members
              </h1>
              <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
              <p className="mt-5 text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Meet our experienced faculty members dedicated to academic excellence, research, and student development.
              </p>
          </div>
        </div>

  <div className="w-full min-h-screen bg-white">

    {/* ── Section Heading ── */}
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2f5a] font-['Georgia',serif]">
            Faculty Members
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />
        </div>

        {/* ── Cards Grid — extra top padding so floating avatars are visible ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20 pt-14">
          {facultyData.map((member) => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>

  </div>
  </>
  
);

export default FacultyPage;