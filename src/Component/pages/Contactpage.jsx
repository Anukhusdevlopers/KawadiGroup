import React from 'react'
import Navbar from '../Home/Navbar'
import Contact from '../Contact/Contact'
import Feedback from '../Contact/Feedback'
import Footer from '../Home/footer'
import ContactHeader from '../Contact/ContactHeader'

const Contactpage = () => {
  return (
    <div>
       <Navbar userdisplay="none" customernav="none" mainnav="" logindisplay="initial" onclickroute="/login"  />
       <ContactHeader/>
      <Contact />
      <Feedback />
      <Footer />
    </div>
  )
}

export default Contactpage