import React, { useEffect } from 'react';
import Navbar from '../Home/Navbar'
import Sect1 from '../Retailer/Sect1'
import Sec3 from '../Retailer/Sec3'
import Footer from '../Home/footer'
import Slider from '../Home/Slider'
import Testimonial from '../Home/Testimonial'
import Trustedpartner from '../Home/Trustedpartner'
import Header from '../Home/Header'
import Howitworks from '../Home/Howitworks'
import NumCountup from '../Home/NumCountup'
import Wchoose from '../Home/Wchoose'




const Home = (val) => {


  return (
    <>
      <Navbar userdisplay="none" tab="Login" logindisplay="initial" onclickroute="/login" loginover="none" />
     <Header />
      <Howitworks />
      <Wchoose />
      <Testimonial />
      <NumCountup />
      <Trustedpartner />
      <Footer />
    </>
  )
}

export default Home