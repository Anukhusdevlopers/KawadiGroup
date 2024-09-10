import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/footer';
import location from '../../assets/location.png';
import call from '../../assets/callicon.png';
import mail from '../../assets/mail.jpg';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <Navbar userdisplay="none" />
            <main style={{ minHeight: '100vh', width: '100%', backgroundColor: 'white' }}>
                <div className='detailsblock'>
                  <div className='card'>
                  <img src={location} alt=""  style={{width:"40px",height:"40px"}}/>
                  <h1>Our Office </h1>
                    <h4>India , Delhi</h4>
                    <p>Gol Market, Kishangarh, near Gate No 2, Gaushala , New Delhi,270024</p>                   
                  </div>
                  <div className='card'>
                  <img src={call} alt=""  style={{width:"40px",height:"40px"}}/>
                  <h1>Call Us</h1>
                    <h4>+91 5487814556</h4>
                    <p>Talk to our customer care executive service for any inquiry</p>                   
                  </div>
                  <div className='card'>
                  <img src={mail} alt=""  style={{width:"40px",height:"40px"}}/>
                  <h1>Contact Us </h1>
                    <h4>onlinekawadiwal@gmail.com</h4>
                    <p>If you have any inquiry you can also mail us.</p>                   
                  </div>
                    
                </div>

                <h1 style={{ textAlign: 'center', margin: '10vh 0', fontSize: '3rem' }}>Feel Free To Contact Us</h1>

                <div className="formcontainer">
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452865.24010511464!2d76.76357851869749!3d28.64368463639647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e1!3m2!1sen!2sin!4v1724335515755!5m2!1sen!2sin"
                            style={{ height: '100%', width: '100%', border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="form">
                        
                 <div className='ctct_form_flds_div'>
                <span
                  className='ctct_form_flds_label'

                >Name</span>
                <input
                  className='ctct_form_flds'
                  name="email" 
                  placeholder='Enter Your Name'
                  type="email"
                  required
                />
              </div>

                 <div className='ctct_form_flds_div'>
                <span
                  className='ctct_form_flds_label'

                > Email</span>
                <input
                  className='ctct_form_flds'
                  name="email" 
                  placeholder='Enter your  Email'
                  
                  type="email"
                  required
                />
              </div>



<div className='ctct_form_flds_div'>
                <span
                  className='ctct_form_flds_label'

                >Phone No</span>
                <input
                  className='ctct_form_flds'
                  name="email" 
                  placeholder='Enter Your No.'
                  
                  type="email"
                  required
                />
              </div>

              <div className='ctct_form_flds_div'>
                <span
                  className='ctct_form_flds_label'

                >Message</span>
                <textarea
                  className='ctct_form_flds'
                  name="email" 
                  placeholder='Enter your message'                 
                  type="email"
                  required
                style={{border:"2px solid black",padding:"12px 2px"}}/>
              </div>

                        <button>Send</button>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

function Box({ h1, h4middle, text, imgsrc }) {
    return (
        <div className="box">
            <img src={imgsrc} alt="" style={{ height: '9vh', width: '7vh' }} />
            <h1 style={{ fontWeight: '600', fontSize: '2rem', marginTop: '2vh ', textAlign: 'center' }}>{h1}</h1>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '400', margin: '2vh', textAlign: 'center' }}>{h4middle}</h4>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '300', textAlign: 'center' }}>{text}</h4>
        </div>
    );
}

export { Box };
export default Contact;
