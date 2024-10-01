import React,{useEffect} from "react";
import './CustomerHeader.css'


import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomerHeader = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh(); // Refresh AOS animations after rendering
  }, []);


  return (
    <>
      <div className="customerHeader" data-aos="zoom-in">
        {/* <h1>Customer</h1> */}
        <h1>Hi, Khushboo</h1>
      </div>
    </>
  );
};

export default CustomerHeader;
