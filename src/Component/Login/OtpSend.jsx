import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from "axios";
import emailjs from 'emailjs-com';
import VerifyOtp from "./VerifyOtp";

import AOS from 'aos';
import 'aos/dist/aos.css';

function OtpSend(val) {

    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh(); // Refresh AOS animations after rendering
    }, []);

    const [isVisible, setIsVisible] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        otp: '',
        role: '', // This will be set to 'Customer' or 'Corporate'
    });

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false); // Loader state
    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        if (!formData.role) {
            alert("Please select a role");
            setLoading(false);
            return;
        }

        try {
            const [login, otp] = await Promise.all([
                // axios.post('http://localhost:5000/kawadiwala/login', formData),
                // axios.post('http://localhost:5000/kawadiwala/send-otp', formData) // Fix typo 'formData'
            ]);
            setResponse([login.data, otp.data]);
            emailjs.send(
                'service_bquo33v',
                'template_9hubbr7',
                formData,
                'cEcCF0wPBcXOls6P5'
            );
            alert('User created and OTP sent Successfully');
            setIsVisible(!isVisible);

        } catch (error) {
            console.log(error);
            // alert("Failed process");
            setIsVisible(!isVisible);
        } finally {
            setLoading(false); // End loading
        };

        setFormData({
            name: "",
            phoneNumber: '',
            role: '', // Reset the role after submission
        });
    };

    return (
        <>
            <div data-aso="flip-left" className="loginform" style={{ position: 'fixed', zIndex: '99', boxShadow: '0 0 10px #333',  borderRadius: '10px', minHeight: '20vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 id="loginh1" style={{ marginBottom: '6vh', color: '#368735', fontFamily: 'sans-serif', textAlign: 'center', width: '100%' }}>Login</h1>


                {
                    !isVisible && (
                        <form onSubmit={handleSubmit}>

                            <div style={{ display: 'flex', }}>
                                <div
                                    onClick={() => setFormData({ ...formData, role: 'Customer' })}
                                    style={{
                                        height: '6vh',
                                        width: '120px',
                                        borderRadius: '12px',
                                        marginRight: '1vh',
                                        border: '2px solid #368735',
                                        marginBottom: '2vh',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: formData.role === 'Customer' ? '#368735' : '#fff',
                                        fontSize: '1.3rem',
                                        color: formData.role === 'Customer' ? 'white' : '#368735',
                                        cursor: 'pointer'
                                    }}>
                                    Customer
                                </div>
                                <div
                                    onClick={() => setFormData({ ...formData, role: 'Corporate' })}
                                    style={{
                                        height: '6vh',
                                        width: '120px',
                                        borderRadius: '12px',
                                        border: '2px solid #368735',
                                        marginBottom: '2vh',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: formData.role === 'Corporate' ? '#368735' : '#fff',
                                        fontSize: '1.3rem',
                                        color: formData.role === 'Corporate' ? 'white' : '#368735',
                                        cursor: 'pointer'
                                    }}>
                                    Corporate
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
                                type="tel"
                                name="phoneNumber"
                                placeholder="Whatsapp No."
                                required
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                minLength={10}
                                maxLength={13}
                                style={{ height: '6vh', width: '100%', color: '#555', background: 'transparent', borderRadius: '50px', border: '2px solid #555', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '4vh' }}
                            />

                            <button type="submit" disabled={loading} style={{ height: '6vh',cursor:'pointer', width: '100%', borderRadius: '50px', border: 'none', padding: '0 2vh', marginBottom: '5vh', backgroundColor: '#368735', fontSize: '1.5rem', color: 'white' }}>
                                {loading ? 'Processing...' : 'Send Otp'}
                            </button>
                            {loading && <p>Loading...</p>}
                        </form>
                    )
                }

{isVisible && <VerifyOtp />}
            </div>

            

        </>
    );
}

export default OtpSend;
