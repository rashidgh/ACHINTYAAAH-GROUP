import React from 'react'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarosel'
import Services from '../components/Services'
import ContactUs from '../components/ContactUs'
import OurClients from '../components/OurClients'
import AboutUs from '../components/AboutUs'
import ScrollToTop from '../components/ScrollToTop'

const Dasboard = () => {
    return (
        <div>
            <Navbar />
            {/* <HeroCarousel/> */}
            <OurClients/>
            <Services/>
            <AboutUs/>
            <ContactUs/>
            <ScrollToTop/>
        </div>
    )
}

export default Dasboard;