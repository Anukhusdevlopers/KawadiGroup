import React, { useState } from 'react'
import './Sec3.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const Sec3 = () => {

  const [mobilehide, setMobilehide] = useState("initial");
  const [location, setLocationhide] = useState("none");
  const [itemhide, setItemhide] = useState("none");
  const [schedulehide, setSchedulehide] = useState("none");
  const [sellhide, setSellhide] = useState("none");
  const [thankhide, setThankhide] = useState("none");

  function mobile() {
    setMobilehide("initial");
    setLocationhide("none");
    setItemhide("none");
    setSchedulehide("none");
    setSellhide("none");
    setThankhide("none")
  }
  function addressshow() {
    setMobilehide("none");
    setLocationhide("initial");
    setItemhide("none");
    setSchedulehide("none");
    setSellhide("none");
    setThankhide("none")
  }

  function itemshow() {
    setMobilehide("none");
    setLocationhide("none");
    setItemhide("initial");
    setSchedulehide("none");
    setSellhide("none");
    setThankhide("none")
  }

  function scheduleshow() {
    setMobilehide("none");
    setLocationhide("none");
   setItemhide("none");
    setSchedulehide("initial");
    setSellhide("none");
    setThankhide("none")
  }

  function sellshow() {
    setMobilehide("none");
    setLocationhide("none");
    setItemhide("none");
    setSchedulehide("none");
    setSellhide("initial");
    setThankhide("none")
  }

  function thankshow() {
    setMobilehide("none");
    setLocationhide("none");
    setItemhide("none");
    setSchedulehide("none");
    setSellhide("none");
    setThankhide("initial")
  }

  return (
    <>
      <div className="sect3">
        <div className="formpart">
          <div className="iconbox" >
            <div className="icon">
              <i class="ri-smartphone-line"></i>
            <p> Mobile</p>
            </div>
            <div className="icon" >
              <i class="ri-map-pin-2-line"></i>
              <p> Address</p>
            </div>
            <div className="icon">
              <i class="ri-article-line"></i>
              <p> Item</p>
            </div>
            <div className="icon">
              <i class="ri-calendar-2-line"></i>
              <p> Schedule</p>
            </div>
            <div className="icon">
              <i class="ri-send-plane-line"></i>
              <p> Sell</p>
            </div>
          </div>



          <div className="formbox" style={{ display: mobilehide }}  >
            <input type="text" placeholder='Your Name' style={{background:'transparent' ,borderBottom:'2px  solid black'}}/>
            <input type="text" placeholder='Mobile No.' style={{background:'transparent' ,borderBottom:'2px  solid black'}} />
            <input type="submit" value="Proceed " onClick={addressshow} style={{marginTop:"20px", backgroundColor: '#053c05', color: 'white' }} />
          </div>



          <div className="formbox" style={{ display: location }} >
            <input type="text" placeholder='Address ' style={{background:'transparent' ,borderBottom:'2px  solid black'}} />
            <input type="text" placeholder='Landmark ' style={{background:'transparent' ,borderBottom:'2px  solid black'}} />
            <input type="text" placeholder='City ' style={{background:'transparent' ,borderBottom:'2px  solid black'}} />
            <input type="number" placeholder='Pincode ' style={{background:'transparent' ,borderBottom:'2px  solid black'}} />
            <input onClick={itemshow} type="submit" value="Proceed " style={{ backgroundColor: '#053c05', color: 'white' }} />
            <input onClick={mobile} type="submit" value="Back " style={{ backgroundColor: '#053c05', color: 'white' }} />
          </div>

          <div className="formbox" style={{ display: itemhide }} >
            <input type="text" placeholder='Item Name ' style={{background:'transparent' ,borderBottom:'2px  solid black'}}/>
            <select name="" id="" style={{background:'transparent' ,borderBottom:'2px  solid black'}}>
              <option value="">Select Estimated Weight :</option>
              <option value="">Under 5 kg </option>
              <option value="">Under 20 kg </option>
              <option value="">Under 20 kg </option>
              <option value="">Under 50 kg </option>
              <option value="">Under 100 kg </option>
            </select>
            <input onClick={scheduleshow} type="submit" value="Proceed " style={{ backgroundColor: '#053c05', color: 'white' }} />
            <input onClick={addressshow} type="submit" value="Back " style={{ backgroundColor: '#053c05', color: 'white' }} />
          </div>

          <div className="formbox" style={{ display: schedulehide }} >
            <input type="date" placeholder='Item Name ' style={{background:'transparent' ,borderBottom:'2px  solid black'}} />
            <input onClick={sellshow} type="submit" value="Proceed " style={{ backgroundColor: '#053c05', color: 'white' }} />
            <input onClick={itemshow} type="submit" value="Back " style={{ backgroundColor: '#053c05', color: 'white' }} />
          </div>

          <div className="formbox" style={{ display: sellhide }} >
            <input onClick={thankshow} type="submit" value="Sell " style={{ backgroundColor: '#053c05', color: 'white' }} />
            <input onClick={itemshow} type="submit" value="Back " style={{ backgroundColor: '#053c05', color: 'white' }} />
          </div>

         <div className="formbox" style={{ display: thankhide }} >
         <h1>Thank You</h1>
         <h4 onClick={mobile} style={{textAlign:'center',color:'#555'}}>Go Back</h4>
          </div>
          
        </div>
        <div className="imgbox">
          <h1>Scrapes</h1>
          <div className=''>

          <img style={{display:mobilehide}} src="https://sc04.alicdn.com/kf/A87da347cd69c452c82d55f5dead4f8ecV.jpeg" alt="" />
          <img style={{display:location}} src="https://glescrap.com/wp-content/uploads/2022/08/Best-Scrap-Metal-Tools-From-GLE-Scrap.jpg" alt="" />
          <img style={{display:'initial'}} src="https://5.imimg.com/data5/GS/SH/MY-73496344/reusable-corrugated-boxes-500x500.jpg" alt="" />
          </div>
        
        </div>
      </div>
    </>
  )
}

export default Sec3