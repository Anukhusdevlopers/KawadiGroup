import React from 'react'
import Navbar from '../Home/Navbar'
import Ratelist from '../Ratelist/Ratelist'
import Footer from '../Home/footer'
import RatelistHeader from '../Ratelist/RatelistHeader'

const Ratelistpage = () => {
  return (
    <div>
       <Navbar userdisplay="none" customernav="none" mainnav="" logindisplay="initial" onclickroute="/login"  />
       <RatelistHeader/>
      <Ratelist />
      <Footer />
    </div>
  )
}

export default Ratelistpage