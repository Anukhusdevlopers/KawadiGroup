import React from 'react'
import Navbar from '../Home/Navbar'
import Contact from '../Contact/Contact'
import Feedback from '../Contact/Feedback'
import Footer from '../Home/footer'

const Contactpage = () => {
  return (
    <div>
         <Navbar userdisplay="none" />
         <Contact/>
         <Feedback/>
         <Footer/>
    </div>
  )
}

export default Contactpage