import React from "react";
import { Link } from 'react-router-dom'
import './Signup.css'
import Navbar from "../Home/Navbar";
import Footer from "../Home/footer";

function Signup() {
    return (
        <>
        <Navbar/>
            <div className="signupbg" >
                <div className="container">
                    <div className="txtpart" style={{ height: '100%', width: '50%', display: "flex", color: 'white', flexDirection: 'column ', justifyContent: 'center', padding: '5vh' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '500', marginBottom: '2vh' }}>Welcome to</h2>
                        <h1 style={{ fontSize: '5.5rem' }}>Online Kawadiwala</h1>
                    </div>
                    <div className="formpart" style={{ height: '95vh', width: '40%', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5vh 8vh' }}>
                        <div style={{ padding: '5vh', borderRadius: '10px', height: '100%', width: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h1 style={{ fontSize: '3rem', marginBottom: '7vh', color: 'white', textAlign: 'center' }}>Sign Up</h1>
                            <input className="logininput" type="text" placeholder="Name"
                                style={{ height: '10vh',  color: 'white', background: 'transparent', borderRadius: '50px', border: '2px solid white', padding: '0 2vh', fontSize: '1.4rem', marginBottom: '2vh' }}
                            />
                            <input className="logininput" type="email" placeholder="Email"
                                style={{ height: '10vh',  color: 'white', background: 'transparent', borderRadius: '50px', border: '2px solid white', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
                            />
                            <input className="logininput" type="number" placeholder="Phone No."
                                style={{ height: '10vh',  color: 'white', background: 'transparent', borderRadius: '50px', border: '2px solid white', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
                            />
                            <input className="logininput" type="text" placeholder="Location"
                                style={{ height: '10vh',  color: 'white', background: 'transparent', borderRadius: '50px', border: '2px solid white', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
                            />
                            <input className="logininput" type="Password" placeholder="Password"
                                style={{ height: '10vh',  color: 'white', background: 'transparent', borderRadius: '50px', border: '2px solid white', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
                            />
                            <input className="logininput" type="submit" value="Sign Up"
                                style={{ height: '10vh',  borderRadius: '50px', border: 'none', padding: '0 2vh', fontSize: '1.4rem', marginBottom: '4vh', backgroundColor: 'white' }}
                            />
                            <h4 style={{ fontSize: '1.1rem', color: 'white', textAlign: 'center' }}>Already have Account ? <Link style={{ color: 'white' }} to="/">Click Here</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
<Footer/>
        </>
    )
}

export default Signup





