import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

/* ── Contact info cards data ── */
const contactCards = [
  {
    id: 1,
    icon: <MdLocationOn className="text-white text-3xl" />,
    iconBg: "bg-gradient-to-br from-cyan-400 to-teal-500",
    shadowColor: "shadow-cyan-200",
    title: "Address",
    lines: [
      { text: "Charak School of Pharmacy", bold: true },
      { text: "Chaudhary Charan Singh University, Meerut", bold: false },
      { text: "Uttar Pradesh – 250004", bold: false },
    ],
  },
  {
    id: 2,
    icon: <MdEmail className="text-white text-3xl" />,
    iconBg: "bg-gradient-to-br from-blue-400 to-blue-600",
    shadowColor: "shadow-blue-200",
    title: "Email",
    lines: [
      { text: "charakpharmacy.ccsu@gmail.com", bold: false, href: "mailto:charakpharmacy.ccsu@gmail.com" },
    ],
  },
  {
    id: 3,
    icon: <MdPhone className="text-white text-3xl" />,
    iconBg: "bg-gradient-to-br from-purple-500 to-violet-600",
    shadowColor: "shadow-purple-200",
    title: "Phone",
    lines: [
      { text: "+91-7217334353", bold: false, href: "tel:+917217334353" },
    ],
  },
];

const Contact = () => (
  <div className="w-full min-h-screen bg-white">

    {/* ── Page Hero Banner ── */}
    <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
          Contact Us
        </h1>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
        <p className="mt-5 text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          We'd love to hear from you. Reach out to us for admissions, academics,
          or any other enquiries.
        </p>
      </div>
    </div>

    {/* ── Contact Cards ── */}
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contactCards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center px-8 py-10 group"
            >
              {/* Icon bubble */}
              <div
                className={`w-20 h-20 rounded-[22px] ${card.iconBg} flex items-center justify-center shadow-lg ${card.shadowColor} group-hover:scale-110 transition-transform duration-300 mb-6`}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-extrabold text-[#0f2f5a] mb-5">
                {card.title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-px bg-gray-200 mb-5 group-hover:w-16 group-hover:bg-cyan-400 transition-all duration-300" />

              {/* Content lines */}
              <div className="space-y-1">
                {card.lines.map((line, i) => (
                  line.href ? (
                    <a
                      key={i}
                      href={line.href}
                      className="block text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200 break-all"
                    >
                      {line.text}
                    </a>
                  ) : (
                    <p
                      key={i}
                      className={`text-sm text-gray-600 ${line.bold ? "font-bold text-[#0f2f5a]" : ""}`}
                    >
                      {line.text}
                    </p>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Google Map ── */}
    <section className="w-full px-4 sm:px-6 lg:px-8 pb-14 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
          <iframe
            title="Charak School of Pharmacy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.5789793638396!2d77.70531207550638!3d28.99192587545506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c65bc6e1a4d0f%3A0x9a3e77e7e2a7b123!2sCharak%20School%20of%20Pharmacy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>

  </div>
);

export default Contact;