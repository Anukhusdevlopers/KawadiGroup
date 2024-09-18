import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Howitworks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS and set animation duration to 1000ms
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
    transition: 'transform 0.3s ease', // Smooth transition for hover effect
  };
  const h1heading = {
    color: '#087373',
    fontFamily: 'sans-serif',
    fontSize:' 3rem',
    fontWeight: '600',
    textAlign:'center',
    margin:'5vh'
  }
  const innerDivStyle = {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    width: "100%",
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

  const hoverEffectBeforeAfterh1 = {
      content:'""',
      color:'white'
  }

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

    innerDiv.style.transform = 'translateY(-10px)'; // Move the entire card up on hover
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

    innerDiv.style.transform = 'translateY(0)'; // Revert the card position on hover leave
  };

  return (
    <>
      <h1 style={h1heading}>How it Works</h1>
      <section style={sectionStyle}>
        {/* Outer Div 1 */}
        <div style={outerDivStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div style={innerDivStyle} >
            <img
              src="https://kabadikart.com/assets/front/img/intro/05.jpg"
              alt="Image 1A"
              style={imageStyle}
            />
          </div>
          <div style={Object.assign({}, innerDivStyle, hoverEffectContainer)}>
            <div className="hover-before" style={hoverEffectBeforeAfter}></div>
            <h1 >Schedule Pickup Scrap</h1>
            <p>On website or Howitworks, fill a simple four-step form to schedule pickup date and time.</p>
          </div>
        </div>

        {/* Outer Div 2 */}
        <div style={outerDivStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div style={innerDivStyle} >
            <img
              src="https://kabadikart.com/assets/front/img/intro/06.jpg"
              alt="Image 2A"
              style={imageStyle}
            />
          </div>
          <div style={Object.assign({}, innerDivStyle, hoverEffectContainer)}>
            <div className="hover-before" style={hoverEffectBeforeAfter}></div>
            <h1>Pickup Guy at Doorstep</h1>
            <p>Our Pickup Guy will reach your doorstep on the scheduled date & time.</p>
          </div>
        </div>

        {/* Outer Div 3 */}
        <div style={outerDivStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div style={innerDivStyle} >
            <img
              src="https://kabadikart.com/assets/front/img/intro/07.jpg"
              alt="Image 3A"
              style={imageStyle}
            />
          </div>
          <div style={Object.assign({}, innerDivStyle, hoverEffectContainer)}>
            <div className="hover-before" style={hoverEffectBeforeAfter}></div>
            <h1>Get Paid for Scrap</h1>
            <p>Get paid according to the weight and pricing.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Howitworks;
