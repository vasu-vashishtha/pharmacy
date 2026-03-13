import { GiStarMedal } from "react-icons/gi";

/* ── Achievement data — add/remove entries as needed ── */
const achievementData = [
  {
    id: 1,
    period: "16th August 2023 – 30th October 2023",
    facultyList: [
      {
        name: "Dr. Vaishali Manikrao Patil",
        achievements: [
          "Invited lecture at NITTTR Bhopal M.P. Training program for teachers on computer aided drug design 17-10-2023.",
          "Session chair at DRDO sponsored national conference organized by Galgotias University, Greater Noida on 28.10.2023.",
        ],
      },
      {
        name: "Dr. Amrish Kumar",
        achievements: [
          "Refresher course on 'quality research & teaching methodology' by UGC (11-24 September 2023)",
        ],
      },
      {
        name: "Mr. Himanshu Aggarwal",
        achievements: [
          "Conference on 'Disruptive science for innovative and sustainable development' (4-5 September 2023). Amity University, Noida."
        ],
      },
      {
        name: "Sh. Rajan Kaushik",
        achievements: [
          "International conference on 'Synthetic and Pharmaceutical Chemistry (ICSPC)', 15-16 September 2023. Lovely Professional University, Punjab.",
        ],
      },
    ],
  },
  {
    id: 2,
    period: "1st November 2023- 30th November 2023",
    facultyList: [
      {
        name: "Dr. Amrish Kumar",
        achievements: [
          "5 Day International FDP on 'Emerging Insights in Pharmaceutical Education: From Research to Industry' organized by Sharda University, Greater Noida. (30/10/2023 to 03/11/23)",
          "Contributed in quality audit of question banks at Quantum University, Roorkee.",
        ],
      },
      {
        name: "Mr. Himanshu Aggarwal",
        achievements: [
          "5 Day International FDP on 'Emerging Insights in Pharmaceutical Education: From Research to Industry' organized by Sharda University, Greater Noida. (30/10/2023 to 03/11/23).",
        ],
      },
      {
        name: "Mr. Rajan Kaushik",
        achievements: [
          "Continuing Education Certificate by participating and completing in the enduring material titled 'Cannabis and Cannabis-Derived Products- For Healthcare Practitioners' awarded by FDA center for drug evaluation and research, U.S. Food & Drug Administration, U.S.A for 1.0 AMA/PRA Category, 1 Credits. (06/11/2023).",
          '"Attended Digital Event organized by International Pharmaceutical Federation, Netherland on topic "Particle – size Measurement and Its Impact on Drug Bioavailability" (06/11/2023)."',
        ],
      },
    ],
  },
];

/* ── Single Faculty Achievement Card ── */
const FacultyCard = ({ faculty }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
    {/* Faculty name */}
    <h4 className="text-base sm:text-lg font-extrabold text-[#0f2f5a] mb-4">
      {faculty.name}
    </h4>

    {/* Achievement points */}
    <ul className="space-y-3">
      {faculty.achievements.map((point, i) => (
        <li key={i} className="flex items-start gap-3">
          <GiStarMedal className="text-[#0f2f5a] text-lg shrink-0 mt-0.5" />
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            {point}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
const FacultyMemberAchievements = () => (
  <>
    <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
              Charak School of Pharmacy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
              Faculty Members Achievements
              </h1>
              <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
              <p className="mt-5 text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Showcasing the academic and research accomplishments of our faculty members.
              </p>
          </div>
        </div>

        <div className="w-full min-h-screen bg-white">
    {/* ── Content ── */}
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-screen-lg mx-auto">

        {achievementData.map((block) => (
          <div key={block.id} className="mb-16 last:mb-0">

            {/* Section title + date range */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2f5a] font-['Georgia',serif] mb-2">
              Faculty Members
            </h2>
            <p className="text-sm sm:text-base font-semibold text-gray-500 mb-8">
              {block.period}
            </p>

            {/* Faculty cards */}
            <div className="space-y-5">
              {block.facultyList.map((faculty) => (
                <FacultyCard key={faculty.name} faculty={faculty} />
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  </div>
  </>
  
);

export default FacultyMemberAchievements;