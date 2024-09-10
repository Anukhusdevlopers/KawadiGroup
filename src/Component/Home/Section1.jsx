import React, { useState } from 'react'
import './Section1.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Section1 = () => {

  const [pickup, setPickup] = useState('none');
  const [thank, setThank] = useState('none')

  function pickupopen() {
    setPickup('initial');
    setThank('none');
  }
  function pickupclose() {
    setPickup('none');
    setThank('Thank')
  }
  function thankopen() {
    setPickup('none');
    setThank('initial');
  }

  function thankclose() {
    setPickup('none');
    setThank('none');
  }

  return (
    <>
      <div className="pickupform" style={{ display: pickup }}>
        <h2>Pickup Request</h2>
        <div id='input' className="input">
          <input id='name' type="text" placeholder='Your Name' style={{ minWidth: '30vw' }} />
          <input id='name' type="number" placeholder='Mobile No. ' style={{ minWidth: '30vw' }} />
        </div>
        <div id='input'  className="input">
          <input type="text" placeholder='Address ' style={{ minWidth: '41vw' }} />
          <input type="number" placeholder='Pin Code   ' style={{ minWidth: '15vw' }} />
        </div>
        <div id='input'  className="input">
          <input type="email" placeholder='Email ' style={{ minWidth: '25vw' }} />
          <input type="date" placeholder='Pickup Date ' />
        </div>
        <div className="input">
          <input type="checkbox" name="" id="" style={{ marginRight:'1vh'}}/> <label htmlFor="">Sell </label> <input type="checkbox" name="" id="" style={{ marginRight:'1vh'}}/> <label htmlFor="">Donate </label> 
        </div>
        <div className="input">
          <select name="" id="">
            <option value="">Type of Scrap</option>
            <option value="">Newspaper</option>
            <option value="">Cardboard</option>
            <option value="">Books</option>
            <option value="">Plastic</option>
            <option value="">Iron</option>
            <option value="">Copper</option>
            <option value="">Aluminium</option>
          </select>
        </div>
        <div className="input">
        <input onClick={thankopen} type="submit" value="Submit " style={{ backgroundColor: 'green', color: 'white' }} />
        <input onClick={pickupclose} type="submit" value="Close " style={{ backgroundColor: 'green', color: 'white' }} /> 
        </div>     
      </div>

      <div className="pickupform" style={{ display: thank }}>
        <h2 style={{ marginTop: '20vh', marginBottom: '2vh' ,fontSize:'3rem'}}>Thank You !!</h2>
        <h4 onClick={thankclose} style={{ textAlign: 'center' ,fontSize:'1.1rem'}}>Back to Homepage</h4>
      </div>

      <div className="section1"  >
        <h3
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"

        >Online Scrap Pickup service</h3>
        <h1
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"

        >Online Kawadiwala</h1>
        <h4
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >Online Kawadiwala, we provide our service to people service at their place, we pickup scrap from your  home and office or your any workplace at best price which make <br /> our customer happy </h4>
        <button
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"

          onClick={pickupopen}
        >Book Now</button>
      </div>

    </>
  )
}


export default Section1