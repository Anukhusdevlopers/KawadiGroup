import React from 'react'
import './Section2.css'
import about from "../../assets/about.jpg"



// AOS.init();

const Section2 = () => {
    return (
        <>
        <h1 className='abouth1'>About Us</h1>
        <div className="page2">
            <div className="p2Left">
                <img src={about} alt="" />
            </div>
            <div className="p2Right">
                <p>  - We can help you make the whole operation as cost effective as possible, whilst reducing the time you need to spend on your overall waste disposal.</p>
                <br />  
                <p>  - We buy every type of home, office or Industrial scrap such as Ferrous and non ferrous metals Stainless Steel, Aluminum, General Waste, Paper & Cardboard, Plastics & Wood, Electrical Waste, Building/ Construction Waste,  cable wiring, copper scrap, other crap etc.</p>
            </div>
        </div>

    </>

    )
}

export default Section2