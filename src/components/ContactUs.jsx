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
        name: "Sourav S",
        email: "sourav@achintyaaah.com",
        phone: "+91 9148094352",
        linkedin: "#",
    },
    {
        name: "Karthik S",
        email: "karthik@achintyaaah.com",
        phone: "+91 9886493060",
        linkedin: "#",
    },
];

export default function ContactUs() {
    return (
        <section
            id="contact"
            className="relative min-h-screen bg-slate-900/90  text-white px-6 py-24 overflow-hidden"
        >
            {/* Header */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-16"
            >
                Contact <span className="text-indigo-400">Us.</span>
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
                                    className="border border-gray-600 p-1 rounded hover:border-sky-400"
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
                                className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:border-sky-400 hover:text-sky-400 transition"
                            >
                                <Icon size={18} />
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* RIGHT – WORLD MAP (DECORATIVE) */}

            </div>

            {/* Footer */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 text-xs text-gray-500"
            >
                ©2025 Copyright – ACHINTYAAAH
                GROUP. All rights reserved.
            </motion.p>

            {/* Slider Indicator */}
            {/* <div className="absolute top-10 right-10 flex items-center gap-3 text-sm">
        <ArrowLeft className="text-emerald-400" />
        <ArrowRight className="text-emerald-400" />
        <span>1 / 10</span>
      </div> */}
        </section>
    );
}
