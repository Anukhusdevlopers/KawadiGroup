import React from 'react'
import './Pickup.css'

const Pickup = () => {

    const requests = [

        {
            name: 'Khushboo',
            location: 'HNo 132 Sector A Indira Nagar Lucknow',
            Scrapitem: 'Newspaper',
            weight: '10',
        },
        {
            name: 'Khushboo',
            location: 'HNo 132 Sector A Indira Nagar Lucknow',
            Scrapitem: 'Newspaper',
            weight: '10',
        },
        {
            name: 'Khushboo',
            location: 'HNo 132 Sector A Indira Nagar Lucknow',
            Scrapitem: 'Newspaper',
            weight: '10',
        },
        {
            name: 'Khushboo',
            location: 'HNo 132 Sector A Indira Nagar Lucknow',
            Scrapitem: 'Newspaper',
            weight: '10',
        },
    ]

    return (
        <>
            <div className='pickup'>
                <h1>Pickup Requests</h1>
                <div className="requests">

                {
                    requests.map((val) => {
                        return(
                           
                                <div className="requestCard">
                                    <p><span style={{fontWeight:'600'}}>Customer Name :</span> {val.name} </p>
                                    <p> <span style={{fontWeight:'600'}}>Pickup Location :</span> {val.location} </p>
                                    <p> <span style={{fontWeight:'600'}}>Pickup Location :</span> {val.Scrapitem} </p>
                                    <p><span style={{fontWeight:'600'}}>Estimated Weight: </span> {val.weight}kg </p>
                                    <button>Accept</button>
                                </div>
                           
                        )

                    })
                }
                 </div>
            </div>
        </>
    )
}

export default Pickup