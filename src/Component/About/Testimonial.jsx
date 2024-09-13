import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Testimonial.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Testimonial() {
    const box = [
        { img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D', text: ' Amet consectetur Sequi assumenda libero eos tempora corrupti, neque a deserunt minus provident cupiditate!', h1: 'Name Goes ' },
        { img:'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x10000:format=jpg/path/s277021aa972bd28e/image/ia47b79a0b451f0f2/version/1682877542/portrait-en-lumi%C3%A8re-naturelle.jpg', text: ' Amet consectetur Sequi assumenda libero eos tempora corrupti, neque a deserunt minus provident cupiditate!', h1: 'Goes Here' },
        { img:'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/03/1-24.jpg', text: ' Amet consectetur Sequi assumenda libero eos tempora corrupti, neque a deserunt minus provident cupiditate!', h1: 'Name Here' },
        { img:'https://i.pinimg.com/originals/a3/2c/b8/a32cb8bdbda64ad582ffb5cebc4e4e4f.jpg', text: ' Amet consectetur Sequi assumenda libero eos tempora corrupti, neque a deserunt minus provident cupiditate!', h1: 'Name Here' },
        { img:'https://i.pinimg.com/736x/9d/69/ca/9d69ca07b2c212bbaed7231105514cf8.jpg', text: ' Amet consectetur Sequi assumenda libero eos tempora corrupti, neque a deserunt minus provident cupiditate!', h1: 'Name Here' },
    ]
    return (
        <div className='testimonial'>
            <h1 className='h1heading'>Our Team</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
             
                {
                    box.map((val) => {
                        return (
                            <SwiperSlide>
                                  <div className="colorborder" style={{ borderTopLeftRadius: '10vh', borderBottomRightRadius: '10vh',  backgroundColor: 'white', display: 'flex ', justifyContent: 'center', alignItems: 'center' }}>
                                <div className="colorborder" style={{ borderTopLeftRadius: '10vh', borderBottomRightRadius: '10vh',  backgroundColor: '#087373', display: 'flex ', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className="whiteborder" style={{ borderTopLeftRadius: '10vh', borderBottomRightRadius: '10vh', backgroundColor: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                        <div className="innercolorpart" style={{ borderTopLeftRadius: '10vh', borderBottomRightRadius: '10vh', backgroundColor: '#087373', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                            <div className="cir" style={{ height: '10vh', width: '10vh', backgroundColor: "white",  position: 'relative', top: '-30%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                                <img style={{ height: '10vh',border:'5px solid white', width: '10vh' ,borderRadius:'5%'}} src={val.img} alt="" />
                                            </div>
                                            <p style={{ textAlign: 'center', color: 'white', margin: '2vh', fontFamily: 'sans-serif' }}>{val.text} </p>
                                            <h1 style={{ fontSize: '2rem', fontFamily: 'sans-serif', color: 'white' ,textAlign:'center'}}>{val.h1} </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}
