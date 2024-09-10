import React from 'react'
import Navbar from '../Home/Navbar'
import '../Retailer/Sect1.css'
import Sect1 from '../Retailer/Sect1'
import Sec2 from '../Retailer/Sec2'
import Sec3 from '../Retailer/Sec3'
import Footer from '../Home/footer'

const Retailer = () => {
  return (
    <>
     <Navbar logindisplay="none"/>
     <main>
        <Sect1/>
        <Sec2/>
        <Sec3/>
     </main>
     <Footer/>
    </>
  )
}

export default Retailer