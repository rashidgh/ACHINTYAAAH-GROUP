import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import Footer from "./Footer";

const contacts = [
  {
    name: "Sourav S",
    role: "Business Head",
    email: "sourav@achintyaaah.com",
    phone: "+91 9148094352",
    linkedin: "#",
  },
  {
    name: "Karthik S",
    role: "Technical Lead",
    email: "karthik@achintyaaah.com",
    phone: "+91 9886493060",
    linkedin: "#",
  },
];

export default function ContactUs({ theme }) {
  const isNight = theme === "night";

  return (
    <section
      id="contact"
      className={`
        relative min-h-screen px-6 pt-24
        ${isNight
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white"
          : "bg-slate-50 text-slate-900"}
      `}
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-20 text-center"
      >
        Let’s{" "}
        <span className={isNight ? "text-indigo-400" : "text-indigo-600"}>
          Connect
        </span>
      </motion.h2>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT – CONTACT CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="space-y-8"
        >
          {contacts.map((person) => (
            <motion.div
              key={person.name}
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`
                group relative flex items-center justify-between gap-6 rounded-xl p-6 transition-all
                ${isNight
                  ? "bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-400/50 shadow-lg"
                  : "bg-white border border-slate-200 hover:border-indigo-500 shadow-md hover:shadow-xl"}
              `}
            >
              {/* LEFT INFO */}
              <div>
                <h3 className="text-xl font-semibold">
                  {person.name}
                </h3>

                <p
                  className={`text-sm mb-3 ${
                    isNight ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  {person.role}
                </p>

                <div
                  className={`flex flex-col gap-2 text-sm ${
                    isNight ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Mail size={16} /> {person.email}
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone size={16} /> {person.phone}
                  </span>
                </div>
              </div>

              {/* RIGHT ICON */}
              <a
                href={person.linkedin}
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center transition
                  ${isNight
                    ? "border border-slate-700 text-slate-300 hover:border-indigo-400 hover:text-indigo-400"
                    : "border border-slate-300 text-slate-600 hover:border-indigo-500 hover:text-indigo-600"}
                `}
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT – INFO CARDS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          {isNight && (
            <div className="absolute inset-0 bg-indigo-500/20 blur-[120px] rounded-full" />
          )}

          <div className="relative flex flex-col gap-6">
            {[
              {
                title: "We’d love to hear from you",
                text:
                  "Whether you’re looking to build a product, scale your business, or just want to say hello — our team is ready.",
              },
              {
                title: "Start a Conversation",
                text:
                  "Reach out to discuss your business goals, technical challenges, or partnership opportunities. Our team is here to help you move forward.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className={`
                  rounded-2xl p-8 transition-all
                  ${isNight
                    ? "bg-white/5 backdrop-blur border border-white/10 shadow-xl"
                    : "bg-white border border-slate-200 shadow-md hover:shadow-lg"}
                `}
              >
                <p className="text-2xl font-semibold mb-4">
                  {item.title}
                </p>
                <p
                  className={`leading-relaxed ${
                    isNight ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <div className="mt-36">
        <Footer theme={theme} /> 
      </div>
    </section>
  );
}
