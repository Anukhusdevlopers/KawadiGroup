import React from 'react'
import './Section3.css'

const Section3 = () => {
  return (
    <>
        <div className="section3">
          <Card h1="Scrap Pickup" p="Scrap pickup service provided to customers for more detail contact us by click on more detail button below." />
          <Card h1="Rate List" p="Different types of scrap in different rate to know about the rate for your scrap please click on more detail button below" />
          <Card h1="About Us" p="Delhi Kabadiwala, we collect scrap to recycle it, our motive to keep atmosphere clean and healthy ." />
        </div>
    </>
  )
}

function Card(val){
  return(
    <>
      <div className="card">
            <h1>{val.h1} </h1>
            <p>{val.p} </p>
            <a href="">Read More..</a>
      </div>
    </>
  )
}

export default Section3