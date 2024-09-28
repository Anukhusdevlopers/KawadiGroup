import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';

const VerifyOtp = (val) => {

  const [otpData, setOtpData] = useState({
    name: '',
    otp: '',
    phoneNumber: '+918707087926',
    // Default role selection
  });

  const [otpResponse, setOtpResponse] = useState(null);
  const [resendOtpResponse, setResendOtpResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input change



  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtpData({ ...otpData, [name]: value });
  };

  // Handle form submission  

  // verify otp


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const result = await axios.post('http://localhost:5000/kawadiwala/verify-otp', otpData);
      // setOtpResponse(result.data);
      alert('Otp Verified successfully');
      navigate('/afterlogin')
    } catch (error) {
      console.error('Error Verifying Otp:', error);
      alert('Incorrect Otp');
    }

    //Resend otp

  };

  const resendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const resendResult = 
      await axios.post('http://localhost:5000/kawadiwala/resend-otp',
         {
        phoneNumber: otpData.phoneNumber,  // Only send the phoneNumber
      });
      setResendOtpResponse(resendResult.data);
      alert("OTP Resent");
    } catch (error) {
        if (error.response) {
          console.error('Error response data:', error.response.data);
          console.error('Error response status:', error.response.status);
          console.error('Error response headers:', error.response.headers);
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
        alert('Resending OTP Failed');
      }
     finally {
      setLoading(false);
    }
  };


  return (
    <>

      <div className="loginbg" >

        <div className="loginform" style={{ padding: '5vh', borderRadius: '10px', minHeight: '20vh', width: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 id="loginh1" style={{ marginBottom: '6vh', color: '#333', textAlign: 'center', width: '100%', }}>Login</h1>
          {/* <h2 style={{ marginBottom: '5vh' }}>Hi, </h2> */}


          <div>
            <form onSubmit={handleSubmit} >

              <div>
                <input
                  className="logininput"
                  type="number"
                  placeholder='Enter OTP'
                  name="otp"
                  value={otpData.otp}
                  onChange={handleChange}
                  required
                  style={{ height: '6vh', width: '100%', color: '#333', background: 'transparent', borderRadius: '50px', border: '2px solid #777', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
                />
              </div>

              <button type="submit" style={{ height: '6vh', width: '100%', borderRadius: '50px', border: 'none', padding: '0 2vh', marginBottom: '4vh', backgroundColor: '#333', fontSize: '1.5rem', color: 'white' }}>Verify OTP</button>


              <button onClick={resendOtp} disabled={loading} style={{ height: '6vh', width: '100%', textAlign: 'end', borderRadius: '50px', border: 'none', marginBottom: '2vh', background: 'transparent', fontSize: '1.3rem', color: '#333' }}>
                {loading ? 'Sending...' : 'Resend Otp'}
              </button>
              {loading && <p>Loading...</p>}
            </form>


            {resendOtpResponse && (
              <div>
                <h3>OTP Resend Response:</h3>
                <pre>{JSON.stringify(resendOtpResponse, null, 2)}</pre>
              </div>
            )}


          </div>

        </div>
      </div>

    </>
  )
}

export default VerifyOtp