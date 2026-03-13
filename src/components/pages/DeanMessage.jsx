import React from 'react'
import dean from '../../assets/images/dean.jpg';

const DeanMessage = () => {
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
              Dean's Message
            </h2>
            <div className="mt-3 w-14 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />

            {/* Description paragraphs */}
            <div className="mt-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
              <p>
                To Be updated!!
              </p>
            </div>
            <span className="mt-4 inline-block text-md font-bold tracking-widest uppercase text-cyan-600 mb-3">Prof. Vibhu Sahani</span>
          </div>

          {/* ── RIGHT: Illustration ── */}
          <div className="flex items-center justify-center">
            <img src={dean} alt='dean' className='border-0 rounded-xl shadow-xl'/>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default DeanMessage