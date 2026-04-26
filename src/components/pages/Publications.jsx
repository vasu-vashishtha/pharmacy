import React from 'react'
import { FaEye } from "react-icons/fa";

const PublicationItems = [
  { id: 1, title: "List of Publications",   pdfLink: "https://cdn.ccsuniversity.ac.in/public/pdf/2026/04/list%20of%20publications%20vmp.pdf" },
];

const Publications = () => {
  return (
    <>
        <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
              Charak School of Pharmacy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
                Publications
              </h1>
              <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
              <p className="mt-5 text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Discover the research publications contributed by faculty and scholars in reputed journals and conferences.
              </p>
          </div>
        </div>

<div className="w-full min-h-screen bg-gray-50 py-14 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      {/* ── Table ── */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          {/* Table Head */}
          <thead>
            <tr className="bg-[#0f2f5a]">
              <th className="py-4 px-6 text-left text-xs font-bold text-white uppercase tracking-widest w-14">
                S.No.
              </th>
              <th className="py-4 px-6 text-left text-xs font-bold text-white uppercase tracking-widest">
                Title
              </th>
              <th className="py-4 px-6 text-center text-xs font-bold text-white uppercase tracking-widest w-28">
                View
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100">
            {PublicationItems.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-cyan-50 transition-colors duration-150 group"
              >
                {/* Serial number */}
                <td className="py-4 px-6">
                  <span className="w-7 h-7 rounded-full bg-[#0f2f5a] text-white text-xs font-bold flex items-center justify-center">
                    {row.id}
                  </span>
                </td>

                {/* Title */}
                <td className="py-4 px-6">
                  <span className="text-sm sm:text-base font-semibold text-gray-700 group-hover:text-[#0f2f5a] transition-colors">
                    {row.title}
                  </span>
                </td>

                {/* View button */}
                <td className="py-4 px-6 text-center">
                  <a
                    href={row.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold transition-all duration-200 hover:scale-105 shadow-sm"
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

    </div>
  </div>       
    </>
  )
}

export default Publications