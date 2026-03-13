import { useState, useMemo } from "react";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { MdFiberNew } from "react-icons/md";

/* ─────────────────────────────────────────
   NOTIFICATIONS DATA
   Replace `link` with actual file/page URLs
───────────────────────────────────────── */
const ALL_NOTIFICATIONS = [
  { id: 1,  date: "10-01-2026", title: "Registration Form for Admission Session 2025-26",                                                             
    link: "#", 
    isNew: true  
  },
  { id: 2,  date: "26-02-2024", title: "International Conference on Synergizing Industry-Academia Collaboration to Promote Pharma R&D: 28th March 2024", 
    link: "https://cdn.ccsuniversity.ac.in/public/pdf/2026/03/conf-280304.pdf", 
    isNew: true  
  },
  { id: 3,  date: "15-02-2024", title: 'Registration link for "International Conference on Synergizing Industry-Academia Collaboration to Promote Pharma R&D"', 
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfa7TH-OF_Hswcb4kOe7DsvB1vjNFDbd3vJXinsIpB7tjv9pQ/closedform", 
    isNew: false 
  },
  { id: 4,  date: "07-02-2024", title: "Examination schedule of B.Pharm I-Semester 2023-2024",                                                        
    link: "https://cdn.ccsuniversity.ac.in/public/pdf/2026/03/Exam-Schedule-BPharma-1st-Semester.pdf", 
    isNew: false 
  },
];

const PAGE_SIZE = 8; // rows per page

const ViewAllNotifications = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(ALL_NOTIFICATIONS.length / PAGE_SIZE);

  /* Slice for current page — memoized so it only recomputes on page change */
  const rows = useMemo(
    () => ALL_NOTIFICATIONS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [page]
  );

  const goTo = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* ── Hero Banner ── */}
      <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
            Charak School of Pharmacy
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
            Press Release &amp; Notifications
          </h1>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
          <p className="mt-4 text-blue-200 text-sm max-w-xl mx-auto">
            Stay updated with the latest announcements, events and notices from CSOP.
          </p>
        </div>
      </div>

      {/* ── Table Section ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Count row */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-extrabold text-[#0f2f5a] font-['Georgia',serif]">
            All Notifications
          </h2>
          <span className="text-xs text-gray-400 font-medium">
            Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, ALL_NOTIFICATIONS.length)} of {ALL_NOTIFICATIONS.length}
          </span>
        </div>

        {/* ── Table ── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0f2f5a]">
                <th className="py-4 px-5 text-left text-xs font-bold text-white uppercase tracking-widest w-10">
                  #
                </th>
                <th className="py-4 px-5 text-left text-xs font-bold text-white uppercase tracking-widest w-32">
                  Date
                </th>
                <th className="py-4 px-5 text-left text-xs font-bold text-white uppercase tracking-widest">
                  Title
                </th>
                <th className="py-4 px-5 text-center text-xs font-bold text-white uppercase tracking-widest w-24">
                  View
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((item, i) => (
                <tr
                  key={item.id}
                  className="hover:bg-cyan-50 transition-colors duration-150 group"
                >
                  {/* S.No */}
                  <td className="py-4 px-5">
                    <span className="w-7 h-7 rounded-full bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center">
                      {(page - 1) * PAGE_SIZE + i + 1}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="py-4 px-5 whitespace-nowrap">
                    <span className="text-xs font-semibold text-gray-400">
                      {item.date}
                    </span>
                  </td>

                  {/* Title */}
                  <td className="py-4 px-5">
                    <div className="flex items-start gap-2">
                      <FaArrowRight className="text-cyan-500 text-xs mt-1 shrink-0" />
                      <span className="text-sm text-gray-700 font-medium leading-snug group-hover:text-[#0f2f5a] transition-colors">
                        {item.title}
                      </span>
                      {item.isNew && (
                        <span className="shrink-0 flex items-center gap-0.5 text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded-full ml-1">
                          <MdFiberNew className="text-sm" />
                          NEW
                        </span>
                      )}
                    </div>
                  </td>

                  {/* View */}
                  <td className="py-4 px-5 text-center">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold transition-all duration-200 hover:scale-105 shadow-sm"
                    >
                      <FaEye className="text-xs" />
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-7">

            {/* Page info */}
            <p className="text-xs text-gray-400 font-medium">
              Page {page} of {totalPages}
            </p>

            {/* Page buttons */}
            <div className="flex items-center gap-1.5">

              {/* Prev */}
              <button
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
                className="px-3 py-2 rounded-lg border border-gray-200 text-xs font-bold text-gray-600 hover:bg-[#0f2f5a] hover:text-white hover:border-[#0f2f5a] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Prev
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goTo(p)}
                  className={`w-9 h-9 rounded-lg text-xs font-bold transition-all duration-200
                    ${p === page
                      ? "bg-[#0f2f5a] text-white shadow-md"
                      : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  {p}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages}
                className="px-3 py-2 rounded-lg border border-gray-200 text-xs font-bold text-gray-600 hover:bg-[#0f2f5a] hover:text-white hover:border-[#0f2f5a] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          </div>
        )}

      </section>
    </div>
  );
};

export default ViewAllNotifications;