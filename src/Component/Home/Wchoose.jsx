import React,{useEffect} from "react";
import "./Wchoose.css";


import AOS from 'aos';
import 'aos/dist/aos.css';



const Wchoose = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh(); // Refresh AOS animations after rendering
      }, []);

    return (
        <>
            <div className="section4">
                <h1>Why Choose Online Kawadiwala</h1>
                <div className="section4_card" >
                    <div className="sect4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <div className="circle">
                            <img
                                src="https://cdn-icons-png.freepik.com/256/7591/7591452.png?ga=GA1.1.187478775.1712819250&semt=ais_hybrid"
                                alt="door to door"
                                width="50"
                                height="50"
                            />

                        </div>
                        <h3 style={{fontSize:'2rem'}}>Door to Door</h3>
                        <p style={{fontSize:'1.1rem'}}> Enjoy hassle-free service with our convenient door-to-door pickup and delivery, right at your doorstep.</p>
                    </div>
                    <div className="sect4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <div className="circle">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/5733/5733626.png"
                                alt="Best Rates"
                                width="50"
                                height="50"
                            />
                        </div>
                        <h3 style={{fontSize:'2rem'}}>Best Rates</h3>
                        <p style={{fontSize:'1.1rem'}}>Get the best price for your items with our unbeatable offers, ensuring maximum value every time.</p>
                    </div>
                    <div className="sect4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <div className="circle">
                            <img
                                src="https://img.icons8.com/?size=50&id=3524&format=png"
                                alt="pickup"
                                width="50"
                                height="50"
                            />
                        </div>
                        <h3 style={{fontSize:'2rem'}}>Scedule pickup </h3>
                        <p style={{fontSize:'1.1rem'}}>Schedule your pickup at your convenience through our app or website, and we'll handle the rest with ease.</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Wchoose;
