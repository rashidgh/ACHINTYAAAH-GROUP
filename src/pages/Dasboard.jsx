import React from "react";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarosel";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import OurClients from "../components/OurClients";
import AboutUs from "../components/AboutUs";
import ScrollToTop from "../components/ScrollToTop";
import useTheme from "../hooks/useTheme";

const Dashboard = () => {
  const [theme, setTheme] = useTheme(); // ✅ SINGLE SOURCE

  return (
    <div
      className={`min-h-screen w-screen transition-colors duration-300 ${
        theme === "night"
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white"
          : "bg-white text-black"
      }`}
    >
      <Navbar theme={theme} setTheme={setTheme} />

      <HeroCarousel />
      <OurClients theme={theme} />
      <Services theme={theme} />
      <AboutUs theme={theme} />
      <ContactUs theme={theme} />
      <ScrollToTop />
    </div>
  );
};

export default Dashboard;
