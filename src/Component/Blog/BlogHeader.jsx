import React,{useEffect} from "react";
import './BlogHeader.css'


import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogHeader = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh(); // Refresh AOS animations after rendering
  }, []);


  return (
    <>
      <div className="BlogHeader" data-aos="zoom-in">
        <h1>Blog</h1>
      </div>
    </>
  );
};

export default BlogHeader;
