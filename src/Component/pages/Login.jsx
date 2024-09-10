import React from "react";
import { Link } from 'react-router-dom' 
import './Signup.css'
import Navbar from "../Home/Navbar";
import Footer from "../Home/footer";

function Login(val) {
    return (
        <>
        <Navbar/>
            <div className="loginbg" style={{height:'100vh',width:'100%',backgroundImage:"url('https://nie-images.s3.amazonaws.com/gall_content/2019/6/2019_6$largeimg21_Jun_2019_163348757.jpg')",backgroundSize:'cover',backgroundPosition:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{padding:'2vh',borderRadius:'10px',minHeight:'20vh',width:'450px',display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <h1 id="loginh1" style={{marginBottom:'10vh',color:'white',textAlign:'center',width:'100%',}}>{val.name} </h1>
                    <input className="logininput" type="text" placeholder="Username"
                        style={{height:'6vh',width:'100%',color:'white',background:'transparent',borderRadius:'50px',border:'1px solid white',padding:'0 2vh',fontSize:'1.5rem',marginBottom:'2vh'}}
                    />
                    <input className="logininput" type="Password" placeholder="Password"
                        style={{height:'6vh',width:'100%',color:'white',background:'transparent',borderRadius:'50px',border:'1px solid white',padding:'0 2vh',fontSize:'1.5rem',marginBottom:'2vh'}}
                    />
                    <button style={{height:'6vh',width:'100%',borderRadius:'50px',border:'none',padding:'0 2vh',marginBottom:'4vh',backgroundColor:'white'}}> 
                        <Link style={{textDecoration:'none',fontSize:'1.4rem',color:'black'}} to={val.routelink}>Sign In</Link>
                     </button>
                    <h4 style={{fontSize:'1.1rem',color:'white',textAlign:'center'}}>Not have an Account ? <Link style={{color:'white'}} to="/Register">Click Here</Link></h4>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Login
