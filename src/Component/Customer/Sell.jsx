import React, { useState, useEffect } from 'react'
import './Sell.css'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css';

const Sell = () => {

    const [showScrapItemForm, setShowScrapItemForm] = useState('');
    const [showPickupLocation, setShowPickupLocation] = useState('none');
    const [showPickupSchedule, setShowPickupSchedule] = useState('none');
    const [showImageForm, setShowImageForm] = useState('none');
    const [confirm, setConfirm] = useState('none');

    // Get values from localStorage on initialization
    const storedname = localStorage.getItem('name');
    const storedLatitude = localStorage.getItem('latitude');
    const storedLongitude = localStorage.getItem('longitude');
    const storedaddress = localStorage.getItem('address');
    console.log(storedaddress);

    // Directly set from localStorage to ensure no delay
    const [scrapItems, setScrapItems] = useState([{ name: '', price: '', weight: '' }]);
    const [name, setName] = useState(storedname);
    const [pickUpDate, setPickUpDate] = useState('');
    const [pickUpTime, setPickUpTime] = useState('');
    const [location, setLocation] = useState(storedaddress || '');  // Setting directly from local storage
    const [latitude, setLatitude] = useState(storedLatitude || '');
    const [longitude, setLongitude] = useState(storedLongitude || '');
    const [authToken, setAuthToken] = useState();
    const [image, setImage] = useState(null); // State to hold the uploaded image

    const [loading, setLoading] = useState(false); // Loader state

    // Set token on initial load for testing purposes
    useEffect(() => {
        // Retrieve the token from localStorage and set it in state
        const storedToken = localStorage.getItem('token');
        setAuthToken(storedToken);  
    }, []);

    const handleScrapItemChange = (index, event) => {
        const values = [...scrapItems];
        values[index][event.target.name] = event.target.value;
        setScrapItems(values);
    };

    const handleAddScrapItem = () => {
        setScrapItems([...scrapItems, { name: '', price: '', weight: '' }]);
    };

    const handleRemoveScrapItem = (index) => {
        const values = [...scrapItems];
        values.splice(index, 1);
        setScrapItems(values);
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]); // Get the uploaded file
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const payload = {
            scrapItems,
            name,
            pickUpDate,
            pickUpTime,
            location,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
        };

        const formData = new FormData(); // Create a FormData object to send image and payload
        formData.append('image', image); // Append the image
        formData.append('scrapItems', JSON.stringify(scrapItems)); // Append the scrapItems array as a JSON string
        formData.append('name', name);
        formData.append('pickUpDate', pickUpDate);
        formData.append('pickUpTime', pickUpTime);  
        formData.append('location', location);
        formData.append('latitude', parseFloat(latitude));
        formData.append('longitude', parseFloat(longitude));

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/createscraplist`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
                    Authorization: `Bearer ${authToken}`, // Use the manual token stored in state
                },
            });

            console.log('Response:', response.data);
            toast.success('Request created successfully. Request ID: ' + response.data.data.requestId);

            setConfirm('');
            setShowImageForm('none');

        } catch (error) {
            console.error('Error:', error);
            toast.error('Error creating request: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
       
            <div className="SellScrap">
                <h1>What would you like to sell ?</h1>
                <div className='mapform_cnct'>

                    {/* scrap item details */}

                    <div className="form" style={{ display: showScrapItemForm }}>
                        {scrapItems.map((item, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Item Name"
                                    value={item.name}
                                    onChange={(event) => handleScrapItemChange(index, event)}
                                    required
                                />
                                <input
                                    type="text"
                                    name="price"
                                    placeholder="Price"
                                    value={item.price}
                                    onChange={(event) => handleScrapItemChange(index, event)}
                                    required
                                />
                                <input
                                    type="number"
                                    name="weight"
                                    placeholder="Weight"
                                    value={item.weight}
                                    onChange={(event) => handleScrapItemChange(index, event)}
                                    required
                                />
                                <button type="button" onClick={() => handleRemoveScrapItem(index)} style={{ marginBottom: '2vh' }}>
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={handleAddScrapItem} style={{ marginRight: '2vh' }}>
                            Add Scrap Item
                        </button>
                        <button onClick={() => { setShowScrapItemForm('none'); setShowPickupLocation(''); }}>Continue</button>
                    </div>

                    {/* pickup Location input */}

                    <div className="form" style={{ display: showPickupLocation }}>
                        <label htmlFor="">Pickup Location</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder='Pickup Location'
                        />

                        <button onClick={() => { setShowPickupLocation('none'); setShowPickupSchedule(''); }}>Continue</button>
                    </div>

                    {/* pickup time date */}

                    <div className="form" style={{ display: showPickupSchedule }}>
                        <label htmlFor="">Choose Pickup Date</label>
                        <input
                            type="date"
                            value={pickUpDate}
                            onChange={(e) => setPickUpDate(e.target.value)}
                        />

                        <label htmlFor="">Choose Pickup Time</label>
                        <input
                            type="text"
                            value={pickUpTime}
                            placeholder='Enter Pickup Time'
                            onChange={(e) => setPickUpTime(e.target.value)}
                        />

                        <button onClick={() => { setShowPickupSchedule('none'); setShowImageForm(''); }}>Continue</button>
                    </div>

                    {/* scrap image upload */}

                    <div className="form" style={{ display: showImageForm }}>
                        <input
                            type="file"
                            accept="image/*" // Accept only image files
                            onChange={handleImageChange}
                        />

                        <button type="submit" onClick={handleSubmit} disabled={loading}>
                            {loading ? 'Processing...' : 'Request Send'}
                        </button>
                        {loading && <p>Loading...</p>}
                    </div>

                    {/* Order confirmation */}
                    <div className="form" style={{ display: confirm, height: '40vh', width: '40vh', textAlign: 'center', lineHeight: '2', fontSize: '2rem', marginTop: '15vh' }}>
                        Order Placed!! <br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sell;
