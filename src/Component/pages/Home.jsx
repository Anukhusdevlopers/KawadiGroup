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

// headr file import
import '../Home/Header.css'
import header from '../../assets/header.png'

// howitworks file imported
import '../Home/Howitworks.css'

// whychoose
import '../Home/Wchoose.css'

// aos import

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = (val) => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh(); // Refresh AOS animations after rendering
  }, []);

  const handleMouseEnter = (e) => {
    const innerDiv = e.currentTarget;
    const before = innerDiv.querySelector('.hover-before');
    const text = innerDiv.querySelector('h1');

    if (before) {
      before.style.opacity = '1';
      before.style.transform = 'translateY(0)';
    }

    const image = innerDiv.querySelector('img');
    if (image) {
      image.style.transform = 'scale(1.1)';
    }

    if (text) {
      text.style.color = '#ffffff';
      text.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.7)';
    }

    innerDiv.style.transform = 'translateY(-10px)';
  };




  const handleMouseLeave = (e) => {


    const innerDiv = e.currentTarget;
    const before = innerDiv.querySelector('.hover-before');
    const text = innerDiv.querySelector('h1');

    if (before) {
      before.style.opacity = '0';
      before.style.transform = 'translateY(10px)';
    }

    const image = innerDiv.querySelector('img');
    if (image) {
      image.style.transform = 'scale(1)';
    }

    if (text) {
      text.style.color = '#333333';
      text.style.textShadow = 'none';
    }

    innerDiv.style.transform = 'translateY(0)';
  };






  return (
    <>
      <Navbar userdisplay="none" tab="Login" onclickroute="/Retailerlogin" loginover="none" />
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