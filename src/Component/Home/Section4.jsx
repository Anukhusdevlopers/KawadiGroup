import React from 'react'
import './Section4.css'
import rupee from '../../assets/indian-rupee.webp'
import haslefree from '../../assets/haslefree.webp'
import verifieduser from '../../assets/verified.webp'
import d2d from '../../assets/dtd.jpg'

const Section4 = () => {
    return (
        <>
            <div className="section4">
                <h1>Why Online Kawadiwala</h1>
                <div className="section4card">
                    <div className="cards">
                        <img src={d2d} alt="" />
                        <h4>Door to Door <br />  Service</h4>
                    </div>
                    <div className="cards">
                        <img src={rupee} alt="" />
                        <h4>Best Rates</h4>
                    </div>
                    <div className="cards">
                        <img src={verifieduser} alt="" />
                        <h4>Verified Scrap Pickup </h4>
                    </div>
                    <div className="cards">
                        <img src={haslefree} alt="" />
                        <h4>Hasle Free Pickup</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4