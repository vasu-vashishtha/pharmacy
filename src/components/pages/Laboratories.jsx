import React from 'react'
import laboratory1 from '../../assets/images/Laboratory_1.jpg';
import laboratory2 from '../../assets/images/Laboratory_2.jpg';
import laboratory3 from '../../assets/images/Laboratory_3.jpg';

const Laboratories = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
              Charak School of Pharmacy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
                Laboratories
              </h1>
              <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
              <p className="mt-5 text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Well-equipped laboratories that provide practical training and hands-on experience in pharmaceutical sciences.
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
                  Laboratories
                </h2>
                <div className="mt-3 w-14 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />
    
                {/* Description paragraphs */}
                <div className="mt-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f2f5a] leading-tight font-['Georgia',serif]">
                    Pharmaceutics Lab
                  </h3>
                  <p>
                    The Pharmaceutics Lab at Charak School of Pharmacy (CSOP) is a hub of hands-on learning and experimentation for students specializing in the formulation and development of pharmaceutical products. Equipped with state-of-the-art equipment and facilities, this lab provides students with the opportunity to gain practical experience in various aspects of pharmaceutical formulation, including the preparation, testing, and evaluation of dosage forms such as tablets, capsules, creams, and ointments. Under the guidance of experienced faculty members, students engage in activities such as compounding, granulation, coating, and packaging, honing their skills and understanding of pharmaceutical processes. With a focus on quality and innovation, the Pharmaceutics Lab plays a vital role in preparing students for careers in pharmaceutical research, development, and manufacturing.                  </p>
                </div>
    
              </div>
    
              {/* ── RIGHT: Illustration ── */}
              <div className="flex items-center justify-center">
                <img src={laboratory1} alt='laboratory1' className='border-0 rounded-xl shadow-xl'/>
              </div>
            </div>
          </div>


          <div className="max-w-screen-xl mx-auto mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ── LEFT: Illustration ── */}
              <div className="flex items-center justify-center">
                <img src={laboratory2} alt='laboratory2' className='border-0 rounded-xl shadow-xl'/>
              </div>
    
              {/* ── RIGHT: Text Content ── */}
              <div>
                {/* Description paragraphs */}
                <div className="mt-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f2f5a] leading-tight font-['Georgia',serif]">
                    Pharmaceutical Chemistry Lab
                  </h3>
                  <p>
                    The Pharmaceutical Chemistry Lab at CSOP serves as a dynamic learning environment where students delve into the intricacies of drug design, synthesis, analysis, and characterization. Through hands-on experiments and laboratory exercises, students explore the chemical principles underlying the development of pharmaceutical agents, including organic synthesis, spectroscopic techniques, chromatography, and molecular modeling. Armed with modern instrumentation and analytical tools, students gain practical experience in drug discovery and development, as well as the evaluation of drug purity, stability, and potency. With a focus on fostering critical thinking and problem-solving skills, the Pharmaceutical Chemistry Lab prepares students to tackle real-world challenges in the field of medicinal chemistry and drug development.
                  </p>
                </div>
    
              </div>
    
            </div>
          </div>

          <div className="max-w-screen-xl mx-auto mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
    
              {/* ── RIGHT: Text Content ── */}
              <div>
                {/* Description paragraphs */}
                <div className="mt-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f2f5a] leading-tight font-['Georgia',serif]">
                    Pharmacology Lab
                  </h3>
                  <p>
                    The Pharmacology Lab at CSOP serves as a vital hub for students studying the effects of drugs on biological systems and understanding the mechanisms of drug action. Equipped with advanced instrumentation and experimental setups, this lab provides students with hands-on experience in conducting pharmacological experiments, including in vitro and in vivo studies on various animal models. Through practical exercises and research projects, students explore topics such as drug-receptor interactions, dose-response relationships, pharmacokinetics, and pharmacodynamics. With an emphasis on ethical experimentation and safety protocols, the Pharmacology Lab prepares students to critically evaluate the efficacy, safety, and therapeutic potential of pharmaceutical agents, laying the foundation for careers in pharmacological research, drug development, and clinical practice.
                  </p>
                </div>
              </div>

              {/* ── LEFT: Illustration ── */}
              <div className="flex items-center justify-center">
                <img src={laboratory3} alt='laboratory3' className='border-0 rounded-xl shadow-xl'/>
              </div>
    
            </div>
          </div>

          <div className="max-w-screen-xl mx-auto mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ── LEFT: Illustration ── */}
              <div className="flex items-center justify-center">
                <img src={laboratory3} alt='laboratory3' className='border-0 rounded-xl shadow-xl'/>
              </div>
    
              {/* ── RIGHT: Text Content ── */}
              <div>
                {/* Description paragraphs */}
                <div className="mt-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f2f5a] leading-tight font-['Georgia',serif]">
                    Pharmacognosy Lab
                  </h3>
                  <p>
                    The Pharmacognosy Lab at CSOP is dedicated to the study of medicinal plants and natural products, providing students with hands-on experience in the isolation, identification, and characterization of bioactive compounds derived from botanical sources. Equipped with modern instrumentation and microscopy facilities, this lab allows students to explore the chemical and biological properties of medicinal plants, including their traditional uses, phytochemical composition, and pharmacological activities. Through practical exercises and research projects, students learn techniques such as extraction, chromatography, spectroscopy, and bioassays, gaining insights into the diversity and potential of natural products in drug discovery and development. With a focus on sustainability and biodiversity conservation, the Pharmacognosy Lab prepares students to harness the therapeutic potential of natural remedies while promoting responsible stewardship of plant resources.                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
    
  )
}

export default Laboratories