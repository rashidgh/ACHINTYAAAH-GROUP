import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Server,
  Monitor,
  Smartphone,
  Settings,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Full Stack Development",
    description:
      "We implement complete development solutions from idea to funding-ready products.",
    icon: Code,
  },
  {
    title: "UX/UI",
    description:
      "We craft intuitive user experiences through deep user research and validation.",
    icon: Layout,
  },
  {
    title: "Backend Development",
    description:
      "Robust, scalable backend systems focused on performance and security.",
    icon: Server,
  },
  {
    title: "Frontend Development",
    description:
      "User-centric frontend experiences integrated seamlessly with backend APIs.",
    icon: Monitor,
  },
  {
    title: "Hybrid App Development",
    description:
      "Cross-platform mobile apps using React, Flutter, Ionic and Xamarin.",
    icon: Smartphone,
  },
  {
    title: "Automation Testing",
    description:
      "Automated testing solutions for fast, reliable and scalable releases.",
    icon: Settings,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-900/90 py-24 px-6 text-white"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl font-bold mb-4">
          Our <span className="text-sky-500">Services</span>
        </h2>
        <p className="text-gray-400">
          We work small but think big, delivering scalable, secure and innovative
          digital solutions.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
