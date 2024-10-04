import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import emailjs from 'emailjs-com';
import axios from "axios";
import VerifyOtp from "./VerifyOtp";
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles


function OtpSend() {


    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        number: ''
    });

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check if data exists in localStorage and set it in formData
        const savedName = localStorage.getItem('name');
        const savedNumber = localStorage.getItem('number');
        if (savedName && savedNumber) {
            setFormData(prevFormData => ({
                ...prevFormData,
                name: savedName,
                number: savedNumber
            }));
        }
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!formData.role || !formData.number || !formData.name) {
            toast.error("Please fill all required fields");
            setLoading(false);
            return;
        }


        try {
            const login = await axios.post('http://localhost:5000/login/api', formData,
                {
                    headers: {
                        'Content-Type': 'application/json',  // Explicitly set the content type
                    }
                }
            );



            setResponse(login.data);
            emailjs.send(
                'service_liumz8m',
                'template_w78pwwd',
                formData,
                'XjdQROOuQCqkyCp6B'
            );
            toast.success('User created and OTP sent successfully');

            // Store the name and number in localStorage
            localStorage.setItem('name', formData.name);
            localStorage.setItem('number', formData.number);


            setIsVisible(true);



        } catch (error) {
            setError(error.response ? error.response.data : error.message); // Error handling
            toast.error('Failed to create user or send OTP');
        } finally {
            setLoading(false);
        }

        setFormData({
            name: "",
            role: "",
            number: ""
        });
    };

    return (
        <>
           
           
            <div className="loginform" style={{ position: 'fixed', zIndex: '99', boxShadow: '0 0 10px #333', borderRadius: '10px', minHeight: '20vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 id="loginh1" style={{ marginBottom: '6vh', color: '#368735', fontFamily: 'sans-serif', textAlign: 'center', width: '100%' }}>Login</h1>

                {!isVisible && (
                    <form onSubmit={handleSubmit}>

                        <div style={{ display: 'flex' }}>
                            <div
                                onClick={() => setFormData({ ...formData, role: 'retailer' })}
                                style={{
                                    height: '6vh',
                                    padding: '5px 8px',
                                    borderRadius: '12px',
                                    marginRight: '1vh',
                                    border: '2px solid #368735',
                                    marginBottom: '2vh',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: formData.role === 'retailer' ? '#368735' : '#fff',
                                    fontSize: '1.3rem',
                                    color: formData.role === 'retailer' ? 'white' : '#368735',
                                    cursor: 'pointer'
                                }}>
                                Retailer
                            </div>
                            <div
                                onClick={() => setFormData({ ...formData, role: 'corporate' })}
                                style={{
                                    height: '6vh',
                                    marginRight: '1vh',
                                    padding: '2px 8px',
                                    borderRadius: '12px',
                                    border: '2px solid #368735',
                                    marginBottom: '2vh',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: formData.role === 'corporate' ? '#368735' : '#fff',
                                    fontSize: '1.3rem',
                                    color: formData.role === 'corporate' ? 'white' : '#368735',
                                    cursor: 'pointer'
                                }}>
                                Corporate
                            </div>
                            <div
                                onClick={() => setFormData({ ...formData, role: 'deliveryAgent' })}
                                style={{
                                    height: '6vh',
                                    padding: '2px 8px',
                                    borderRadius: '12px',
                                    border: '2px solid #368735',
                                    marginBottom: '2vh',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: formData.role === 'deliveryAgent' ? '#368735' : '#fff',
                                    fontSize: '1.3rem',
                                    color: formData.role === 'deliveryAgent' ? 'white' : '#368735',
                                    cursor: 'pointer'
                                }}>
                                Delivery Agent
                            </div>
                        </div>

                        <input
                            className="logininput"
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ height: '6vh', width: '100%', color: '#555', background: 'transparent', marginTop: '2vh', borderRadius: '50px', border: '2px solid #555', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
                        />

                        <input
                            className="logininput"
                            type="number"
                            name="number"
                            minLength={10}
                            maxLength={12}
                            placeholder="Whatsapp No."
                            required
                            value={formData.number}
                            onChange={handleChange}
                            style={{ height: '6vh', width: '100%', color: '#555', background: 'transparent', borderRadius: '50px', border: '2px solid #555', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '4vh' }}
                        />

                        <button type="submit" disabled={loading} style={{ height: '6vh', cursor: 'pointer', width: '100%', borderRadius: '50px', border: 'none', padding: '0 2vh', marginBottom: '5vh', backgroundColor: '#368735', fontSize: '1.5rem', color: 'white' }}>
                            {loading ? 'Processing...' : 'Send Otp'}
                        </button>
                        {loading && <p>Loading...</p>}





                    </form>
                )}

                {isVisible && <VerifyOtp />}
            </div>
        </>
    );
}

export default OtpSend;
