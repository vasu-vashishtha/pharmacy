import React from 'react'
import principal from '../../assets/images/principal.jpg';

const PrincipalMessage = () => {
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
                        It gives me immense pleasure to welcome you to Charak School of Pharmacy, Chaudhary Charan University Campus, Meerut.
                      </p>
                      <p>
                        The State Government Institute is established under the aegis of Faculty of Pharmacy, Chaudhary Charan Singh University, Meerut to promote quality education and research in the field of pharmaceutical sciences. Charak School of Pharmacy has well established academic and research facilities including smart classrooms, well equipped laboratories, central instrumentation and other academic facilities, animal house and herbal garden. Presently, Charak School of Pharmacy is offering Bachelor of Pharmacy programme. In the coming year Masters programme in the core branches of pharmaceutical sciences will be introduced.
                      </p>
                      <p>
                        Enthusiastic and entrepreneurial efforts are initiated by the Government of Uttar Pradesh to develop Pharma and medical devices park in the Western Uttar Pradesh Region. Charak School of Pharmacy has adopted the industry relevant course curriculum as suggested by the Pharmacy Council of India. Charak School of Pharmacy has established infrastructure facility for quality education and research to cater the requirements of Industries, MSMEs, and start-ups. The major research domains for Charak School of Pharmacy include drug discovery through synthesis of new molecules or identification from natural products, development of novel technologies for drug delivery, formulation development, etc.
                      </p>
                      <p>
                        The location of the institute ensures a symbiotic association with Pharmaceutical Industries of Northern Region of India. Charak School of Pharmacy aspires to serve as a good launching platform to revamp the pharmaceutical education and research.
                      </p>
                    </div>
                    <span className="mt-4 inline-block text-md font-bold tracking-widest uppercase text-cyan-600 mb-3">Dr. Vaishali Manikrao Patil</span>
                  </div>
        
                  {/* ── RIGHT: Illustration ── */}
                  <div className="flex items-center justify-center">
                    <img src={principal} alt='vc_mam' className='border-0 rounded-xl shadow-xl'/>
                  </div>
        
                </div>
              </div>
            </section>
    </>
  )
}

export default PrincipalMessage