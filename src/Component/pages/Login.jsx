import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import OtpSend from "../Login/OtpSend";
import VerifyOtp from "../Login/VerifyOtp";


function Login(val) {

    return (
        <>



            <div className="loginbg" >

                <div className="loginform" style={{ padding: '5vh', borderRadius: '10px', minHeight: '20vh', width: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 id="loginh1" style={{ marginBottom: '6vh', color: '#333', textAlign: 'center', width: '100%', }}>{val.name} </h1>
                    {/* <h2 style={{ marginBottom: '5vh' }}>Hi, </h2> */}

                    <OtpSend />
             

                </div>
            </div>

        </>
    )
}
export default Login

