import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Request.css';

const Request = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [authToken,setAuthToken] = useState();

    useEffect(() => {
      
        // Retrieve the token from localStorage and set it in state
        const authToken = localStorage.getItem('token');
       setAuthToken(authToken);
    }, []);

    useEffect(() => {   
        // Check if the token exists in localStorage
        if (!authToken) {
            setError('Authorization token not found. Please login.');
            return;
        }
       

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/request-all`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                console.log(response.data);  // For debugging
                // Check if the response has the expected structure
                if (response.data && Array.isArray(response.data.data)) {
                    setData(response.data.data);
                } else {
                    throw new Error('Unexpected data structure from API');
                }
            } catch (error) {
                // Handle error
                setError(error.response ? error.response.data.message : error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();  // Fetch data when the component mounts
    }, [authToken]);

    if (!authToken) {
        return <div>Please login to view requests.</div>;
    }

    return (
        <div className='requestpage' style={{ minHeight: '20vh', width: '100%' }}>
            {loading && <p>Loading data...</p>}
            {error && <p>Error: {error}</p>}
            <h1>All Pickup Requests</h1>

            <div className="request_cnct">
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((request, index) => (
                        <div className="requestcard" key={index}>
                            {request.image ? (
                                <img 
                                    src={`https://anukhush-2.onrender.com/${request.image}`} 
                                    alt="User" 
                                    style={{ width: '100px', height: '100px' }} 
                                />
                            ) : (
                                <div>No Image Available</div>
                            )}
                            <p><strong>Scrap Items:</strong></p>   
                            <ul>
                                {Array.isArray(request.scrapItems) && request.scrapItems.length > 0 ? (
                                    request.scrapItems.map((item, idx) => (
                                        <li key={idx}>
                                            <strong>Item:</strong> {item.name} <br />
                                            <strong>Weight:</strong> {item.weight}kg  <br /> 
                                            <strong>Price:</strong> ${item.price}
                                        </li>
                                    ))
                                ) : (
                                    <li>No scrap items available</li>
                                )}
                            </ul>
                            <p><strong>Customer Name :</strong> {request.name || 'N/A'}</p>
                            <p><strong>Pickup Location :</strong> {request.location || 'N/A'}</p>
                            <p><strong>Pickup Date :</strong> {request.pickUpDate ? new Date(request.pickUpDate).toDateString() : 'N/A'}</p>
                            <p><strong>Pickup Time :</strong> {request.pickUpTime || 'N/A'}</p>
                            <p><strong>Request Id :</strong> {request.requestId || 'N/A'}</p>
                        </div>
                    ))
                ) : (
                    <p>No requests available.</p>
                )}
            </div>
        </div>
    );
};

export default Request;
