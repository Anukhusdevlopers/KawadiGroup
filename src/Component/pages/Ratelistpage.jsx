import React from 'react'
import Navbar from '../Home/Navbar'
import Ratelist from '../Ratelist/Ratelist'
import Footer from '../Home/footer'

const Ratelistpage = () => {
  return (
    <div>
      <Navbar userdisplay="none" tab="Login" logindisplay="initial" onclickroute="/login" loginover="none" />
      <Ratelist />
      <Footer />
    </div>
  )
}

export default Ratelistpage