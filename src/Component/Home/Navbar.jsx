import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import logo from '../../assets/LOGO DP.png'
import OtpSend from '../Login/OtpSend'

const Navbar = (val) => {


    // Hamburger

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // mobile navbar

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
        const whatsappphoneNumber = '+918005363079';
        const message = 'Hello, I want to connect you ! ';
        const whatsappurl = `https://wa.me/${whatsappphoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappurl, '_blank');
    };

    // calling icon

    const callredirect = () => {
        const callingNUmber = '+918005363079';
        const callurl = `tel:${callingNUmber}`;

        window.open(callurl, '_self');
    };

    // login form

    const [isVisible, setIsVisible] = useState(false);

  

    // Function to toggle visibility
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        mobilenavbarhide();
        toggleMenu(); // Toggle between true and false
    };

    return (
        <>
            {/* desktop nav */}
            <div className="topstrip">
                <p><i className="ri-phone-fill"></i> +91 80053 63079</p>
                <p><i className="ri-mail-fill"></i> scraphawker7@gmail.com</p>
            </div>

            <nav>
                <div className="MY_logo">
                    <img src={logo} alt="" />
                </div>

                    <div className='elem' style={{display:val.mainnav}}>
                        <NavLink id='elemlink' to="/">Home</NavLink>
                        <NavLink id='elemlink' to="/about">About</NavLink>
                        <NavLink id='elemlink' to="/blog">Blog</NavLink>
                        <NavLink id='elemlink' to="/ratelist">Rate List</NavLink>
                        <NavLink id='elemlink' to="/contact">Contact Us</NavLink>

                        <Link
                            id='elemlink'
                            onClick={toggleVisibility}
                        >
                            Login
                        </Link>



                    </div>

                


                {/* customer-nav elem */}

               
                    <div className='elem' style={{display:val.customernav}}>
                        <NavLink id='elemlink' to="/customer">Home</NavLink>
                        <NavLink id='elemlink' to="">Profile</NavLink>
                        <NavLink id='elemlink' to="/" onClick={()=> localStorage.clear()}>Log Out</NavLink>

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
                <Link
                    id='elemlink'
                    onClick={toggleVisibility}
                >
                    Login
                </Link>

            </div>

            {/* loginform */}

            <div className='loginform_cnct' style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'fixed', zIndex: '99', top: '22vh' }}>
                {
                    isVisible && (
                        <OtpSend />
                    )
                }
            </div>

            {/* contact icon wb , call */}

            <div className="cntcticon">
                <div className="callicon" style={{ fontSize: '2.1rem' }}><i onClick={callredirect} className="ri-phone-fill"></i></div>
                <div className="wbicon" style={{ fontSize: '2.4rem' }}><i onClick={whatsappHandle} className="ri-whatsapp-line"></i></div>
            </div>
        </>
    )
}



export default Navbar

