import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Home from "./Component/pages/Home";
import Signup from "./Component/pages/Signup";
import Login from "./Component/pages/Login";
import Retailer from "./Component/pages/Retailer";
import About from "./Component/pages/About"
import Contactpage from "./Component/pages/Contactpage";
import Ratelistpage from "./Component/pages/Ratelistpage";
import Afterlogin from "./Component/pages/Afterlogin";
import Blogpage from "./Component/pages/Blogpage";
import Footer from "./Component/Home/footer";
import Navbar from "./Component/Home/Navbar";
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
           
                
                <Route path="/Register" element={<Signup/>} />
                <Route path="/wholesellerlogin" element={<Login name="Whole Seller" routelink="/wholesellerlogin"/>} />
                <Route path="/login" element={<Login name="Login" routelink="/retailerpage"/>} />
            </Routes>
        </Router>
        </>
    )
}

export default Allroutes