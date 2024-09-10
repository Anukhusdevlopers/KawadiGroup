import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Home from "./Component/pages/Home";
import Signup from "./Component/pages/Signup";
import Login from "./Component/pages/Login";
import Contact from "./Component/pages/Contact";
import Retailer from "./Component/pages/Retailer";
import Ratelist from "./Component/pages/Ratelist";
// import Navbar from "./Component/Home/Navbar";

function Allroutes (){
    return(
        <>
        {/* <Navbar/> */}
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Register" element={<Signup/>} />
                <Route path="/wholesellerlogin" element={<Login name="Whole Seller" routelink="/wholesellerlogin"/>} />
                <Route path="/Retailerlogin" element={<Login name="Retailer" routelink="/retailerpage"/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/retailerpage" element={<Retailer/>} />
                <Route path="/ratelist" element={<Ratelist/>} />
            </Routes>
        </Router>
        </>
    )
}

export default Allroutes