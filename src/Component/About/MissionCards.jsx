import React from 'react'
import './MissionCards.css'

const MissionCards = () => {
  return (
    <>
        <Cards img="https://canadianchristianity.com/cms/wp-content/uploads/2010/10/mission-sign.jpg"
           p="Our mission is to make a world where nothing is wasted, the communities from around the globe building an eco-system of sustainable living through doing the right waste treatment that is to get it recycled.                                                 "
           h1="Our Mission"
        />
       
        
         <Cards img="https://curewellnesscentre.com/assets/images/about4.jpg"
           p="We are dedicated to making the world a better place, one piece of scrap at a time. Best online Kabadiwala delhi, sell scrap online, Our mission is to provide a convenient ."
           h1="Our Approach"
        />
        <Cards img="https://www.delbylubricants.com/wp-content/uploads/2018/02/vision-542x340.png"
            p="Our vision is to bring a circular economy into a reality where used products are manufactured into new products to minimize the over-exploitation of natural resources and maximize recycling.Our vision is to bring a circular economy into a reality ."
            h1="Our Vission"
        />
         <Cards img="https://t4.ftcdn.net/jpg/00/61/53/95/360_F_61539548_k7xCTBDEW1hxVY3dCvxoFdHTbERk1a3b.jpg"
            p="To be the premier online platform for doorstep kabadiwala scrap pickup, leading the recycling industry with a seamless, eco-friendly solution ."
            h1="Goal"
        />
        <Cards img="https://plus.unsplash.com/premium_photo-1661270438246-51c54f87b204?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            p="To be the premier online platform for doorstep kabadiwala scrap pickup, leading the recycling industry with a seamless, eco-friendly solution .online platform for doorstep kabadiwala scrap pickup, leading the recycling industry with a seamless, eco-friendly solution ."
            h1="Company Profile"
        />
    </>
  )
}

function Cards(val){
    return(
        <div className="cardmission" >
            <img src={val.img} alt="" />
            <div className="text" >
                <h1>{val.h1} </h1>
                <p>{val.p} </p>
             </div>
        </div>
    )
}
export default MissionCards