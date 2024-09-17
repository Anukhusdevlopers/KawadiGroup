import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import logo from '../../assets/logo.jpg'

const Navbar = (val) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const [hidden, setHidden] = useState("hidden");

    function mobilenavbar() {
        setHidden("initial");
    }
    function mobilenavbarhide() {
        setHidden("hidden");
    }

    function navopen() {
        toggleMenu();
        isMenuOpen ? mobilenavbarhide() : mobilenavbar()
    }

    const [logindisplay,setLogindisplay] = useState(0);

    function loginoption(){
        logindisplay == 0 ? setLogindisplay('1') : setLogindisplay("0");
    }
    function profileoption(){
        logindisplay == 0 ? setLogindisplay('1') : setLogindisplay("0");
    }


    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div className='elem'>
                    <NavLink id='elemlink' to="/">Home</NavLink>
                    <NavLink id='elemlink' to="/about">About</NavLink>
                    <NavLink id='elemlink' to="/ratelist">Rate List</NavLink>
                    <NavLink id='elemlink' to="/contact">Contact Us</NavLink>

                    <Link style={{display:val.logindisplay}} id='elemlink' onClick={loginoption} to="/">Customer </Link>
                    <div  style={{ opacity:logindisplay, zIndex: '9' }} className="loginover">
                        <Link to="/Retailerlogin" >Retailer </Link>
                        <Link to="/wholesellerlogin" >Whole Seller</Link>
                    </div>

                    <NavLink style={{display:val.userdisplay }} id='user' to="/">
                    <i className="ri-user-2-fill" ></i> 
                     </NavLink>
                    
                </div>
                <div className={`hamburger ${isMenuOpen ? 'cross' : ''} `} onClick={navopen} >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
            <div className="mobilenav" style={{ visibility: hidden }}>
                <Link to="/" onClick={() => { toggleMenu(); mobilenavbarhide(); }}>Home</Link> <br />
                
                <NavLink id='elemlink' to="/about">About</NavLink><br />
                    <NavLink id='elemlink' to="/ratelist">Rate List</NavLink> <br />
                <Link to="/contact">Contact Us</Link> <br />

                <Link onClick={loginoption} style={{display:val.logindisplay}} to="">Customer <i className="ri-arrow-drop-down-fill"></i></Link>
                <div style={{padding:'1vh 0vh 0 13vh', zIndex: '9',opacity:logindisplay ,scale:logindisplay,display:val.logindisplay }} className="loginover">
                    <Link to="/Retailerlogin" >Retailer </Link> <br />
                    <Link to="/wholesellerlogin" >Whole Seller</Link>
                </div>
                <NavLink onClick={profileoption} style={{display:val.userdisplay }} id='user' to="">
                  Profile &nbsp;  <i className="ri-user-2-fill" ></i> 
                </NavLink>
                {/* <div style={{padding:'1vh 0vh 0 13vh', zIndex: '9',opacity:logindisplay ,scale:logindisplay,}} className="loginover">
                     <Link to="/" >Log Out</Link>
                </div> */}
            </div>
        </>
    )
}



export default Navbar

