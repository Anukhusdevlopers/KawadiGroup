import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/footer'
import Sec1About from '../About/Sec1About'
import TextAbout from '../About/TextAbout'
import MissionCards from '../About/MissionCards'
import Ourteam from '../About/Ourteam'
import Testimonial from '../About/Testimonial'

const About = () => {
    return (
        <>
            <Navbar userdisplay="none"/>
            <Sec1About />
            <main>
                <MissionCards/>
                <Testimonial/>
            </main>
            <Footer />
        </>
    )
}

export default About