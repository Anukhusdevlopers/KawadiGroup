import React from 'react'
import './CurrentLocation.css'
import CurrentLocationMapWithAddress from './Map'

const CurrentLocation = () => {
  return (
    <>
        <div className="currentlocation">
            <h1>Your Location for Scrap Pickup</h1>
           <div className='map'> <CurrentLocationMapWithAddress/> </div>
        </div>
    </>
  )
}

export default CurrentLocation