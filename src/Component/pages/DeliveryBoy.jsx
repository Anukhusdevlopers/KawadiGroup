import React from 'react'
import DbHeader from '../DeliveryBoy/DbHeader'
import Navbar from '../Home/Navbar'
import Footer from '../Home/footer'
import Pickup from '../DeliveryBoy/Pickup'

const DeliveryBoy = () => {
  return (
    <>  
      <Navbar/>
        <DbHeader/>
        <Pickup/>
        <Footer/>
    </>
  )
}

export default DeliveryBoy