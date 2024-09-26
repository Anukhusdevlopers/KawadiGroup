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
          <h3 ><i> Online Scrap Pickup Service</i></h3>
          <h1 >Online Kabadiwala</h1>
          <p >
            Online Kabadiwala, we provide our service to people at their place,
            we pickup scrap from your home, office, or workplace at the best
            price, which makes our customers happy.
          </p >
          <button className="btn" >Book Now</button>
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