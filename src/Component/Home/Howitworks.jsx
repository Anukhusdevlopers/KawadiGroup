import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Howitworks.css';

const Howitworks = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
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
      text.style.color = '#fff';
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
      <h1 className='h1heading'>How it Works</h1>
      <section className='sectionStyle' >
        {/* Outer Div 1 */}
        <div className='outerDivStyle' 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
          data-aos="zoom-in" >
          <div className='innerDivStyle' >
            <img
              src="https://kabadikart.com/assets/front/img/intro/05.jpg"
              alt="Image 1A"
              className='imageStyle'
            />
          </div>
          <div className='textcontainer'>
            <div className="hover-before"></div>
            <h1 style={{fontSize:'2rem',marginBottom:'2vh'}}>Schedule Pickup Scrap</h1>
            <p style={{fontSize:'1.2rem'}}>On website or Howitworks, fill a simple four-step form to schedule pickup date and time.</p>
          </div>
        </div>

        {/* Outer Div 2 */}
        <div className='outerDivStyle' 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
          data-aos="zoom-in" 
          >
          <div className='innerDivStyle'>
            <img
              src="https://kabadikart.com/assets/front/img/intro/06.jpg"
              alt="Image 2A"
              className='imageStyle'
            />
          </div>
          <div className='textcontainer'>
            <div className="hover-before"></div>
            <h1 style={{fontSize:'2rem',marginBottom:'2vh'}}>Pickup Guy at Doorstep</h1>
            <p style={{fontSize:'1.2rem'}}>Our Pickup Guy will reach your doorstep on the scheduled date & time.</p>
          </div>
        </div>

        {/* Outer Div 3 */}
        <div className='outerDivStyle' 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
          data-aos="zoom-in"  // Add AOS here too 
          >
          <div className='innerDivStyle'>
            <img
              src="https://kabadikart.com/assets/front/img/intro/07.jpg"
              alt="Image 3A"
              className='imageStyle'
            />
          </div>
          <div className='textcontainer'>
            <div className="hover-before"></div>
            <h1 style={{fontSize:'2rem',marginBottom:'2vh'}}>Get Paid for Scrap</h1>
            <p style={{fontSize:'1.2rem'}}>Get paid according to the weight and pricing.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Howitworks;
