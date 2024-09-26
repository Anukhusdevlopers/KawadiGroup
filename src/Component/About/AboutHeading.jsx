import React,{useEffect} from "react";
import "./AboutHeading.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutHeading = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh(); // Refresh AOS animations after rendering
  }, []);


  return (
    <>
      <div className="aboutHeading" data-aos="zoom-in">
        <h1>About </h1>
        <p>
          To be the premier online platform for doorstep kabadiwala scrap
          pickup, leading the recycling industry with a seamless, eco-friendly
          solution .online platform for doorstep kabadiwala scrap pickup,
          leading the recycling industry with a seamless, eco-friendly solution
          .{" "}
        </p>
      </div>
    </>
  );
};

export default AboutHeading;
