import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="group relative cursor-pointer"
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/40 to-cyan-400/40 opacity-0 group-hover:opacity-100 blur transition duration-300"></div>

      {/* Card Content */}
      <div className="relative z-10 h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 group-hover:border-sky-400/40 group-hover:shadow-lg group-hover:shadow-sky-500/20">
        
        {/* Icon */}
        <div className="w-14 h-14 mb-4 rounded-full bg-sky-500/90 flex items-center justify-center">
          <Icon size={26} className="text-black" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-400 transition">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
