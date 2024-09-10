import React from 'react'
import './Footer.css'
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="upper">
                    <div className="block">
                        <h2>Quick Links</h2>
                        <h4>Home</h4>
                        <h4>Login</h4>
                        <h4>Contact US</h4>
                    </div><div className="block">
                        <h2>Links List</h2>
                        <h4>Help Center</h4>
                        <h4>Forums</h4>
                        <h4>Blog</h4>
                    </div>
                    <div className="block">
                        <h2>Others Pages</h2>
                        <h4>Privacy Policy</h4>
                        <h4>Terms And condition</h4>
                    </div>
                    <div className="block">
                        <h2>Get in Touch  </h2>
                        <h4>125/30 Sector A near GolMarket Lucknow 241120</h4>
                        <h4>Email</h4>
                        <h4>xxxxxx@gmail.com</h4>
                        <h4>Phone : xxxxxxxxx</h4>
                    </div>


                </div>
                <div className="sociallinks">
                    <i class="ri-whatsapp-line" ></i>
                    <i class="ri-instagram-line"></i>
                    <i class="ri-facebook-fill"></i>
                    <i class="ri-twitter-line"></i>
                </div>
                <div className="lower"><h2>&copy; 2024 Online Kawadiwala | All Right Reserved </h2></div>
            </footer>
        </>
    )
}

export default Footer