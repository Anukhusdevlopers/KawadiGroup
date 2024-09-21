import React from 'react'
import './Blog.css'
import img1 from '../../assets/slider4.jpg'

const Blog = () => {

    const blogdata = [
        {img:'https://katanamrp.com/wp-content/uploads/2023/03/shutterstock_621375611-scaled.jpg',heading:'Save Forest', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia totam dolor, explicabo veniam amet quis quod et molestias dignissimos?',date:'Fri 15 Aug, 2024'},
        {img:'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2Vjb3N5c3RlbS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==',heading:'Eco System', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia totam dolor, explicabo veniam amet quis quod et molestias dignissimos?',date:'Fri 15 Aug, 2024'},
        {img:'https://katanamrp.com/wp-content/uploads/2023/03/shutterstock_621375611-scaled.jpg',heading:'Save Forest', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia totam dolor, explicabo veniam amet quis quod et molestias dignissimos?',date:'Fri 15 Aug, 2024'},
        {img:'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2Vjb3N5c3RlbS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==',heading:'Eco System', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia totam dolor, explicabo veniam amet quis quod et molestias dignissimos?',date:'Fri 15 Aug, 2024'},
        {img:'https://katanamrp.com/wp-content/uploads/2023/03/shutterstock_621375611-scaled.jpg',heading:'Save Forest', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia totam dolor, explicabo veniam amet quis quod et molestias dignissimos?',date:'Fri 15 Aug, 2024'},
        {img:'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2Vjb3N5c3RlbS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==',heading:'Eco System', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia totam dolor, explicabo veniam amet quis quod et molestias dignissimos?',date:'Fri 15 Aug, 2024'},
   
    ]

  return (
    <>
        <div className="blogpage">
            <h1><span>Our Blogs</span></h1>
            <div className="blogcontainer">
                {
                    blogdata.map((val)=>{
                        return(
                            <div className="blogcard">
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