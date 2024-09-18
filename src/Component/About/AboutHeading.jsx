import React from 'react'
import './AboutHeading.css'

const AboutHeading = (val) => {
  return (
    <>
        <div className="aboutHeading">
          <h1>{val.h1} </h1>
        </div>
    </>
  )
}

export default  AboutHeading