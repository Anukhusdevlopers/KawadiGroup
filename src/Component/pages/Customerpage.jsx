import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/footer'
import CustomerHeader from '../Customer/CustomerHeader'
import Sell from '../Customer/Sell'
import Pagination from '../Customer/Pagination'
import CurrentLocationMapWithAddress from '../Customer/Map'
import CurrentLocation from '../Customer/CurrentLocation'

const Customerpage = () => {
  return (
    <div> 
        <Navbar userdisplay="none"  tab="User" onclickroute="/afterlogin" loginover="none"/>
    
        <CustomerHeader/>
        <CurrentLocation/>
        {/* <CurrentLocationMapWithAddress/> */}
        <Sell/>
        {/* <Pagination/> */}
            
        <Footer/>
        {/* <CurrentLocationMapWithAddress/> */}
    </div>
  )
}

export default Customerpage