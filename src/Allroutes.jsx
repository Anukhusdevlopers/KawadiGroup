import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Home from "./Component/pages/Home";
import Signup from "./Component/pages/Signup";
import Login from "./Component/pages/Login";
import Retailer from "./Component/pages/Retailer";
import About from "./Component/pages/About"
import Contactpage from "./Component/pages/Contactpage";
import Ratelistpage from "./Component/pages/Ratelistpage";
// import Navbar from "./Component/Home/Navbar";

function Allroutes (){
    return(
        <>
        {/* <Navbar/> */}
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/Register" element={<Signup/>} />
                <Route path="/wholesellerlogin" element={<Login name="Whole Seller" routelink="/wholesellerlogin"/>} />
                <Route path="/Retailerlogin" element={<Login name="Retailer" routelink="/retailerpage"/>} />
                <Route path="/contact" element={<Contactpage/>} />
                <Route path="/retailerpage" element={<Retailer/>} />
                <Route path="/ratelist" element={<Ratelistpage/>} />
            </Routes>
        </Router>
        </>
    )
}

export default Allroutes