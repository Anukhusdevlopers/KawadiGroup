import React from 'react'
import Navbar from '../Home/Navbar'
import Ratelist from '../Ratelist/Ratelist'
import Footer from '../Home/footer'

const Ratelistpage = () => {
  return (
    <div>
       <Navbar userdisplay="none" />
       <Ratelist/>
       <Footer/>
    </div>
  )
}

export default Ratelistpage