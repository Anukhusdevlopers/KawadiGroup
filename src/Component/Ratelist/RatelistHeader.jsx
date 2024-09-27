import React,{useEffect} from "react";
import './RatelistHeader.css'


import AOS from 'aos';
import 'aos/dist/aos.css';

const RatelistHeader = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh(); // Refresh AOS animations after rendering
  }, []);


  return (
    <>
      <div className="RatelistHeader" data-aos="zoom-in">
        <h1>Scrap Rates</h1>
      </div>
    </>
  );
};

export default RatelistHeader;
