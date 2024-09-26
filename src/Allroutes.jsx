import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Home from "./Component/pages/Home";
import Login from "./Component/pages/Login";
import Retailer from "./Component/pages/Retailer";
import About from "./Component/pages/About"
import Contactpage from "./Component/pages/Contactpage";
import Ratelistpage from "./Component/pages/Ratelistpage";
import Afterlogin from "./Component/pages/Afterlogin";
import Blogpage from "./Component/pages/Blogpage";
import Footer from "./Component/Home/footer";
import Navbar from "./Component/Home/Navbar";
import VerifyOtp from "./Component/Login/VerifyOtp";
// import Navbar from "./Component/Home/Navbar";

function Allroutes (){
    return(
        <>
        {/* <Navbar/> */}
        <Router>
            <Routes>
             
                <Route path="/" element={<Home />} />
                <Route path="/afterlogin" element={<Afterlogin />} />
                <Route path="/blog" element={<Blogpage />} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contactpage/>} />
                <Route path="/retailerpage" element={<Retailer/>} />
                <Route path="/ratelist" element={<Ratelistpage/>} />
           
               
                <Route path="/login" element={<Login name="Login" routelink="/retailerpage"/>} />
                <Route path="/otpverify" element={<VerifyOtp/>} />
            </Routes>
        </Router>
        </>
    )
}

export default Allroutes