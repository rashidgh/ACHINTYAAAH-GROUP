import { motion } from "framer-motion";
import { Target, Eye, Brain } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Philosophy",
    text: "We make technology an asset for your business, delivering impactful and scalable digital solutions.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver best-in-class IT services with innovation, expertise, and a strong technical foundation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To create meaningful digital experiences and empower businesses through technology.",
  },
];

export default function AboutUs() {
  return (
    <section className="bg-slate-900/90 text-white">
      {/* HERO */}
      <div className="relative bg-gradient-to-r from-slate-900/90 to-slate-600 py-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6"
        >
          <h1 className="text-4xl font-bold tracking-wide">ABOUT US</h1>
          <p className="text-sm text-gray-300 mt-2">Home / About Us</p>
        </motion.div>
      </div>

      {/* WHO WE ARE */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE */}
        <motion.img
          src="https://community.thriveglobal.com/wp-content/uploads/2018/08/businesswomen.jpg"
          alt="Team discussion"
          className="rounded-lg shadow-xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
          <p className=" leading-relaxed mb-4">
            MSol Technologies strives for excellence by providing innovative,
            reliable, and scalable IT solutions across industries including
            healthcare, finance, logistics, retail, and government sectors.
          </p>
          <p className="leading-relaxed">
            Our technical expertise, strategic thinking, and client-first
            approach help businesses achieve growth, efficiency, and long-term
            success.
          </p>
        </motion.div>
      </div>

      {/* CORE VALUES */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl font-semibold mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-indigo-600 flex items-center justify-center">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
