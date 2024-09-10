import React,{useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';


import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import slider4 from "../../assets/slider4.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Slider() {
    const [showForm, setShowForm] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const handleFormOpen = () => {
        setShowForm(true);
        setShowThankYou(false);
    };

    const handleFormClose = () => {
        setShowForm(false);
        setShowThankYou(false);
    };

    const handleSubmit = () => {
        setShowForm(false);
        setShowThankYou(true);
    };

    // Auto-close Thank You popup after 2 seconds
    useEffect(() => {
        if (showThankYou) {
            const timer = setTimeout(() => {
                setShowThankYou(false); // Close Thank You popup after 2 seconds
            }, 1000);

            // Cleanup the timer when component unmounts or showThankYou changes
            return () => clearTimeout(timer);
        }
    }, [showThankYou]);

    //slider images
    const images = [{ img: slider1 ,color:'#333' },
         { img: slider2 ,color:'#eee'},
          { img: slider3,color:'#fff' }, 
          { img: slider4,color:'#333' }
        ];

    return (
        <>
            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    images.map((src) => {
                        return (
                            <>
                                <SwiperSlide>
                                    <img src={src.img} alt="" />
                                    <div className="text-overlay">
                                        <h3 style={{color:src.color}} className="heading">Online Scrap Pickup Service</h3>
                                        <h1 style={{color:src.color}} className="subheading">Online Kabadiwala</h1>
                                        <h4 style={{color:src.color}} className="paragraph">
                                            Online Kawadiwala, we provide our service to people at their place, we pickup scrap from your home, office, or workplace at the best price, which makes our customers happy.
                                        </h4>
                                        <button className='book_btn' onClick={handleFormOpen}>Book Now</button>
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })
                }
            </Swiper>

            {showForm && (
                <div className="popup-form">
                    <h2>Pickup Request</h2>
                    <div className="input">
                        <input type="text" placeholder='Your Name' />
                        <input type="number" placeholder='Mobile No.' />
                    </div>
                    <div className="input">
                        <input type="text" placeholder='Address' />
                        <input type="number" placeholder='Pin Code' />
                    </div>
                    <div className="input">
                        <input type="email" placeholder='Email' />
                        <input type="date" placeholder='Pickup Date' style={{ width: "100%" }} />
                    </div>
                    <div className="input">
                        <label><input type="checkbox" /> Sell</label>
                        <label><input type="checkbox" /> Donate</label>
                    </div>
                    <div className="input">
                        <select>
                            <option>Type of Scrap</option>
                            <option>Newspaper</option>
                            <option>Cardboard</option>
                            <option>Books</option>
                            <option>Plastic</option>
                            <option>Iron</option>
                            <option>Copper</option>
                            <option>Aluminium</option>
                        </select>
                    </div>
                    <div className="input">
                        <button onClick={handleSubmit} className='submit-btn'>Submit</button>
                        <button onClick={handleFormClose} className='close-btn'>Close</button>
                    </div>
                </div>
            )}

            {showThankYou && (
                <div className="thank-you-popup">
                    <h2>Thank You !!</h2>
                    <h4 onClick={handleFormClose}>Go to Homepage</h4>
                </div>
            )}
        </>
    );
}

export default Slider