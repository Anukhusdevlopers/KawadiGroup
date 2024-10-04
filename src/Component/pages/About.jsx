import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/footer'
import MissionCards from '../About/MissionCards'
import AboutHeading from '../About/AboutHeading'
import About_Details from '../About/About_Details'

const About = () => {
    return (
        <>

            <Navbar userdisplay="none" customernav="none" mainnav="" logindisplay="initial" onclickroute="/login" />
            <AboutHeading />
            <MissionCards />
            <About_Details />
            <Footer />
        </>
    )
}

export default About