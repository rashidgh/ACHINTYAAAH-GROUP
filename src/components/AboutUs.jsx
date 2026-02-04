import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { features } from "../data/footerData";
import { aboutMoreData, coreValueDetails } from "../data/about";
import AboutModal from "../components/AboutModal";

export default function AboutUs({ theme }) {
  const isDay = theme !== "night";
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 600, easing: "ease-out" });
  }, []);

  return (
    <>
      <section
        id="about"
        className={`relative ${isDay
          ? "bg-white text-slate-900"
          : "bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white"
          }`}
      >
        {/* HERO */}
        <div className="text-center pt-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            About{" "}
            <span className={isDay ? "text-indigo-600" : "text-indigo-400"}>
              Achintyaah
            </span>
          </h1>
        </div>

        {/* WHO WE ARE */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="zoom-in" className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://community.thriveglobal.com/wp-content/uploads/2018/08/businesswomen.jpg"
              alt="Team"
              className="w-full"
            />
          </div>

          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6">
              Who{" "}
              <span className={isDay ? "text-indigo-600" : "text-indigo-400"}>
                We Are
              </span>
            </h2>

            <p className={`${isDay ? "text-slate-700" : "text-slate-300"} mb-6`}>
              Achintyaah Group is a technology-driven organization committed to empowering businesses through reliable, scalable, and future-ready digital solutions. We specialize in delivering end-to-end IT services that enable organizations to streamline operations, enhance customer experiences, and achieve sustainable growth in an increasingly competitive digital landscape. Our expertise spans across full stack development, cloud solutions, UI/UX design, enterprise applications, automation testing, and modern software architectures tailored to diverse business needs.
            </p>

            <button
              onClick={() => setModalData(aboutMoreData)}
              className="px-6 py-3 rounded-xl bg-indigo-600 cursor-pointer text-white hover:bg-indigo-700 transition"
            >
              Read More
            </button>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="pb-24">
          <h2 className="text-center text-3xl font-bold mb-16">
            Our{" "}
            <span className={isDay ? "text-indigo-600" : "text-indigo-400"}>
              Core Values
            </span>
          </h2>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                onClick={() => setModalData(coreValueDetails[item.title])}
                className={`cursor-pointer rounded-2xl p-8 text-center
  transform-gpu transition-all duration-300 ease-out
  hover:-translate-y-2
  ${isDay
                    ? "bg-white shadow-md hover:shadow-xl"
                    : "bg-white/5 border border-white/10 hover:border-indigo-400/40"
                  }
`}
              >

                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <item.icon size={30} />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className={`${isDay ? "text-slate-600" : "text-slate-300"} text-sm`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AboutModal
        data={modalData}
        onClose={() => setModalData(null)}
        theme={theme}
      />
    </>
  );
}
