import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Request.css';

const Request = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const authToken = localStorage.getItem('authToken');
 

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:5000/request-all', {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                console.log(response.data);  // Check the structure in console
                setData(response.data.data);  // Set the 'data' array from the response
            } catch (error) {
                setError(error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();  // Fetch data when the component mounts
    }, []);

    return (
        <div className='requestpage' style={{ minHeight: '20vh', width: '100%' }}>
            {loading && <p>Loading data...</p>}
            {error && <p>Error: {error}</p>}
            <h1>All Pickup Requests</h1>

            <div className="request_cnct">
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((request, index) => {
                        return (
                        <div className="requestcard" key={index}>
                            <img 
                                src={`http://localhost:5000/${request.image}`} 
                                alt="User" 
                                style={{ width: '100px', height: '100px' }} 
                            />
                             <p><strong>Scrap Items:</strong></p>   
                            <ul>
                                {request.scrapItems.map((item, idx) => (
                                    <li key={idx}>
                                        <strong>Item:</strong> {item.name} <br />
                                        <strong>Weight:</strong> {item.weight}kg  <br /> 
                                        <strong>Price:</strong> ${item.price}
                                    </li>
                                ))}
                            </ul>
                            <p><strong>Customer Name :</strong> {request.name}</p>
                            <p><strong>Pickup Location :</strong> {request.location}</p>
                            <p><strong>Pickup Date :</strong> {new Date(request.pickUpDate).toDateString()}</p>
                            <p><strong>Pickup Time :</strong> {request.pickUpTime}</p>
                            <p><strong>Request Id :</strong> {request.requestId}</p>
                           
                        </div>
                    )})
                ) : (
                    <p>No requests available.</p>
                )}
            </div>
        </div>
    );
};

export default Request;
