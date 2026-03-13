import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { GiMedicinePills } from "react-icons/gi";
import { FaFlask } from "react-icons/fa";

/* ─────────────────────────────────────────────
   SLIDES CONFIG
   Replace `bg` gradient with actual image URLs:
   e.g.  image: "/assets/images/slide1.jpg"
   and add:  backgroundImage: `url(${slide.image})`
   to the slide div's style prop.
───────────────────────────────────────────── */
const slides = [
  {
    id: 1,
    title: "Shaping Tomorrow's Pharmacists",
    subtitle: "Excellence in Pharmaceutical Education since its inception",
    badge: "Welcome to Charak School of Pharmacy",
    cta: "Explore Programs",
    ctaLink: "/admission/programs",
    bg: "from-[#0a1f44] via-[#1a3a6b] to-[#0d2f5a]",
    accent: "#e53e3e",
    icon: <MdSchool className="text-6xl text-white/20" />,
  },
  {
    id: 2,
    title: "Research-Driven Learning",
    subtitle: "World-class laboratories equipped for cutting-edge pharmaceutical research",
    badge: "Innovation & Research",
    cta: "Discover Research",
    ctaLink: "/research/projects",
    bg: "from-[#6b1a1a] via-[#8b2020] to-[#4a0f0f]",
    accent: "#f6ad55",
    icon: <FaFlask className="text-6xl text-white/20" />,
  },
  {
    id: 3,
    title: "Admissions Open 2025",
    subtitle: "B.Pharm, B.Pharm Lateral Entry & M.Pharm (Proposed) — Apply before the deadline",
    badge: "Join Our Community",
    cta: "Apply Now",
    ctaLink: "https://exams.ccsuforms.in/Reg_BPharma/default.php",
    bg: "from-[#064e3b] via-[#065f46] to-[#022c22]",
    accent: "#68d391",
    icon: <GiMedicinePills className="text-6xl text-white/20" />,
  },
];

/* ── Stat counters shown at bottom ── */
const stats = [
  { value: "500+", label: "Students Enrolled" },
  { value: "30+", label: "Expert Faculty" },
  { value: "95%", label: "Placement Rate" },
  { value: "15+", label: "Years of Excellence" },
];

const AUTOPLAY_DELAY = 5000;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const goTo = useCallback(
    (index, dir = "next") => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 400);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  /* Auto-play */
  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden">
      {/* ── Main Slide Area ── */}
      <div
        className={`relative w-full h-[480px] sm:h-[560px] lg:h-[640px] bg-gradient-to-br ${slide.bg} transition-all duration-700`}
      >
        {/* Background pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #ffffff 0,
              #ffffff 1px,
              transparent 0,
              transparent 50%
            )`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Decorative large icon */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block scale-[3] opacity-10">
          {slide.icon}
        </div>

        {/* Decorative circles */}
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border-2 border-white/5" />
        <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full border border-white/5" />

        {/* ── Content ── */}
        <div
          className={`relative z-10 h-full flex flex-col justify-center max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16
            transition-all duration-400
            ${isAnimating
              ? direction === "next"
                ? "opacity-0 translate-x-8"
                : "opacity-0 -translate-x-8"
              : "opacity-100 translate-x-0"
            }`}
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-5 backdrop-blur-sm border"
            style={{
              backgroundColor: `${slide.accent}20`,
              borderColor: `${slide.accent}60`,
              color: slide.accent,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: slide.accent }}
            />
            {slide.badge}
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight max-w-3xl font-['Georgia',serif] drop-shadow-md">
            {slide.title}
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-blue-100/80 max-w-2xl leading-relaxed">
            {slide.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={slide.ctaLink}
              className="px-6 py-3 rounded-lg text-sm font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-100"
              style={{ backgroundColor: slide.accent }}
            >
              {slide.cta}
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg text-sm font-bold text-white border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* ── Arrow Navigation ── */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110 border border-white/20"
        >
          <FaChevronLeft className="text-sm sm:text-base" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110 border border-white/20"
        >
          <FaChevronRight className="text-sm sm:text-base" />
        </button>

        {/* ── Dot Indicators ── */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-7 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* ── Progress bar ── */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10">
          <div
            key={current}
            className="h-full bg-red-500 origin-left"
            style={{
              animation: `progressBar ${AUTOPLAY_DELAY}ms linear forwards`,
            }}
          />
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center py-5 px-4 hover:bg-red-50 transition-colors duration-200"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-red-700 font-['Georgia',serif]">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-gray-500 mt-1 font-medium text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe for progress bar */}
      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;