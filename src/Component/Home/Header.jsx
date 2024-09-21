import React from "react";
import './Header.css'
import header from '../../assets/header.png'
const Header = () => {
  return (
    <>
 <section className="hero">
        <div className="hero-text">
          <h3>Online Scrap Pickup Service</h3>
          <h1>Online Kabadiwala</h1>
          <p>
            Online Kabadiwala, we provide our service to people at their place, 
            we pickup scrap from your home, office, or workplace at the best 
            price, which makes our customers happy.
          </p>
          <button className="btn">Book Now</button>
        </div>
      </section>

      {/* Add this image container for 480px and below */}
      <section className="hero-image-container">
        <img src={header} alt="Scrap pickup" />
      </section>
    </>
  );
};

export default Header;