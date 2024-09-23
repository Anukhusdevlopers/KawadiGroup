import React, { useState } from "react";
import { Link } from 'react-router-dom' 
import './Signup.css'
import bg from  "../../assets/bg.jpg"
import Navbar from "../Home/Navbar";
import Footer from "../Home/footer";

function Login(val) {

    const [numberdisplay,setNumberdisplay] = useState("initial");
    const [otpdisplay,setOtpdisplay] = useState("none");

   

    return (
        <>
       
            <div className="loginbg" >

                    {/* Enter Whatsapp No. */}
                
                 <div className="loginform" style={{padding:'5vh',borderRadius:'10px',minHeight:'20vh',width:'450px',display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <h1 id="loginh1" style={{marginBottom:'6vh',color:'#333',textAlign:'center',width:'100%',}}>{val.name} </h1>
                    <h2 style={{marginBottom:'5vh'}}>Hi, Khushboo</h2>
                    <input className="logininput" type="text" placeholder="Enter Name"
                        style={{display:numberdisplay,height:'6vh',width:'100%',color:'#333',background:'transparent',borderRadius:'50px',border:'2px solid #777',padding:'0 2vh',fontSize:'1.5rem',marginBottom:'2vh'}}
                    />
                    <input className="logininput" type="number" placeholder="Whatsapp No."
                        style={{display:numberdisplay,height:'6vh',width:'100%',color:'#333',background:'transparent',borderRadius:'50px',border:'2px solid #777',padding:'0 2vh',fontSize:'1.5rem',marginBottom:'2vh'}}
                    />
                    <button onClick={()=>{setOtpdisplay("initial",setNumberdisplay("none"))}} style={{display:numberdisplay,height:'6vh',width:'100%',borderRadius:'50px',border:'none',padding:'0 2vh',marginBottom:'4vh',backgroundColor:'#333'}}> 
                        <Link style={{textDecoration:'none',fontSize:'1.4rem',color:'white'}} to={val}>Send OTP</Link>
                     </button>

                     {/* verify Otp */}

                     <input className="logininput" type="text" placeholder="Enter OTP"
                        style={{display:otpdisplay,height:'6vh',width:'100%',color:'#333',background:'transparent',borderRadius:'50px',border:'2px solid #777',padding:'0 2vh',fontSize:'1.5rem',marginBottom:'2vh'}}
                    />
                    <button onClick={()=>{
                        alert("Verified Succefully");
                        
                    }} style={{display:otpdisplay,height:'6vh',width:'100%',borderRadius:'50px',border:'none',padding:'0 2vh',marginBottom:'4vh',backgroundColor:'#333'}}> 
                        <Link style={{textDecoration:'none',fontSize:'1.4rem',color:'white'}} to="/afterlogin">Verify OTP</Link>
                     </button>
                    <h4  style={{display:numberdisplay,fontSize:'1.1rem',color:'#333',textAlign:'center'}}>Not have an Account ? <Link style={{color:'#333'}} to="/Register">Click Here</Link></h4>
                </div>

             
            </div>
          
        </>
    )
}
export default Login

