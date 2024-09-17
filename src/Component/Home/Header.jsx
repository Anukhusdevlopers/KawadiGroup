import React from "react";
import './Header.css'
const Header = () => {
  return (
    <>
    <section class="hero">
                {/* <div class="hero-image">
            <img src={header} alt="Waste Recycle Illustration"/>
        </div> */}
        <div class="hero-text">
            <h3>Online Scrap Pickup Service</h3>
            <h1>Online Kabadiwala </h1>
            <p>Online Kawadiwala, we provide our service to people at their place, we pickup scrap from your home, office, or workplace at the best price, which makes our customers happy.
            </p>
            <button class="btn">Book Now</button>
        </div>

    </section>
    </>
  );
};

export default Header;