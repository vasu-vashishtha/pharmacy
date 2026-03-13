import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import ccsu from '../../assets/images/ccsu logo.jpg';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-3 gap-3 sm:gap-0">

          {/* ── Logo + School Name ── */}
          <div className="flex items-center gap-4">
            {/* Logo Circle */}
            <div className="relative flex-shrink-0 hidden sm:flex">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center">
                <img src={ccsu} alt="ccsu"/>
                <span className="text-md sm:text-[12px] font-semibold">NAAC A++</span>
              </div>
              {/* Decorative ring */}
              {/* <div className="absolute -inset-1 rounded-full border-2 border-dashed border-red-300 opacity-60 animate-spin-slow pointer-events-none" /> */}
            </div>

            {/* Text Block */}
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-700 leading-tight tracking-tight font-['Georgia',serif]">
                Charak School of Pharmacy
              </h1>
              <p className="text-sm sm:text-base text-blue-800 font-semibold mt-0.5 tracking-wide">
                Chaudhary Charan Singh University Campus, Meerut, Uttar Pradesh
              </p>
              <p className="text-sm sm:text-[14px] text-gray-600 font-semibold mt-0.5 tracking-wide">(FORMERLY, MEERUT UNIVERSITY) | NAAC A++ ACCREDITED</p>
            </div>
          </div>

          {/* ── Contact Info ── */}
          <div className="flex flex-col sm:items-end gap-2 text-sm sm:text-base">
            {/* Email */}
            <a
              href="mailto:charakpharmacy.ccsu@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-red-700 transition-colors duration-200 group"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors">
                <MdEmail className="text-red-600 text-base" />
              </span>
              <span className="font-medium">charakpharmacy.ccsu@gmail.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+917217334353"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-800 transition-colors duration-200 group"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <FaPhone className="text-blue-700 text-sm" />
              </span>
              <span className="font-medium">+91-7217334353</span>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-red-700 via-red-500 to-blue-800" />
    </header>
  );
};

export default Header;