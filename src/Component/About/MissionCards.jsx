import React, { useEffect } from "react";
import "./MissionCards.css";
import goal from '../../assets/goal1.jpg'
import profile from '../../assets/profile.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const MissionCards = () => {

  useEffect(()=>{
    AOS.init({duration:2000});
    AOS.refresh();
  },[])

  return (
    <>
      <div className="about_sect">
        <div className="about_card">
        <div className="card_content">
            <h1>Our Mission</h1>
            <p>
            At Scrap Hawker, our mission is to create a sustainable future by simplifying the recycling process for individuals and businesses. We aim to reduce waste, promote eco-friendly practices, and provide people with the opportunity to turn their scrap into value.
            </p>
          </div>
          <img data-aos="flip-left" src="https://tse2.mm.bing.net/th?id=OIP.0NaYqqPpXyUf8rCKLV8uSwHaE8&pid=Api&P=0&h=220" alt="Mission" />
      
        </div>

        <div className="about_card">
        <div className="card_content">
            <h1>Our Approach</h1>
            <p>
            We believe in a customer-first approach. Our process is designed to be convenient, transparent, and rewarding. From booking a pickup to receiving payment, we focus on providing a seamless experience.
              </p>
          </div>
          <img data-aos="flip-left" src="https://static.vecteezy.com/system/resources/previews/022/448/291/large_2x/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg" alt="Approach" />
        
        </div>

        <div className="about_card">
        <div className="card_content">
            <h1>Our Vision</h1>
            <p>
            We envision a world where every household and business takes responsibility for their waste and contributes to a circular economy. By making recycling easy, accessible, and profitable, we strive to be at the forefront of a global movement.
            </p>
          </div>
          <img data-aos="flip-left" src="https://tse1.mm.bing.net/th?id=OIP.k99JMRreLIAWiDtj-bzT5gAAAA&pid=Api&P=0&h=220" alt="Vision" />
          
        </div>

        
        <div className="about_card">
        <div className="card_content">
            <h1>Our Goal</h1>
            <p>
            Our primary goal is to make recycling a common practice in every household and business across the country. We aim to become the go-to scrap collection service for individuals, industries, and communities, driving a positive impact on the environment.
            </p>
          </div>
          <img data-aos="flip-left" src={goal} alt="Vision" />
          
        </div>

        
        <div className="about_card">
        <div className="card_content">
            <h1>Our Profile</h1>
            <p>
           Scrap Hawker is a leading scrap collection and recycling company dedicated to providing efficient and eco-friendly waste management solutions.With a focus on customer satisfaction and environmental sustainability, we have quickly become a trusted partner for individuals and businesses alike.
            </p>
          </div>
          <img data-aos="flip-left" src={profile} alt="Vision" />
          
        </div>
      </div>
    </>
  );
};

export default MissionCards;
