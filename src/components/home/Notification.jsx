import React from 'react'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdFiberNew } from "react-icons/md";

/* ── Notification items — add/remove as needed ── */
const notifications = [
  {
    id: 1,
    text: 'Registration Form for Admisson Session 2025-26',
    link: "#",
    isNew: true,
    date: '10-01-2026',
  },
  {
    id: 2,
    text: 'International Conference on Synergizing Industry-Academia Collaboration to Promote Pharma R&D: 28th March 2024',
    link: "https://cdn.ccsuniversity.ac.in/public/pdf/2026/03/conf-280304.pdf",
    isNew: true,
    date: '26-02-2024',
  },
  {
    id: 3,
    text: 'Registration link for "International Conference on Synergizing Industry-Academia Collaboration to Promote Pharma R&D"',
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfa7TH-OF_Hswcb4kOe7DsvB1vjNFDbd3vJXinsIpB7tjv9pQ/closedform",
    isNew: false,
    date: '15-02-2024',
  },
  {
    id: 4,
    text: 'Examination schedule of B.Pharm I-Semester 2023-2024',
    link: "https://cdn.ccsuniversity.ac.in/public/pdf/2026/03/Exam-Schedule-BPharma-1st-Semester.pdf",
    isNew: false,
    date: '07-02-2024',
  },
];

const Notification = () => {
  return (
    <>
<section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Welcome / About ── */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="inline-block text-sm font-semibold text-cyan-600 tracking-widest uppercase mb-2">
              Welcome to
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2f5a] leading-tight font-['Georgia',serif]">
              Charak School <br className="hidden sm:block" /> of Pharmacy
            </h2>

            {/* Accent line */}
            <div className="mt-4 w-14 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />

            {/* Body text */}
            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              Chaudhary Charan Singh University (CCSU) is a State Government
              University established in 1965. Charak School of Pharmacy (CSOP)
              is founded as a part of the Faculty of Pharmacy, CCS University,
              Meerut under Self Finance module.
            </p>

            <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed">
              The school is committed to producing highly skilled pharmaceutical
              professionals who contribute to healthcare and society through
              research, innovation, and compassionate service.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/about/introduction"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-bold shadow-md shadow-cyan-200 transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Read More
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Press Release & Notifications ── */}
          <div className="flex flex-col">
            {/* Card Header */}
            <div className="rounded-t-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-5 py-4">
              <h3 className="text-white text-base sm:text-lg font-bold text-center tracking-wide">
                Press Release &amp; Notifications
              </h3>
            </div>

            {/* Scrollable notifications list */}
            <div className="rounded-b-xl bg-cyan-50 border border-cyan-100 border-t-0 overflow-hidden">
              {/* Scroll shadow top */}
              <div className="h-1 w-full bg-gradient-to-b from-cyan-100 to-transparent" />

              <div
                className="overflow-y-auto divide-y divide-cyan-100"
                style={{ maxHeight: "320px" }}
              >
                {notifications.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target='_blank'
                    className="flex items-start gap-3 px-5 py-4 hover:bg-cyan-100 transition-colors duration-150 group"
                  >
                    {/* Arrow icon */}
                    <FaArrowRight className="text-cyan-600 text-xs mt-1 shrink-0 group-hover:translate-x-1 transition-transform duration-200" />

                    {/* Notification text */}
                    <div className='flex flex-col'>
                      <span className="text-sm text-cyan-800 font-medium leading-snug flex-1 group-hover:text-cyan-900">{item.date}</span>
                      <span className="text-sm text-cyan-600 font-medium leading-snug flex-1 group-hover:text-cyan-900">
                        {item.text}
                      </span>
                    </div>

                    {/* NEW badge */}
                    {item.isNew && (
                      <span className="shrink-0 flex items-center gap-0.5 text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded-full">
                        <MdFiberNew className="text-sm" />
                        NEW
                      </span>
                    )}
                  </a>
                ))}
              </div>

              {/* Scroll shadow bottom */}
              <div className="h-2 w-full bg-gradient-to-t from-cyan-100 to-transparent" />
            </div>

            {/* View all link */}
            <div className="mt-3 text-right">
              <Link
                to="/viewallnotifications"
                className="text-xs font-semibold text-cyan-600 hover:text-cyan-800 transition-colors"
              >
                View all notifications →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Notification