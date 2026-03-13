import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";

/* ── DATA — swap image paths with real photos ── */
const administrators = [
  {
    id: 1,
    name: "Hon'ble Smt. Anandiben Patel",
    role: "Hon'ble Chancellor",
    image: "https://www.ccsuniversity.ac.in/assets/images/chancellor.png",
    profileLink: "https://upgovernor.gov.in/en/page/profile",
  },
  {
    id: 2,
    name: "Prof. Sangeeta Shukla",
    role: "Vice-Chancellor",
    image: "https://www.ccsuniversity.ac.in/assets/images/vc-img.jpg",
    profileLink: "/about/vc-message",
  },
  {
    id: 3,
    name: "Prof. Shailendra Sharma",
    role: "Professor In-Charge / Director",
    image: "https://cdn.ccsuniversity.ac.in/cv/jpg/P65.jpg",
    profileLink: "/about/director-message",
  },
];

/* ── Placeholder avatar when no image ── */
const AvatarPlaceholder = () => (
  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center mx-auto">
    <FaUserTie className="text-slate-400 text-5xl" />
  </div>
);

const Administrators = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">

        {/* ── Section Heading ── */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2f5a] font-['Georgia',serif]">
            Our Administrators
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {administrators.map((admin, index) => (
            <div
              key={admin.id}
              className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#0f2f5a] via-cyan-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-8 flex flex-col items-center text-center">
                {/* Photo */}
                <div className="relative mb-5">
                  {admin.image ? (
                    <img
                      src={admin.image}
                      alt={admin.name}
                      className="w-32 h-32 sm:w-36 sm:h-36 object-contain rounded-2xl mx-auto shadow-md"
                    />
                  ) : (
                    <AvatarPlaceholder />
                  )}
                  {/* Decorative ring on hover */}
                  <div className="absolute -inset-1.5 rounded-2xl border-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Name */}
                <h3 className="text-base sm:text-lg font-bold text-[#0f2f5a] leading-snug">
                  {admin.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-sm text-gray-500 font-medium">
                  {admin.role}
                </p>

                {/* Divider */}
                <div className="my-4 w-10 h-px bg-gray-200 group-hover:w-16 group-hover:bg-cyan-400 transition-all duration-300" />

                {/* Read More */}
                <Link
                  to={admin.profileLink}
                  className="text-xs font-bold tracking-widest uppercase text-[#0f2f5a] hover:text-cyan-600 transition-colors duration-200"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Administrators;