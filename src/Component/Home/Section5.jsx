import React, { useState } from 'react';
import './Section5.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Section5 = () => {
  // Separate state for each count to control the start of each animation
  const [startCount, setStartCount] = useState({
    happyCustomers: false,
    customerSatisfaction: false,
    totalScrap: false,
    yearsOfBusiness: false,
  });

  // Handler to update the state when an element is in view
  const handleViewChange = (key) => {
    setStartCount((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  // Hook configurations for each section
  const { ref: happyRef, inView: happyInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
    onChange: (inView) => {
      if (inView) handleViewChange('happyCustomers');
    },
  });

  const { ref: satisfactionRef, inView: satisfactionInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
    onChange: (inView) => {
      if (inView) handleViewChange('customerSatisfaction');
    },
  });

  const { ref: scrapRef, inView: scrapInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
    onChange: (inView) => {
      if (inView) handleViewChange('totalScrap');
    },
  });

  const { ref: businessRef, inView: businessInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
    onChange: (inView) => {
      if (inView) handleViewChange('yearsOfBusiness');
    },
  });

  return (
    <div className="section5">
      {/* Happy Customers */}
      <div className="pt" ref={happyRef}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qGbABI8mvazURaBg3fQEtlMUZsb5AcypDXB9ngDe97J0akfBtSqGzloKxctOxUP919U&usqp=CAU" alt="" />
        <p style={{ fontSize: '1.2rem', marginTop: '1vh' }}>Happy Customer</p>
        <h1>
          {happyInView ? (
            <CountUp start={0} end={5000} duration={2} suffix="+" />
          ) : (
            '5000+'
          )}
        </h1>
       </div>

      {/* Customer Satisfaction */}
      <div className="pt" ref={satisfactionRef}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0aSaRanCOKrJCohZUXs9q330cHNmve7wafQ&s" alt="" />
        <p style={{ fontSize: '1.2rem', marginTop: '1vh' }}>
          Customer Satisfaction
        </p>
        <h1>
          {satisfactionInView ? (
            <CountUp start={0} end={100} duration={2} suffix="%" />
          ) : (
            '100%'
          )}
        </h1>
       
      </div>

      {/* Total Scrap Recycled */}
      <div className="pt" ref={scrapRef}>
        <img src="https://cdn-icons-png.flaticon.com/512/4143/4143218.png" alt="" />
        <p style={{ fontSize: '1.2rem', marginTop: '1vh' }}>
          Total Scrap Recycled
        </p>
        <h1>
          {scrapInView ? (
            <CountUp start={0} end={50000} duration={2} suffix=" kg" />
          ) : (
            '50000 kg'
          )}
        </h1>
       
      </div>

      {/* Years of Business */}
      <div className="pt" ref={businessRef}>
        <img src="https://pnghq.com/wp-content/uploads/sales-icon-png-free-png-images-14512.png" alt="" />
        <p style={{ marginTop: '1vh' }}>Years of Business</p>
        <h1>
          {businessInView ? (
            <CountUp start={0} end={8} duration={2} suffix="+" />
          ) : (
            '8+'
          )}
        </h1>
 
      </div>
    </div>
  );
};

export default Section5;
