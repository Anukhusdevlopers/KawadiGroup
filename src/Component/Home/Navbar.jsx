import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import logo from '../../assets/LOGO DP.png'

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

    const [logindisplay, setLogindisplay] = useState('initial');
    const [userdisplay, setUserdisplay] = useState('none');

    // whatsapp icon 

    const whatsappHandle = () => {
        const whatsappphoneNumber = '+919151542141';
        const message = 'Hello, I want to connect you ! ';
        const whatsappurl = `https://wa.me/${whatsappphoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappurl, '_blank');
    };

    // calling icon

    const callredirect = () => {
        const callingNUmber = '+919151542141';
        const callurl = `tel:${callingNUmber}`;

        window.open(callurl, '_self');
    };


    return (
        <>
            <nav>
                <div className="MY_logo">
                    <img src={logo} alt="" />
                </div>

                <div className='elem'>
                    <NavLink id='elemlink' to="/">Home</NavLink>
                    <NavLink id='elemlink' to="/about">About</NavLink>
                    <NavLink id='elemlink' to="/blog">Blog</NavLink>
                    <NavLink id='elemlink' to="/ratelist">Rate List</NavLink>
                    <NavLink id='elemlink' to="/contact">Contact Us</NavLink>

                    <Link style={{}} id='elemlink' to={val.onclickroute}>{val.tab} </Link>
                    {/* <Link style={{display:userdisplay}} id='elemlink' to="" >User </Link>
                   */}


                </div>
                <div className={`hamburger ${isMenuOpen ? 'cross' : ''} `} onClick={navopen} >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>



            {/* for mobile view */}



            <div className="mobilenav" style={{ visibility: hidden }}>
                <Link to="/" onClick={() => { toggleMenu(); mobilenavbarhide(); }}>Home</Link> <br />

                <NavLink id='elemlink' to="/about">About</NavLink><br />
                <NavLink id='elemlink' to="/blog">Blog</NavLink> <br />
                <NavLink id='elemlink' to="/ratelist">Rate List</NavLink> <br />
                <Link to="/contact">Contact Us</Link> <br />

                <Link style={{ display: val.logindisplay }} id='elemlink' to={val.onclickroute}>{val.tab} </Link>
                {/* <div style={{padding:'1vh 0vh 0 13vh', zIndex: '9',opacity:logindisplay ,scale:logindisplay,display:val.logindisplay }} className="loginover">
                    <Link to="/Retailerlogin" >Retailer </Link> <br />
                    <Link to="/wholesellerlogin" >Whole Seller</Link>
                </div> */}

                {/* <div style={{padding:'1vh 0vh 0 13vh', zIndex: '9',opacity:logindisplay ,scale:logindisplay,}} className="loginover">
                     <Link to="/" >Log Out</Link>
                </div> */}
            </div>


            <div className="cntcticon">
                <div className="callicon" style={{ fontSize: '2.1rem' }}><i onClick={callredirect} class="ri-phone-fill"></i></div>
                <div className="wbicon" style={{ fontSize: '2.4rem' }}><i onClick={whatsappHandle} class="ri-whatsapp-line"></i></div>
            </div>
        </>
    )
}



export default Navbar

