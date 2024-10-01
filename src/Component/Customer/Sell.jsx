
import React, { useState, useEffect } from 'react'
import './Sell.css'
import CurrentLocationMapWithAddress from './Map';

const Sell = () => {

    const [pickupLocation, setPickupLocation] = useState('');
    const [pickupWeight, setPickupWeight] = useState('none');
    const [pickupTime, setPickupTime] = useState('none');
    const [preview, setPreview] = useState('none');
    const [confirm, setConfirm] = useState('none');



    const [user, setUser] = useState({ location: '', items: '', weight: '', pickupDate: '' });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    useEffect(() => {
        if (user.location) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);




    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

  

    return (
        <>
            <div className="SellScrap">
                <h1>What would you like to sell ?</h1>
                <div className='mapform_cnct'>


                    <div className="form" style={{ display: pickupLocation }}>
                        <label htmlFor="">Pickup Location</label>
                        <input
                            type="text"
                            value={user.location}
                            onChange={(e) => setUser({ ...user, location: e.target.value })}
                            placeholder='Pickup Location'
                        />

                        <label htmlFor="">Scrap Items</label>
                        <input
                            type="text"
                            value={user.items}
                            onChange={(e) => setUser({ ...user, items: e.target.value })}
                            placeholder='Scrap Items - Paper , Plastic...'
                        />
                        <button onClick={() => { setPickupLocation('none'); setPickupWeight(''); }}>Raise Request</button>
                    </div>

                    <div className="form" style={{ display: pickupWeight }}>
                        <label htmlFor="">Approx Weight</label>
                        <input
                            type="text"
                            value={user.weight}
                            onChange={(e) => setUser({ ...user, weight: e.target.value })}
                            placeholder='Weight - 5kg, 10kg, 15kg ...   '
                        />

                        <button onClick={() => { setPickupWeight('none'); setPickupTime('') }}>Continue</button>
                    </div>

                    <div className="form" style={{ display: pickupTime }}>
                        <label htmlFor="">Chose Pickup Date</label>
                        <input
                            type="date"
                            value={user.pickupDate}
                            onChange={(e) => setUser({ ...user, pickupDate: e.target.value })}
                        />

                        <label htmlFor="">Chose Pickup Time</label>
                        <select>
                            <option value="">Pickup Time</option>
                            <option value="">11 am</option>
                            <option value="">12 pm</option>
                            <option value="">1 pm</option>
                            <option value="">2 pm</option>
                            <option value="">3 pm</option>
                            <option value="">4 pm</option>
                        </select>
                        <button onClick={() => { setPreview(''); setPickupTime('none'); }}>Continue</button>
                    </div>

                    <div className="form" style={{ display: preview  }}>
                    <label htmlFor="">Pickup Location</label>
                    <input
                            type="text"
                            value={user.location}
                            placeholder='Pickup Location'
                            disabled
                        />

                        <label htmlFor="">Scrap Items</label>
                        <input
                            type="text"
                            value={user.items}
                            placeholder='Scrap Items - Paper , Plastic...'
                            disabled
                        />
                         <input
                            type="text"
                            value={user.weight}
                            disabled
                            placeholder='Weight - 5kg, 10kg, 15kg ...   '
                        />
                         <input
                            type="date"
                            value={user.pickupDate}
                            disabled
                        />


                        {/* <h1 style={{color:'#333',fontSize:'1.2rem',marginTop:'10vh'}}>Delivery Boy pickup your Scrap at PickUp Date</h1> */}
                        <button onClick={() => { setPreview('none'),setConfirm(''); localStorage.clear();  }}>Confirm Order</button>
                    </div>

                    <div className='form' style={{display:confirm,height:'40vh',width:'40vh',textAlign:'center',lineHeight:'2',fontSize:'2rem',marginTop:'15vh'}}>
                        Order Placed !! <br /> <p style={{fontSize:'1rem'}}> Your Order Id : 12340 </p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Sell