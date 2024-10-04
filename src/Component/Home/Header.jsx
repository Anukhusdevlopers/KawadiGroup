import React, { useEffect } from "react";
import './Header.css'
import header from '../../assets/header.png'

import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {


  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh(); // Refresh AOS animations after rendering
  }, []);

  return (
    <>

      <section className="hero" data-aos="fade-up">
        <div className="hero-text" >
          <h3 ><i> Turn Your Scrap into Cash</i></h3>
          <h1 >Online Kabadiwala</h1>
          <p >
          We believe in turning waste into wealth. Our hassle-free scrap collection service helps you declutter your space while contributing to a cleaner, greener environment.
          </p >
          {/* <button className="btn" >Book Now</button> */}
        </div>
      </section>

      {/* Add this image container for 480px and below */}
      <section className="hero-image-container" >
        <img src={header} alt="Scrap pickup" />
      </section>




    </>
  );
};

export default Header;