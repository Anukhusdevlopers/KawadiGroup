import React,{useEffect} from 'react';
import location from '../../assets/location.png';
import call from '../../assets/callicon.png';
import mail from '../../assets/mail.jpg';
import './Contact.css';


import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh(); // Refresh AOS animations after rendering
  }, []);

  return (
   
    <>
    <div className='contactpage'>
     <div className='detailsblock'>
      <div className='card' data-aos="flip-left">
        <img src={location} alt="" style={{ width: "40px", height: "40px" }} />
        <h1>Our Office </h1>
        <h4>India , Delhi</h4>
        <p>Gol Market, Kishangarh, near Gate No 2, Gaushala , New Delhi,270024</p>
      </div>
      <div className='card' data-aos="flip-left">
        <img src={call} alt="" style={{ width: "40px", height: "40px" }} />
        <h1>Call Us</h1>
        <h4>+91 8005363079</h4>
        <p>Talk to our customer care executive service for any inquiry</p>
      </div>
      <div className='card' data-aos="flip-left">
        <img src={mail} alt="" style={{ width: "40px", height: "40px" }} />
        <h1>Contact Us </h1>
        <h4>scraphawker7@gmail.com</h4>
        <p>If you have any inquiry you can also mail us.</p>
      </div>


      </div>
    </div>
      {/* form */}
      <div data-aos="zoom-in" className='ctct_form'>
        <div className='ctct_form_txt'>
          <span className='ctct_form_bgtxt'>We’d love to hear from you!<br /> Give us call, send us a message?</span><br />
         
           

          <div data-aos="zoom-in" className="map_container">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57550.8797949401!2d80.96827827847443!3d26.844778981787837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd49fc60a843%3A0x92fc72e19b623f6a!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1727000236586!5m2!1sen!2sin" style={{ border: '0', width: "100%", height: "20rem", borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000" className='ctct_form_input'>
          <div className='ctct_form_input_form'>
            <span className='ctct_form_input_txt'>Write Your Query!</span>
            <form >

              { }

              <div className='ctct_form_flds_div'>
                <span className='ctct_form_flds_label'>Company Name</span>
                <input className='ctct_form_flds' type="text"
                  name="name" 
                  placeholder='Enter Full Name'
                  required />
              </div><br />
              <div className='ctct_form_flds_div'>
                <span
                  className='ctct_form_flds_label'

                >Company email</span>
                <input
                  className='ctct_form_flds'
                  name="email" 
                  placeholder='Enter Email'

                  type="email"
                  required
                />
              </div><br />

              <div className='ctct_form_flds_div'>
                <span className='ctct_form_flds_label'>Company Phone</span>
                <input
                  className='ctct_form_flds'
                  type="text"
                  maxLength={10}
                  placeholder='Enter Mobile Number'
                  name="phone" 

                  required
                />
              </div><br />
              <div className='ctct_form_flds_div'>
                <span className='ctct_form_flds_label'>Message</span>
                <textarea
                  className='ctct_form_flds'
                  rows="4"
                  cols="50"
                  style={{ padding: "9px" }}
                  name="message" 
                  placeholder='Enter Message'

                  required
                ></textarea>
              </div><br />


              <div className='btn_div_ctct'>
                <button className='ctct_form_btn' >Submit</button>
              </div>

            </form>
          </div>
        </div>

      </div>
      {/* Ngo Tagline */}
      {/* <div className='ngoLines'>
        <span data-aos="zoom-in" className='ngoLines_bgtext'>
          Interested in helping towards Junyali Tech Services ?
        </span>
        <span data-aos="zoom-in" className='ngoLines_mdtext'>
          Your support is crucial in ensuring education for all!
        </span>
        <span data-aos="zoom-in" className='ngoLines_lst'>

          For support contact on: +91 9717190148
          <br />
          Email: deepakdhyani@junyalitech.com
        </span>
      </div> */}
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
