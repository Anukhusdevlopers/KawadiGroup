import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Home from "./Component/pages/Home";
import Retailer from "./Component/pages/Retailer";
import About from "./Component/pages/About"
import Contactpage from "./Component/pages/Contactpage";
import Ratelistpage from "./Component/pages/Ratelistpage";
import Blogpage from "./Component/pages/Blogpage";
import Footer from "./Component/Home/footer";
import Navbar from "./Component/Home/Navbar";
import VerifyOtp from "./Component/Login/VerifyOtp";
import DeliveryBoy from "./Component/pages/DeliveryBoy";
import Customerpage from "./Component/pages/Customerpage";
import OtpSend from "./Component/Login/OtpSend";
// import Navbar from "./Component/Home/Navbar";

function Allroutes (){
    return(
        <>
        {/* <Navbar/> */}
        <Router>
            <Routes>
             
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blogpage />} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contactpage/>} />
                <Route path="/retailerpage" element={<Retailer/>} />
                <Route path="/ratelist" element={<Ratelistpage/>} />
           
               
                {/* <Route path="/login" element={<OtpSend name="Login" routelink="/retailerpage"/>} /> */}
                

                <Route path="/deliveryboy" element={<DeliveryBoy/>} />
                <Route path="/customer" element={<Customerpage/>} />
            </Routes>
        </Router>
        </>
    )
}

export default Allroutes