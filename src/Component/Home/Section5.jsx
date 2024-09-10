import React, { useState } from 'react'
import './Section5.css'

import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';

const Section5 = () => {

    const [counton, setCounton] = useState(0);


    return (
        <>
            <div className="section5">
                <div className="pt">
                    <ScrollTrigger onEnter={() => setCounton(true)} onExit={() => { setCounton(true) }} >
                        <h1>
                            {counton &&
                               <CountUp start={0} end={100} duration={2} delay={0}/>
                            }
                        </h1>
                    </ScrollTrigger>

                    {/* <h1 style={{ fontSize: '3rem' }}>5000+</h1> */}
                    <p style={{ fontSize: '1.2rem', marginTop: '1vh' }}>Happy Customer</p>
                </div>
                <div className="pt">
                    <h1 style={{ fontSize: '3rem' }}>100%</h1>
                    <p style={{ fontSize: '1.2rem', marginTop: '1vh' }}>Customer Satisfaction</p>
                </div>
                <div className="pt">
                    <h1 style={{ width: '70vw', textAlign: 'center' }}>50000 kg </h1>
                    <p style={{ fontSize: '1.2rem', width: '70vw', textAlign: 'center', marginTop: '1vh' }}>Total Scrap Recycled</p>
                </div>
                <div className="pt">
                    <h1 style={{ fontSize: '3rem' }}>8+</h1>
                    <p style={{ marginTop: '1vh' }}>Years of business</p>
                </div>
            </div>
        </>
    )
}

export default Section5