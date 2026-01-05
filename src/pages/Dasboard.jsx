import React from 'react'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarosel'
import Services from '../components/Services'
import ContactUs from '../components/ContactUs'

const Dasboard = () => {
    return (
        <div>
            <Navbar />
            <HeroCarousel/>
            <Services/>
            <ContactUs/>
        </div>
    )
}

export default Dasboard
