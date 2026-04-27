import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import ccsu from '../../assets/images/ccsu_logo.png';

const courses = [
  { label: "B.Pharm", path: "/admission/programs" },
  { label: "B.Pharm (Lateral Entry)", path: "/admission/programs" },
  { label: "M Pharm - Pharmaceutical Chemistry/M Pharm - Pharmaceutics", path: "/admission/programs" },
];

const quickLinks = [
  { label: "About Us", path: "/about/introduction" },
  { label: "Admission", path: "https://exams.ccsuforms.in/Reg_BPharma" },
  { label: "Syllabus", path: "/academics/syllabus" },
  { label: "Gallery", path: "/gallery" },
];

const ImportantLinks = [
  { label: "CCSU, Meerut", path: "https://www.ccsuniversity.ac.in/" },
  { label: "Pharmacy Council of India", path: "https://www.pci.nic.in/" },
  { label: "NTA GPAT", path: "https://nta.ac.in/Home" },
  { label: "NIRF", path: "https://www.ccsuniversity.ac.in/nirf" },
  { label: "NAAC", path: "http://naac.gov.in/index.php/en/" },
];

const socials = [
  { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ── Main Footer ── */}
      <footer className="bg-[#0a1e38] text-white relative">

        {/* Top decorative line */}
        <div className="h-1 w-full bg-gradient-to-r from-red-600 via-cyan-400 to-blue-700" />

        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">

            {/* ── Col 1: Courses ── */}
            <div>
              <h3 className="text-base font-bold text-white mb-6 pb-2 border-b border-white/10 tracking-wider uppercase">
                Courses
              </h3>
              <ul className="space-y-3">
                {courses.map((course) => (
                  <li key={course.label}>
                    <Link
                      to={course.path}
                      className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      {course.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mini about blurb */}
              <p className="mt-8 text-xs text-gray-500 leading-relaxed">
                Affiliated with Chaudhary Charan Singh University, approved by
                the Pharmacy Council of India (PCI).
              </p>
            </div>

            {/* ── Col 2: Quick Links ── */}
            <div>
              <h3 className="text-base font-bold text-white mb-6 pb-2 border-b border-white/10 tracking-wider uppercase">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Important Links ── */}
            <div>
              <h3 className="text-base font-bold text-white mb-6 pb-2 border-b border-white/10 tracking-wider uppercase">
                Important Links
              </h3>
              <ul className="space-y-3">
                {ImportantLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 4: Contact Us ── */}
            <div>
              <h3 className="text-base font-bold text-white mb-6 pb-2 border-b border-white/10 tracking-wider uppercase">
                Contact Us
              </h3>

              {/* School identity */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex flex-col items-center justify-center shrink-0">
                  <img src={ccsu} alt="ccsu"/>
                </div>
                <div>
                  <p className="text-base font-bold text-white leading-tight">
                    Charak School of Pharmacy
                  </p>
                  <p className="text-xs text-gray-400">
                    Chaudhary Charan Singh University, Meerut
                  </p>
                </div>
              </div>

              {/* Contact details */}
              <ul className="space-y-3 mb-6">
                <li>
                  <a
                    href="mailto:charakpharmacy.ccsu@gmail.com"
                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <MdEmail className="text-cyan-500 text-base mt-0.5 shrink-0" />
                    <span>charakpharmacy.ccsu@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917217334353"
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <FaPhone className="text-cyan-500 text-xs shrink-0" />
                    <span>+91-7217334353</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-gray-400">
                    <MdLocationOn className="text-cyan-500 text-base mt-0.5 shrink-0" />
                    <span>CCSU Campus, Meerut, Uttar Pradesh – 250005</span>
                  </div>
                </li>
              </ul>

              {/* Contact Button */}
              <Link
                to="/contact"
                className="inline-block px-6 py-2.5 rounded-md bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-bold transition-all duration-200 hover:scale-105 shadow-md shadow-cyan-500/20"
              >
                Contact
              </Link>
            </div>

            
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/10 bg-[#071529]">
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Copyright */}
            <p className="text-xs text-gray-500">
              © Copyright 2024{" "}
              <a
                href="https://www.ccsuniversity.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Chaudhary Charan Singh University, Meerut
              </a>
              . All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center text-white text-xs transition-all duration-200 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── Scroll To Top Button ── */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-white border-2 border-gray-200 shadow-xl flex items-center justify-center text-gray-700 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300
          ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
      >
        <FaArrowUp className="text-sm" />
      </button>
    </>
  );
};

export default Footer;