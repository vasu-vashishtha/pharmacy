import React from 'react'

const VCMessage = () => {
  return (
    <>
    <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text Content ── */}
          <div>
            {/* Section Label */}
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-600 mb-3">
              About Us
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2f5a] leading-tight font-['Georgia',serif]">
              Vice Chancellor's Message
            </h2>
            <div className="mt-3 w-14 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />

            {/* Description paragraphs */}
            <div className="mt-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
              <p>
                I have more than 35 years of professional experience in different aspects of educational planning, institution building, teaching, research & development including international research.
              </p>
              <p>
                Under my leadership Chaudhary Charan Singh University, Meerut (UP) has taken several initiatives for promoting quality of higher education and the university got Accredited with A++ by NAAC with a high CGPA 3.66, on March 2023. Within a span of almost 15 months significant steps were taken for the appointment of faculties, more then 52 national and international MOUs for encouraging global facilitation of higher education, academic & research initiatives including developing an eco-friendly campus, strengthening student support, important courses like M.Tech., LLB 3 year, new specializations in LLM & Physics, Pharmacy, Yoga department with Panchkarma (Chaitanyam) and Dhyanam Facility, B-Voc in Jewellery Designing, Certificate Courses in Cinematography, Sound editing, a much required Central Instrumentation Facility (CIF) and Community Radio (FM 90.8) etc were started. During my tenure University has filed 48 research patents and we got 4th Position in India for highest number of patents in last three years. Chaudhary Charan Singh University is selected as one of the winners of the Clarivate India Research Excellence - Citation Awards 2023 (powered by Web of Science), the 9th edition of this award.
              </p>
            </div>
            <span className="mt-4 inline-block text-md font-bold tracking-widest uppercase text-cyan-600 mb-3">Prof. Sangeeta Shukla</span>
          </div>

          {/* ── RIGHT: Illustration ── */}
          <div className="flex items-center justify-center">
            <img src="https://www.ccsuniversity.ac.in/assets/images/vc-img.jpg" alt='vc_mam' className='border-0 rounded-xl shadow-xl'/>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default VCMessage