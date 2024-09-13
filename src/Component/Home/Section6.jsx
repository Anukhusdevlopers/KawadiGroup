import React, { useEffect, useRef } from 'react';
import calender from '../../assets/calender.png';
import sect6 from '../../assets/sect6.jpg';
import righticon from '../../assets/righticon.png';
import './Section6.css';

function Section6() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the card is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="section6">
      <h1>How it Works</h1>
      <div className="sect6">
        <div className="sect1_parts" ref={(el) => sectionRefs.current[0] = el}>
          <img src={calender} alt="Schedule Pickup" />
          <h3>Schedule pickup</h3>
          <p>
            The ScrapKart Schedule Pickup Scrap is a highly efficient and
            reliable scrap removal service that prioritizes the needs of
            clients.
          </p>
        </div>
        <div className="sect1_parts" ref={(el) => sectionRefs.current[1] = el}>
          <img src={sect6} alt="Pickup Guy" />
          <h3>Pickup Guy At Doorstep</h3>
          <p>
            Our professional will reach at your doorstep to collect as per
            scheduled pickup.
          </p>
        </div>
        <div className="sect1_parts" ref={(el) => sectionRefs.current[2] = el}>
          <img src={righticon} alt="Get Paid For Scrap" />
          <h3>Get Paid For Scrap</h3>
          <p>
            “Get Paid for Scrap,” in the same time. We understand the importance
            of responsible waste management and offer a convenient and
            profitable service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section6;
