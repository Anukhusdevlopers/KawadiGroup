import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'
import axios from "axios";

function OtpSend(val) {


    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        otp:'',
        role: 'customer', // Default role selection
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
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true); // Start loading


    //     try {
    //         const [login, otp] = await Promise.all([
    //             axios.post('http://localhost:5000/kawadiwala/login', formData),
    //             axios.post('http://localhost:5000/kawadiwala/send-otp', formData) // Fix typo 'formData'
    //         ]);
    //         setResponse([login.data, otp.data]);
    //         alert('User created and OTP sent Successfuly');
    //         // localStorage.setItem('otp',otp.data);
    //         navigate('/otpverify');
    //     } catch (error) {
    //         console.log(error);
    //         alert("Failed process");
    //     } finally {
    //         setLoading(false); // End loading
    //     };


    //     // send data on email

    //    const sendemail  = () =>{emailjs.send(
    //     'service_bquo33v',
    //     'template_9hubbr7',
    //     formData,
    //     'cEcCF0wPBcXOls6P5'
    //     );

    //     sendemail.then(
    //         (response) => {
    //             console.log('Send on email',response.status , response.text);
    //             alert('Email Sent Successfully');
    //         },
    //         (err) => {
    //             console.log('Failed ..',err);
    //             alert('Failed to send email');
    //         }
    //     );
    // }

    // };


    return (
        <>

            <form action=""  >
                <input
                    className="logininput"
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{  height: '6vh', width: '100%', color: '#333', background: 'transparent', borderRadius: '50px', border: '2px solid #777', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
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
                    style={{  height: '6vh', width: '100%', color: '#333', background: 'transparent', borderRadius: '50px', border: '2px solid #777', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
                />

                <select name="role"
                    value={formData.role}
                    onChange={handleChange}
                    style={{  height: '6vh', width: '100%', color: '#333', background: 'transparent', borderRadius: '50px', border: '2px solid #777', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
                    className="logininput">
                    <option value="retailer">Retailer</option>
                    <option value="corporate">Corporate</option>
                    <option value="customer">Customer</option>
                </select>

                <button  type="submit" disabled={loading} style={{ height: '6vh', width: '100%', borderRadius: '50px', border: 'none', padding: '0 2vh', marginBottom: '4vh', backgroundColor: '#333', fontSize: '1.5rem', color: 'white' }}> {/* Disable button while loading */}
                    {loading ? 'Processing...' : 'Send Otp'}
                </button>
                {loading && <p>Loading...</p>}


            </form>

        </>
    )
}
export default OtpSend


