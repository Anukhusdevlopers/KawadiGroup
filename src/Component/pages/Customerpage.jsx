import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/footer'
import CustomerHeader from '../Customer/CustomerHeader'
import Sell from '../Customer/Sell'
import Pagination from '../Customer/Pagination'
import CurrentLocationMapWithAddress from '../Customer/Map'
import CurrentLocation from '../Customer/CurrentLocation'
import Request from '../Customer/Request'

const Customerpage = () => {
  return (
    <div> 
          <Navbar userdisplay="none" customernav="" mainnav="none" logindisplay="initial" onclickroute="/login"  />
   
        <CustomerHeader/>
        <CurrentLocation/>
        <Sell/>
        <Request/>
        <Footer/>
    </div>
  )
}

export default Customerpage