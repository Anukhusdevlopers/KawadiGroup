import React, { useState,useEffect } from 'react'
import './SellForm.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

const SellForm = () => {

    const [mobile,setMobile] = useState('');
    const [address,setAddress] = useState('none');
    const [schedule,setSchedule] = useState('none');
    const [sell,setSell] = useState('none');
    const [thank,setThank] = useState('none');
    
    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh(); // Refresh AOS animations after rendering
      }, []);
    


    return (
        <>
            <div className='Sellformpage'>
                <div className='formcnct' data-aos="zoom-in">
                    <div className="formsection">
                        <div className="icntray">
                            <div className="cir">
                                <i class="ri-smartphone-line"></i>
                            </div>
                            <div className="cir">
                                <i class="ri-map-pin-2-line"></i>
                            </div>
                            <div className="cir">
                                <i class="ri-calendar-2-line"></i>
                            </div>
                            <div className="cir">
                                <i class="ri-send-plane-line"></i>
                            </div>
                        </div>

                            {/* Mobile Form */}

                        <div className="form" style={{display: mobile}} >
                            <input type="number" placeholder='Enter Mobile No' />
                            <input type="text" placeholder='Enter Name' />
                            <button onClick={()=>{setAddress(''); setMobile('none')}} >Proceed</button>
                        </div>

                        {/* Address Form */}

                        <div className="form" style={{display:address}}>
                            <input type="text" placeholder='House No and Area'/>
                            <input type="text" placeholder='Landmark' />
                            <input type="text" placeholder='City' />
                            <input type="text" placeholder='State' />
                            <input type="number" placeholder='Pin Code' />
                            <input type="text" style={{visibility:'hidden'}} />
                            <button onClick={()=>{setAddress('none'); setMobile('');}} >Back</button>
                            <button onClick={()=>{setSchedule(''); setAddress('none'); }} >Proceed</button>
                        </div>

                        {/* Schedule Form */}

                        <div className="form" style={{display:schedule}}>
                            <input type="text" placeholder='Pickup Time' />
                            <input type="email" placeholder='Enter Email'/>
                            <button onClick={()=>{setSchedule('none'); setAddress(''); }}>Back</button>
                            <button onClick={()=>{setSell(''); setSchedule('none'); }}>Proceed</button>
                        </div>

                           {/* Sell Form */}

                        <div className="form" style={{display:sell}}>
                            <input type="text" placeholder='Type of Scrap' />
                            <input type="radio" style={{ height:'2vh',width:'2vh'}} /> <p style={{marginRight:'2vh'}}>Sell</p>
                            <input type="radio" style={{ height:'2vh',width:'2vh'}} /> <p style={{marginRight:'2vh'}}>Donate</p>
                            <button onClick={()=>{setSell('none'); setSchedule(''); }}>Back</button>
                            <button onClick={()=> { setSell('none'); setThank('');}}>Proceed</button>
                        </div>

                        <div className="form" style={{display:thank}}>
                           <h2 style={{fontSize:'2.5rem'}}>Thank You !! </h2> 
                            {/* <br />
                           <p>Visit Again</p> */}
                        </div>
                    </div>
                    <div className="rgt_text">
                        <h2>Sell or Donate your Scrap</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellForm