import React,{useEffect} from "react";
import './ContactHeader.css'


import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactHeader = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh(); // Refresh AOS animations after rendering
  }, []);


  return (
    <>
      <div className="ContactHeader" data-aos="zoom-in">
        <h1>Contact Us</h1>
      </div>
    </>
  );
};

export default ContactHeader;
