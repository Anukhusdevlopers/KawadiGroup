
import React, { useRef, useState  , useEffect} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faQuoteLeft   } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Testimonial.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

// import required modules
import { FreeMode, Pagination,Navigation ,Autoplay } from 'swiper/modules';

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
         { img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D', text: ' Amet consectetur Sequi assumenda libero eos tempora corrupti, neque a deserunt minus provident cupiditate!  neque a deserunt minus provident cupiditate!', h1: 'Khushboo ' },
        { img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x10000:format=jpg/path/s277021aa972bd28e/image/ia47b79a0b451f0f2/version/1682877542/portrait-en-lumi%C3%A8re-naturelle.jpg', text: ' Amet consectetur Sequi assumenda libero eos tempora corrupti, neque a deserunt minus provident cupiditate!  neque a deserunt minus provident cupiditate!', h1: 'Khushboo' },
        { img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/03/1-24.jpg', text: ' Amet consectetur Sequi assumenda libero eos tempora corrupti, neque a deserunt minus provident cupiditate! neque a deserunt minus provident cupiditate!', h1: 'Khushboo' },
        { img: 'https://i.pinimg.com/originals/a3/2c/b8/a32cb8bdbda64ad582ffb5cebc4e4e4f.jpg', text: ' Amet consectetur Sequi assumenda libero eos tempora corrupti, neque a deserunt minus provident cupiditate! neque a deserunt minus provident cupiditate!', h1: 'Khushboo' },
        { img: 'https://i.pinimg.com/736x/9d/69/ca/9d69ca07b2c212bbaed7231105514cf8.jpg', text: ' Amet consectetur Sequi assumenda libero eos tempora corrupti, neque a deserunt minus provident cupiditate! neque a deserunt minus provident cupiditate!', h1: 'Khushboo' },
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
                modules={[FreeMode, Pagination,Autoplay]}
                className="mySwiper"
            >

                {
                    box.map((val) => {
                        return (
                            <SwiperSlide>
                                <div className="testimonialcard" data-aos="zoom-in">
                                  <div className='profilecontainer' style={{}}>
                                    {/* <FontAwesomeIcon icon={faQuoteLeft} /> */}
                                    <img src="https://cdn-icons-png.flaticon.com/512/4992/4992676.png" alt="" style={{height:'8vh',width:'8vh',rotate:'180deg'}}/>
                                    <img className='profileimg' style={{ border: '5px solid white',  borderRadius: '50%' }} src={val.img} alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/4992/4992676.png" alt="" style={{height:'8vh',width:'8vh'}}/>
                                  </div>
                                    <p style={{ textAlign: 'center', color: '#fff', margin: '0 2vh 2vh', fontFamily: 'sans-serif' }}>{val.text} </p>
                                    <h1 style={{ fontSize: '2rem', fontFamily: 'sans-serif', color: '#fff', textAlign: 'center' }}>{val.h1} </h1>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}
