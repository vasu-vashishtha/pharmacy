import React from 'react'
import AdmissionIllustration from "../common/AdmissionIllustration";

const CoCurricular = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
              Charak School of Pharmacy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
              Co-Curricular Events
              </h1>
              <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
              <p className="mt-5 text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Activities that support academic learning and skill development beyond the classroom.
              </p>
          </div>
        </div>

        <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text Content ── */}
          <div>
            {/* Section Label */}
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-600 mb-3">
              Co-Curricular
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2f5a] leading-tight font-['Georgia',serif]">
              Charak School of Pharmacy, Faculty of Pharmacy, C.C.S. University welcomes Pharmacy freshers with an orientation program
            </h2>
            <div className="mt-3 w-14 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />

            {/* Description paragraphs */}
            <div className="mt-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
              <p>
                Charak School of Pharmacy, C.C.S. University organized an orientation program to greet the newly enrolled students of B.Pharm on October 9th 2023. Professor Shailendra Sharma, Director/Professor Incharge of the CSOP graced the programme as Chief Guest, adding a sense of eminence to the event. Professor Shailendra Sharma, while welcoming the students, applauded the achievements of University under the dynamic leadership of CCSU Vice Chancellor, Prof. Sangeeta Shukla. He motivated the students and advised them to focus on their studies to achieve excellence. Dr. Vaishali Manikrao Patil, Associate Professor & Acting Principal/HOD welcome the students and congratulate them for choosing a course of diverse opportunities. Dr. Amrish, Dr. Bhoomika, Mr. Himanshu Aggarwal & Mr. Rajan Kaushik motivated the students and made them aware about the course structure, examination pattern, syllabus & general rules/regulations of the university.
              </p>
            </div>
          </div>

          {/* ── RIGHT: Illustration ── */}
          <div className="flex items-center justify-center">
            <AdmissionIllustration />
          </div>

        </div>
      </div>
    </section>
    </>
    
  )
}

export default CoCurricular