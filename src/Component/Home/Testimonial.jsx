
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import '@fortawesome/fontawesome-free/css/all.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Testimonial.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh(); // Refresh AOS animations after rendering
  }, []);

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;

      if (width > 1500) {
        setSlidesPerView(3);
      } else if (width > 1250) {
        setSlidesPerView(2);
      } else if (width > 650) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(1);
      }
    };

    // Call the function initially to set the slidesPerView based on the initial window width
    updateSlidesPerView();

    // Add event listener for window resize
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  const box = [
    {
      id: '1',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
      text: ' I’ve been using Scrap Hawker for months now, and their service is always fast and reliable. I love how easy it is to get paid for my scrap!',
      h1: 'Aditi',
      location: 'Delhi'
    },
    {
      id: '2',
      img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      text: 'They make recycling so convenient, and I feel great knowing I’m contributing to the environment. Highly recommend!',
      h1: 'Rahul',
      location: 'Noida'
    },
    {
      id: '3',
      img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/03/1-24.jpg',
      text: 'I had a huge pile of scrap sitting in my garage for months. Scrap Hawker made it so easy to get rid of it! ',
      h1: 'Manish',
      location: 'Gurugram'
    }, {
      id: '4',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
      text: ' I’ve been using Scrap Hawker for months now, and their service is always fast and reliable. I love how easy it is to get paid for my scrap!',
      h1: 'Aditi',
      location: 'Delhi'
    },
    {
      id: '5',
      img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      text: 'They make recycling so convenient, and I feel great knowing I’m contributing to the environment. Highly recommend!',
      h1: 'Rahul',
      location: 'Noida'
    },
    {
      id: '6',
      img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/03/1-24.jpg',
      text: 'I had a huge pile of scrap sitting in my garage for months. Scrap Hawker made it so easy to get rid of it! ',
      h1: 'Manish',
      location: 'Gurugram'
    },
  ]

  return (

    <div className='Testimonial'>
      <h1 className='testimonialheading'>Testimonial</h1>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={slidesPerView}

        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >

        {
          box.map((val) => {
            return (
              <SwiperSlide key={val.id}>
                <div className="testimonialcard" data-aos="zoom-in">
                  <div className='profilecontainer' style={{}}>
                    {/* <FontAwesomeIcon icon={faQuoteLeft} /> */}
                    <i className="fas fa-quote-left fa-3x" />

                    <img className='profileimg' style={{ border: '5px solid white', borderRadius: '50%' }} src={val.img} alt="" />
                    <i className="fa-solid fa-quote-right fa-3x" ></i>
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/4992/4992676.png" alt="" style={{height:'8vh',width:'8vh'}}/> */}
                  </div>
                  <p style={{ textAlign: 'center', color: '#103810', margin: '0 2vh 2vh', fontFamily: 'sans-serif' }}>{val.text} </p>
                  <h1 style={{ fontSize: '2rem', fontFamily: 'sans-serif', color: '#103810', textAlign: 'center' }}>{val.h1}, {val.location} </h1>

                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}
