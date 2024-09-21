import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Howitworks.css'

const Howitworks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const outerDivStyle = {
    width: '30vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    margin: '5px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    gap:'15px',
    transition: 'transform 0.3s ease',
  };

  const h1heading = {
    color: '#087373',
    fontFamily: 'sans-serif',
    fontSize: '3rem',
    fontWeight: '600',
    textAlign: 'center',
    margin: '5vh'
  };

  const innerDivStyle = {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '10px',
    width: '100%',
    boxSizing: 'border-box',
    flexWrap: 'wrap',
  };

  const imageStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '8px',
    transition: 'transform 0.4s ease',
  };

  const hoverEffectBeforeAfter = {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '120px',
    backgroundColor: '#087373',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    opacity: '0',
    color: 'white',
    transform: 'translateY(10px)',
    zIndex: 0,
  };

  const hoverEffectContainer = {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
  };

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
      text.style.color = '#ffffff';
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
      <style>
        {`
        // @media(max-width:1000px){
        // .outerDivStyle{
        //   width:500px;
        // }
        }
          // @media (max-width: 768px) {
          //   h1 {
          //     font-size: 2rem !important;
          //   }
          //   div {
          //     width: 90vw !important;
          //   }
          //   img {
          //     height: 200px !important;
          //   }
          // }

          // @media (max-width: 480px) {
          //   h1 {
          //     font-size: 1.5rem !important;
          //   }
          //   div {
          //     width: 100vw !important;
          //   }
          //   img {
          //     height: 150px !important;
          //   }
          // }
        `}
      </style>

      <h1 className='h1heading'>How it Works</h1>
      <section className='sectionStyle'>
        {/* Outer Div 1 */}
        <div className='outerDivStyle' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='innerDivStyle' >
            <img
              src="https://kabadikart.com/assets/front/img/intro/05.jpg"
              alt="Image 1A"
              className='imageStyle'
            />
          </div>
          <div className='textcontainer' >
            <div className="hover-before" ></div>
            <h1 >Schedule Pickup Scrap</h1>
            <p>On website or Howitworks, fill a simple four-step form to schedule pickup date and time.</p>
          </div>
        </div>

         

        {/* Outer Div 2 */}

        <div className='outerDivStyle' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='innerDivStyle' >
            <img
              src="https://kabadikart.com/assets/front/img/intro/06.jpg"
              alt="Image 2A"
              className='imageStyle'
            />
          </div>
          <div className='textcontainer' >
            <div className="hover-before" ></div>
            <h1 >Pickup Guy at Doorstep</h1>
            <p>Our Pickup Guy will reach your doorstep on the scheduled date & time.</p>
          </div>
        </div>
       

        {/* Outer Div 3 */}

        <div className='outerDivStyle' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='innerDivStyle' >
            <img
              src="https://kabadikart.com/assets/front/img/intro/07.jpg"
              alt="Image 3A"
              className='imageStyle'
            />
          </div>
          <div className='textcontainer' >
            <div className="hover-before" ></div>
            <h1 >Get Paid for Scrap</h1>
            <p>Get paid according to the weight and pricing.</p>
          </div>
        </div>
       
      </section>
    </>
  );
};

export default Howitworks;