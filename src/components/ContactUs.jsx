import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const contacts = [
  {
    name: "Arjun G N",
    email: "arjun@tudotechnologies.com",
    phone: "+91 9535383084",
    linkedin: "#",
  },
  {
    name: "Karthik S",
    email: "karthik@tudotechnologies.com",
    phone: "+91 9886493060",
    linkedin: "#",
  },
];

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-white px-6 py-24 overflow-hidden"
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-16"
      >
        Contact <span className="text-emerald-400">Us.</span>
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT – CONTACT DETAILS */}
        <div className="space-y-12">
          {contacts.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-3 flex items-center gap-3">
                {person.name}
                <a
                  href={person.linkedin}
                  className="border border-gray-600 p-1 rounded hover:border-emerald-400"
                >
                  <Linkedin size={16} />
                </a>
              </h3>

              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Mail size={16} /> {person.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} /> {person.phone}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 pt-8"
          >
            {[Linkedin, Mail, Phone].map((Icon, idx) => (
              <button
                key={idx}
                className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:border-emerald-400 hover:text-emerald-400 transition"
              >
                <Icon size={18} />
              </button>
            ))}
          </motion.div>
        </div>

        {/* RIGHT – WORLD MAP (DECORATIVE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background dots map */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:12px_12px]" />

          {/* Animated highlight dots */}
          <motion.div
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-1/4 left-1/3 w-2 h-2 bg-emerald-400 rounded-full"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, delay: 1 }}
            className="absolute top-1/2 left-2/3 w-2 h-2 bg-emerald-400 rounded-full"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-emerald-400 rounded-full"
          />
        </motion.div>
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-6 text-xs text-gray-500"
      >
        ©2025 Copyright – Tudo Technologies. All rights reserved.
      </motion.p>

      {/* Slider Indicator */}
      <div className="absolute top-10 right-10 flex items-center gap-3 text-sm">
        <ArrowLeft className="text-emerald-400" />
        <ArrowRight className="text-emerald-400" />
        <span>1 / 10</span>
      </div>
    </section>
  );
}
