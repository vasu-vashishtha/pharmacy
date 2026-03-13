import React from 'react'
import classRoom from '../../assets/images/Class_Room_CSOP.jpg';

const ClassRooms = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
              Charak School of Pharmacy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
                Class Rooms
              </h1>
              <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
              <p className="mt-5 text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Spacious and well-equipped classrooms designed to support effective teaching and an interactive learning environment.
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
              About the Facilities
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2f5a] leading-tight font-['Georgia',serif]">
              Class Rooms
            </h2>
            <div className="mt-3 w-14 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />

            {/* Description paragraphs */}
            <div className="mt-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
              <p>
                The classrooms at Charak School of Pharmacy (CSOP) are meticulously designed to provide an optimal learning environment for students. With a capacity to accommodate up to 60 students comfortably, these spacious classrooms foster a conducive atmosphere for both teaching and learning.
              </p>
              <p>
                One of the standout features of these classrooms is their excellent ventilation system. Natural light streams in through large windows, creating a bright and airy space that helps students stay focused and alert throughout their lectures. Adequate ventilation ensures a constant flow of fresh air, promoting better concentration and overall well-being among students and faculty alike.
              </p>
              <p>
                Equipped with comfortable furniture, the classrooms at CSOP prioritize student comfort. Ergonomically designed chairs and desks ensure that students can sit through lectures without experiencing discomfort or strain. This focus on comfort enhances the overall learning experience, allowing students to fully engage with course materials without unnecessary distractions.
              </p>
              <p>
                To facilitate effective teaching and multimedia presentations, each classroom is outfitted with modern amenities, including fans and projectors. The presence of ceiling fans helps regulate the room temperature, ensuring that students remain comfortable even during warmer months. Meanwhile, state-of-the-art projectors enable instructors to deliver engaging presentations, display visual aids, and share educational videos with ease, enhancing comprehension and retention of course material.
              </p>
            </div>

          </div>

          {/* ── RIGHT: Illustration ── */}
          <div className="flex items-center justify-center">
            <img src={classRoom} alt='class_room' className='border-0 rounded-xl shadow-xl'/>
          </div>

        </div>
      </div>
    </section>
    </>
    
  )
}

export default ClassRooms