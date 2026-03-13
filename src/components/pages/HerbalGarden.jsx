import React from 'react'
import herbalGarden from '../../assets/images/Herbal_Garden_CSOP.jpg';

const HerbalGarden = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
              Charak School of Pharmacy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
                Herbal Garden
              </h1>
              <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
              <p className="mt-5 text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                A dedicated herbal garden that supports the study and identification of medicinal plants used in pharmacy and traditional medicine.
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
                  Herbal Garden
                </h2>
                <div className="mt-3 w-14 h-1 rounded-full bg-gradient-to-r from-red-600 to-cyan-500" />
    
                {/* Description paragraphs */}
                <div className="mt-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
                  <p>
                    The herbal garden at Charak School of Pharmacy (CSOP) is a treasure trove of medicinal plants, meticulously cultivated to harness the therapeutic potential of nature's bounty. Nestled within the serene surroundings of the school campus, this garden serves as a living laboratory for students and researchers alike, offering a hands-on experience with diverse botanical remedies.
                  </p>
                  <p>
                    Lemongrass, with its refreshing aroma and antiseptic properties, thrives alongside Withania, renowned for its adaptogenic properties that support stress management and vitality. Turmeric, revered for its anti-inflammatory and antioxidant benefits, adds a splash of vibrant color to the garden, while Rauwolfia provides a natural remedy for hypertension and anxiety.
                  </p>
                  <p>
                    Ginger and cardamom, prized for their aromatic flavors and digestive benefits, find their place amidst the verdant foliage, while Gymnema offers its blood sugar-regulating properties. Barleria, Tulsi, and Sudarshan contribute to the garden's repertoire with their respective abilities to alleviate respiratory ailments, boost immunity, and aid in fever reduction.
                  </p>
                  <p>
                    Murraya and Neem trees stand tall, offering multifaceted medicinal benefits ranging from skincare to insect repellent. Guava bushes yield their nutritious fruits, while Kalanchoe and Mexican mint add ornamental beauty along with their healing properties.
                  </p>
                  <p>
                    Mint and aloe vera plants, with their cooling and soothing effects, thrive alongside hibiscus flowers, known for their anti-hypertensive and hair care properties. Apamarg, Jamun, and Tamala trees add to the garden's diversity, each offering unique medicinal benefits that cater to various health needs.
                  </p>
                  <p>
                    Overall, the herbal garden at CSOP serves as a dynamic hub of learning and discovery, fostering an appreciation for the rich tradition of herbal medicine while paving the way for innovative research and education in pharmaceutical sciences.
                  </p>
                </div>
    
              </div>
    
              {/* ── RIGHT: Illustration ── */}
              <div className="flex items-center justify-center">
                <img src={herbalGarden} alt='herbal-garden' className='border-0 rounded-xl shadow-xl'/>
              </div>
    
            </div>
          </div>
        </section>
    </>
    
  )
}

export default HerbalGarden