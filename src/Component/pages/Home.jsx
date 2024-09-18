import React from 'react'
import Navbar from '../Home/Navbar'
import Sect1 from '../Retailer/Sect1'
import Sec3 from '../Retailer/Sec3'
import Section3 from '../Home/Section3'
import Footer from '../Home/footer'
import Slider from '../Home/Slider'
import Testimonial from '../Home/Testimonial'
import Trustedpartner from '../Home/Trustedpartner'
import Header from '../Home/Header'
import Whychooseus from '../Home/Whychooseus'
import Howitworks from '../Home/Howitworks'
import NumCountup from '../Home/NumCountup'
import HiwAanchal from '../Home/HIWAanchal'

const Home = () => {
  return (
    <>
      <Navbar userdisplay="none" />
      {/* <Slider /> */}
      <Header />
      <Howitworks />

      {/* <Section1/> */}
      {/* <Section2/> */}

      {/* <Sect1/> */}
      {/* <Sec3/> */}
      {/* <Section3/> */}
      {/* <Section4 /> */}


      {/* <Whychooseus/> */}
      <Testimonial />
      <NumCountup />
      <Trustedpartner />
      <Footer />
    </>
  )
}

export default Home