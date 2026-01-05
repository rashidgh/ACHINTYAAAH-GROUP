import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import AnimatedText from "./AnimatedText";

const slides = [
    {
        title: "IT Solutions for Modern Business",
        desc: "We build scalable, secure and high-performance digital products.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
        title: "Web & Mobile App Development",
        desc: "Custom applications tailored to your business needs.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
        title: "Cloud & Enterprise Services",
        desc: "Transform your infrastructure with cloud-ready solutions.",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    },
];

export default function HeroCarousel() {
    return (
        // 👇 pt-16 = navbar height
        <div className="pt-16 w-full">
            <div className="h-[70vh]">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop
                    className="h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="relative h-full bg-cover bg-center flex items-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60" />

                                {/* Animated Content */}
                                <div className="relative z-10 max-w-7xl mx-auto px-6">
                                    <AnimatedText
                                        key={slide.title}     // VERY IMPORTANT for re-animation
                                        text={slide.title}
                                        className="block text-3xl md:text-5xl font-bold text-white mb-4"
                                    />


                                    <AnimatedText
                                        key={slide.desc}
                                        text={slide.desc}
                                        className="block text-lg text-gray-200 max-w-xl mb-6"
                                    />


                                    <motion.button
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                        className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition"
                                    >
                                        Get Started
                                    </motion.button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
