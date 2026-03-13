import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";

const navLinks = [
  { label: "Home", path: "/" },
  { 
    label: "About Us", 
    path: "/about",
    dropdown: [
      { label: "Introduction", path: "/about/introduction" },
      { label: "Vice Chancellor's Message", path: "/about/vc-message" },
      { label: "Dean Message", path: "/about/deam-message" },
      { label: "Professor-Incharge/Director Message", path: "/about/director-message" },
      { label: "Principal Message", path: "/about/principal-message" },
    ],
  },
  {
    label: "Admission",
    path: "/admission",
    dropdown: [
      { label: "Programs", path: "/admission/programs" },
      { label: "Affiliation & Approvals", path: "/admission/affiliation-approvals" },
      { label: "Eligibility", path: "/admission/eligibility" },
      { label: "Documents required for admission", path: "/admission/documents" },
    ],
  },
  {
    label: "Academics",
    path: "/academics",
    dropdown: [
      { label: "Faculty Members", path: "/academics/faculty-members" },
      { label: "Academic Calendar", path: "/academics/academic-calendar" },
      { label: "Syllabus", path: "/academics/syllabus" },
      { label: "Attendence & Progress", path: "/academics/attendence-progress" },
    ],
  },
  { 
    label: "Facilities", 
    path: "/facilities",
    dropdown: [
      { label: "Class Rooms", path: "/facilities/class-rooms" },
      { label: "Laboratories", path: "/facilities/laboratories" },
      { label: "Library", path: "https://www.ccsuniversity.ac.in/library" },
      { label: "Computer Lab", path: "https://www.ccsuniversity.ac.in/facilities" },
      { label: "Herbal Garden", path: "/facilities/herbal-garden" },
      { label: "Sports", path: "https://www.ccsuniversity.ac.in/dept-sports" },
      { label: "Medical Facility", path: "https://www.ccsuniversity.ac.in/facilities" },
      { label: "Hostel", path: "http://ccsuniversityhostel.com/" },
    ],
  },
  { 
    label: "Research", 
    path: "/research",
    dropdown: [
      { label: "Projects", path: "/research/projects" },
      { label: "Publications", path: "/research/publications" },
    ], 
  },
  { 
    label: "Committee", 
    path: "/committee",
    dropdown: [
      { label: "Anti-Ragging Committee", path: "/committee/antiragging-committee" },
      { label: "Grievance Redressal Committee", path: "/committee/grievance-committee" },
      { label: "Anti Discrimination Committee", path: "/committee/anti-discrimination-committee" },
      { label: "Gender Sensitization Committee", path: "/committee/gender-sensitization-committee" },
    ],
  },
  { 
    label: "Achievements", 
    path: "/achievements",
    dropdown: [
      { label: "Students", path: "/achievements/students" },
      { label: "Faculty Members", path: "/achievements/faculty-members" },
    ],
  },
  { 
    label: "Events", 
    path: "/events",
    dropdown: [
      { label: "Curricular", path: "/events/curricular" },
      { label: "Co-Curricular", path: "/events/co-curricular" },
      { label: "Extra Curricular", path: "/events/extra-curricular"}
    ],
  },
  { label: "Gallery", path: "/gallery" },
  // { label: "Important Links", path: "/important-links" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  /* ── Close dropdown on outside click ── */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleDropdown = (label) =>
    setActiveDropdown((prev) => (prev === label ? null : label));

  return (
    <nav
      className={`w-full bg-[#1a3a6b] sticky top-0 z-40 transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-blue-900/40" : ""
      }`}
      ref={dropdownRef}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex items-center justify-between">
          <ul className="flex items-center flex-wrap">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                {link.dropdown ? (
                  <>
                    {/* Dropdown Trigger */}
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className={`flex items-center gap-0.5 px-3 xl:px-4 py-4 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap
                        ${
                          activeDropdown === link.label
                            ? "text-white border-red-500 bg-white/10"
                            : "text-blue-100 border-transparent hover:text-white hover:border-red-400 hover:bg-white/5"
                        }`}
                    >
                      {link.label}
                      <MdKeyboardArrowDown
                        className={`text-lg transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 w-48 bg-white rounded-b-lg shadow-xl border-t-2 border-red-500 py-1 z-50 animate-fadeInDown">
                        {link.dropdown.map((sub) => (
                          <NavLink
                            key={sub.label}
                            to={sub.path}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 text-sm transition-colors duration-150 ${
                                isActive
                                  ? "text-red-600 bg-red-50 font-semibold"
                                  : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                              }`
                            }
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      `block px-3 xl:px-4 py-4 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap ${
                        isActive
                          ? "text-white border-red-500 bg-white/10"
                          : "text-blue-100 border-transparent hover:text-white hover:border-red-400 hover:bg-white/5"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Mobile Top Bar ── */}
        <div className="flex lg:hidden items-center justify-between py-3">
          {/* <span className="text-white font-bold text-sm tracking-wide">
            CSP – CCSU
          </span> */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#122d56] border-t border-blue-700/50 px-4 pb-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-blue-100 border-b border-blue-800/60 hover:text-white transition-colors"
                  >
                    {link.label}
                    <MdKeyboardArrowDown
                      className={`text-lg transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="pl-4 bg-blue-900/30 rounded-md my-1">
                      {link.dropdown.map((sub) => (
                        <NavLink
                          key={sub.label}
                          to={sub.path}
                          className={({ isActive }) =>
                            `block py-2.5 text-sm border-b border-blue-800/40 last:border-0 ${
                              isActive
                                ? "text-red-400 font-semibold"
                                : "text-blue-200 hover:text-white"
                            }`
                          }
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `block py-3 text-sm font-medium border-b border-blue-800/60 last:border-0 transition-colors ${
                      isActive
                        ? "text-red-400 font-semibold"
                        : "text-blue-100 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom red accent */}
      <div className="h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-red-700" />
    </nav>
  );
};

export default Navbar;