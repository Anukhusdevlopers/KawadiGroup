import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/footer'
import MissionCards from '../About/MissionCards'
import AboutHeading from '../About/AboutHeading'

import Aboutpage from '../About/Aboutpage'

const About = () => {
    return (
        <>
            <Navbar userdisplay="none" />
            {/* <AboutHeading h1="About "/>
            <main>
                <MissionCards/>
            </main> */}
           <Aboutpage/>

            <Footer />
        </>
    )
}

export default About