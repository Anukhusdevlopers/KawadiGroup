import React from 'react'
import Navbar from '../Home/Navbar'
import Section1 from '../Home/Section1'
import Sect1 from '../Retailer/Sect1'
import Sec3 from '../Retailer/Sec3'
import Section2 from '../Home/Section2'
import Section3 from '../Home/Section3'
import Section4 from '../Home/Section4'
import Section5 from '../Home/Section5'
import Footer from '../Home/footer'
import '../Home/Section1.css'
import Slider from '../Home/Slider'
import Section6 from '../Home/Section6'
import Testimonial from '../About/Testimonial'
import Trustedpartner from '../Home/Trustedpartner'
import Header from '../Home/Header'
import Whychooseus from '../Home/Whychooseus'
import Howitworks from '../Home/Howitworks'

const Home = () => {
  return (
    <>
      <Navbar userdisplay="none" />
      {/* <Slider /> */}
      <Header/>
      <Howitworks/>
      <main style={{ minHeight: '100vh', width: '100%', backgroundColor: 'white' }}>
        {/* <Section1/> */}
        {/* <Section2/> */}
        <Section6 />
        {/* <Sect1/> */}
        {/* <Sec3/> */}
        {/* <Section3/> */}
        <Section4 />

      </main>
      {/* <Whychooseus/> */}
      <Testimonial />
      <Section5 />
      <Trustedpartner />
      <Footer />
    </>
  )
}

export default Home