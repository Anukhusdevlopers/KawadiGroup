import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css';

const VerifyOtp = () => {

  const [otpData, setOtpData] = useState({
    name: '',
    otp: '',
    number: '',
  });

  const [otpResponse, setOtpResponse] = useState(null);
  const [resendOtpResponse, setResendOtpResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  // Fetch stored name and number from localStorage when the component mounts
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedNumber = localStorage.getItem('number');
    setOtpData({
      ...otpData,
      name: storedName || '',
      number: storedNumber || ''
    });
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtpData({ ...otpData, [name]: value });
  };

  // Handle form submission (verify OTP)
  // Handle form submission (verify OTP)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${import.meta.env.VITE_API_URL}/verify-otp/api`, otpData);
      setOtpResponse(result.data);

      toast.success('OTP Verified successfully');

      // Retrieve token from localStorage for authenticated routes
      const token = localStorage.getItem('token');
      if (token) {
        console.log('Token from localStorage:', token);
      }

      // Navigate to the customer dashboard or another protected page
      navigate('/customer');
    } catch (error) {
      console.error('Error Verifying OTP:', error);
      toast.error('Incorrect OTP');
    }
  };

  // Resend OTP
  // Resend OTP
  const resendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resendResult = await axios.post(`${import.meta.env.VITE_API_URL}/kawadiwala/resend-otp`, otpData);
      setResendOtpResponse(resendResult.data);
      toast.success('OTP Resent');
    } catch (error) {
      console.error('Error Resending OTP:', error);
      toast.error('Resending OTP Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
   
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="logininput"
            type="number"
            placeholder="Enter OTP"
            name="otp"
            value={otpData.otp}
            onChange={handleChange}
            required
            style={{ height: '6vh', width: '100%', color: '#555', background: 'transparent', borderRadius: '50px', border: '2px solid #555', padding: '0 2vh', fontSize: '1.5rem', marginBottom: '2vh' }}
          />
        </div>
   

        <button type="submit" style={{cursor:'pointer', height: '6vh', width: '100%', borderRadius: '50px', border: 'none', padding: '0 2vh', marginBottom: '4vh', backgroundColor: '#368735', fontSize: '1.5rem', color: 'white' }}>
          Verify OTP
        </button>

        <button onClick={resendOtp} disabled={loading} style={{cursor:'pointer', height: '6vh', width: '100%', textAlign: 'end', borderRadius: '50px', border: 'none', background: 'transparent', fontSize: '1.3rem', color: '#333' }}>
          {loading ? 'Sending...' : 'Resend OTP'}
        </button>
        {loading && <p>Loading...</p>}
      </form>
    
      {resendOtpResponse && (
        <div>
          <h3>OTP Resend Response:</h3>
          <pre>{JSON.stringify(resendOtpResponse, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default VerifyOtp;
