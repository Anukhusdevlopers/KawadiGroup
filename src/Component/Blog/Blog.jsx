import React,{useEffect} from 'react'
import './Blog.css'
import img1 from '../../assets/slider4.jpg'


import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {

    useEffect(() => {
        AOS.init({ duration: 3000 });
        AOS.refresh(); // Refresh AOS animations after rendering
      }, []);

    const blogdata = [
        {img:'https://katanamrp.com/wp-content/uploads/2023/03/shutterstock_621375611-scaled.jpg',heading:'Save Forest', text:'In today’s world, waste management is a growing concern. Discover why recycling your scrap not only helps reduce waste but also conserves natural resources and fights climate change. ',date:'Fri 15 Aug, 2024'},
        {img:'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2Vjb3N5c3RlbS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==',heading:'Eco System', text:' This article explains the harmful effects of improper e-waste disposal and offers tips on how to safely recycle electronics to protect the environment.',date:'Fri 15 Aug, 2024'},
        {img:'https://katanamrp.com/wp-content/uploads/2023/03/shutterstock_621375611-scaled.jpg',heading:'Save Forest', text:'In today’s world, waste management is a growing concern. Discover why recycling your scrap not only helps reduce waste but also conserves natural resources and fights climate change. ',date:'Fri 15 Aug, 2024'},
        {img:'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2Vjb3N5c3RlbS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==',heading:'Eco System', text:' This article explains the harmful effects of improper e-waste disposal and offers tips on how to safely recycle electronics to protect the environment.',date:'Fri 15 Aug, 2024'},
        {img:'https://katanamrp.com/wp-content/uploads/2023/03/shutterstock_621375611-scaled.jpg',heading:'Save Forest', text:'In today’s world, waste management is a growing concern. Discover why recycling your scrap not only helps reduce waste but also conserves natural resources and fights climate change. ',date:'Fri 15 Aug, 2024'},
        {img:'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2Vjb3N5c3RlbS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==',heading:'Eco System', text:' This article explains the harmful effects of improper e-waste disposal and offers tips on how to safely recycle electronics to protect the environment.',date:'Fri 15 Aug, 2024'},
      
    ]

  return (
    <>
        <div className="blogpage">
            {/* <h1><span>Our Blogs</span></h1> */}
            <div className="blogcontainer">
                {
                    blogdata.map((val)=>{
                        return(
                            <div className="blogcard" data-aos="zoom-in">
                            <img src={val.img} alt="" />
                            <h2>{val.heading} </h2>
                            <p>{val.text} </p>
                            <h4 className="date">{val.date} </h4>
                        </div>
                        )
                    })
                }

                {/* <div className="blogcard">
                    <img src={img1} alt="" />
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia totam dolor, explicabo veniam amet quis quod et molestias dignissimos?</p>
                    <h4 className="date">Wed Sep 22 ,2024</h4>
                </div> */}
                {/* <div className="blogcard">
                    <img src={img1} alt="" />
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia totam dolor, explicabo veniam amet quis quod et molestias dignissimos?</p>
                    <h4 className="date">Wed Sep 22 ,2024</h4>
                </div>
                <div className="blogcard">
                    <img src={img1} alt="" />
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia totam dolor, explicabo veniam amet quis quod et molestias dignissimos?</p>
                    <h4 className="date">Wed Sep 22 ,2024</h4>
                </div>
                <div className="blogcard">
                    <img src={img1} alt="" />
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia totam dolor, explicabo veniam amet quis quod et molestias dignissimos?</p>
                    <h4 className="date">Wed Sep 22 ,2024</h4>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Blog