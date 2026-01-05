import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      {/* Icon */}
      <div className="w-14 h-14 mb-4 rounded-full bg-sky-500 flex items-center justify-center">
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
    </motion.div>
  );
}
