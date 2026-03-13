import React from 'react'
import director from '../../assets/images/director.jpg';

const DirectorMessage = () => {
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
              Professor-In-charge/Director Message
            </h2>
            <div className="mt-3 w-14 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />

            {/* Description paragraphs */}
            <div className="mt-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
              <p>
                Welcome to Charak School of Pharmacy!
              </p>
              <p>
                With its green and vibrant campus, state of the art facilities and infrastructure Charak School of Pharmacy provides an intellectually stimulating ecosystem for all. Charak School of Pharmacy was established in 2023 as an institution of higher learning in pharmaceutical sciences. The institute emphasizes on providing hands-on training to our students and making them "industry-ready" when they graduate. Our esteemed faculty train our students to find themselves at par with students from anywhere around the globe.
              </p>
              <p>
                Charak School of Pharmacy aims to develop academic and industry interaction through several collaborative activities. The institute has initiated meaningful interactions with the industries and is taking several steps to fulfill the need of the domestic pharmaceutical sector and the society. I am sure that the students, staff and faculty members will bring accolades to this budding institute at Chaudhary Charan Singh University Campus, Meerut.
              </p>
            </div>
            <span className="mt-4 inline-block text-md font-bold tracking-widest uppercase text-cyan-600 mb-3">Prof. Shailendra Sharma</span>
          </div>

          {/* ── RIGHT: Illustration ── */}
          <div className="flex items-center justify-center">
            <img src={director} alt='vc_mam' className='border-0 rounded-xl shadow-xl'/>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default DirectorMessage