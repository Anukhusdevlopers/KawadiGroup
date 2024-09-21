import React from "react";
import { Link } from 'react-router-dom'
import './Signup.css'
import Navbar from "../Home/Navbar";
import Footer from "../Home/footer";

function Signup() {
    return (
        <>
        
            <div className="signupbg" >
                <div className="container">
                    <div className="txtpart" style={{ height: '100%', display: "flex", color: '#333', flexDirection: 'column ', justifyContent: 'center', }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '500', marginBottom: '2vh' }}>Welcome to</h2>
                        <h1 style={{ fontSize: '5.5rem' }}>Online Kawadiwala</h1>
                    </div>
                    <div className="formpart" style={{ height: '100%', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ padding: '5vh', borderRadius: '10px', height: '100%', width: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h1 style={{ fontSize: '3rem', marginBottom: '7vh', color: '#333', textAlign: 'center' }}>Sign Up</h1>
                            <input className="logininput" type="text" placeholder="Name"
                                style={{ height: '10vh',  color: '#333', background: 'transparent', borderRadius: '50px', border: '2px solid #777', padding: '0 2vh', fontSize: '1.4rem', marginBottom: '2vh' }}
                            />
                            <input className="logininput" type="email" placeholder="Email"
                                style={{ height: '10vh',  color: '#333', background: 'transparent', borderRadius: '50px', border: '2px solid #777', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
                            />
                            <input className="logininput" type="number" placeholder="Mobile No."
                                style={{ height: '10vh',  color: '#333', background: 'transparent', borderRadius: '50px', border: '2px solid #777', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
                            />
                            <input className="logininput" type="text" placeholder="Address"
                                style={{ height: '10vh',  color: '#333', background: 'transparent', borderRadius: '50px', border: '2px solid #777', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
                            />
                            <input className="logininput" type="number" placeholder="Pin Code"
                                style={{ height: '10vh',  color: '#333', background: 'transparent', borderRadius: '50px', border: '2px solid #777', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
                            />
                            <input className="logininput" type="number" placeholder="Whatsapp No."
                                style={{ height: '10vh',  color: '#333', background: 'transparent', borderRadius: '50px', border: '2px solid #777', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
                            />
                            <input className="logininput" type="submit" value="Sign Up"
                            onClick={()=>{
                                alert("Account Created Succesfully"
                          )}}
                                style={{ height: '10vh',  borderRadius: '50px', border: 'none', padding: '0 2vh', fontSize: '1.4rem', marginBottom: '4vh', backgroundColor: '#333',color:'white' }}
                            />
                            
                            <h4 style={{ fontSize: '1.1rem', color: '#333', textAlign: 'center' }}>Already have Account ? <Link style={{ color: '#333' }} to="/retailerlogin">Click Here</Link></h4>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup





