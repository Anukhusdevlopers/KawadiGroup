import React, { useState } from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/footer'
import './Ratelist.css'

const Ratelist = () => {
    const boxdata = [
        [
            { id: 1, img: 'https://smartai-blog.com/content/images/size/w960/2021/05/news_img.jpeg', name: 'Newspaper', rate: '14/kg' },
            { id: 2, img: 'https://img.freepik.com/premium-photo/books-table-library_1002726-171.jpg', name: 'Books', rate: '14/kg' },
            { id: 3, img: 'https://thumbs.dreamstime.com/b/stacks-paper-cardboard-ready-to-be-recycled-stacks-paper-cardboard-ready-to-be-recycled-132652311.jpg', name: 'Card Board', rate: '14/kg' },
            { id: 4, img: 'https://img3.exportersindia.com/product_images/bc-full/2019/10/6338288/a4-size-copy-paper-1571135958-5117099.jpg', name: 'A4 Paper', rate: '14/kg' },
            { id: 5, img: 'https://5.imimg.com/data5/FC/PC/UM/SELLER-55817076/magazine-scrap-sheet.jpg', name: 'Magazines', rate: '14/kg' },
            { id: 1, img: 'https://tiimg.tistatic.com/fp/1/008/272/-plastic-scrape-bottle-710.jpg', name: ' Bottle', rate: '14/kg' },
            { id: 2, img: 'https://content.jdmagicbox.com/quickquotes/images_main/plastic-scrape-801146903-5c7ijsup.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit', name: 'Plastic', rate: '14/kg' },
            { id: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStC9jFCYMx1-sEvcFF3B0Ml1h_DB_q9cw4tg&s', name: 'Iron', rate: '14/kg' },
            { id: 2, img: 'https://static.vecteezy.com/system/resources/thumbnails/008/025/313/small_2x/steel-scrap-materials-recycling-aluminum-chip-waste-after-machining-metal-parts-on-a-cnc-lathe-closeup-twisted-spiral-steel-shavings-small-roughness-sharpness-free-photo.jpg', name: 'Steel', rate: '14/kg' },
            { id: 4, img: 'https://5.imimg.com/data5/SELLER/Default/2023/10/349254107/LS/NU/OC/3300632/copper-scrap-500x500.png', name: 'Copper', rate: '14/kg' },
            { id: 5, img: 'https://img3.exportersindia.com/product_images/bc-full/2022/3/9978238/brass-scrap-1646985506-6239816.jpeg', name: 'Brass', rate: '14/kg' },

        ],
    ]

    
    const [paperhide,setPaperhide] =useState('initial');
    const [plastichide,setPlastichide] =useState('initial');
    const [metalhide,setMetalhide] =useState('initial');

    function papershow() {
        setPlastichide('none');
        setMetalhide('none');
        setPaperhide('initial');
    }

    
    function plasticshow() {
        setPaperhide('none');
        setPlastichide('initial');
        setMetalhide('none');
    }

    
    function metalshow() {
        setPlastichide('none');
        setPaperhide('none');
        setMetalhide('initial');
    }
    
    return (
        <>     
         <Navbar userdisplay="none" />

        <div className='ratelist'>
            <div>
                <h1> Scrap Rates</h1>
                <div className="buttoncontainer">
                    <button onClick={papershow}>Papers</button>
                    <button onClick={plasticshow} >Plastic</button>
                    <button onClick={metalshow}>Metal</button>
                    <button >Electronics</button>
                    <button >E-Waste</button>
                    <button >Vechile</button>
                </div>
                <div className="boxcontainer" style={{display: '' }}>
                    {
                        boxdata[0].map((val) => {
                            return (
                                <div className="box" id={val.id}>
                                    <img src={val.img} alt="" />
                                    <h4>{val.name} </h4>
                                    <h5>Rs {val.rate} </h5>
                                </div>
                            )
                        })
                    }
                </div>

            </div >
            <Footer/>
        </div >
        </>
  
    )
}

// function Boxcontainer(box) {
//     const boxdata = [
//         [
//             { id: 1, img: 'https://smartai-blog.com/content/images/size/w960/2021/05/news_img.jpeg', name: 'Newspaper', rate: '14/kg' },
//             { id: 2, img: 'https://img.freepik.com/premium-photo/books-table-library_1002726-171.jpg', name: 'Books', rate: '14/kg' },
//             { id: 3, img: 'https://thumbs.dreamstime.com/b/stacks-paper-cardboard-ready-to-be-recycled-stacks-paper-cardboard-ready-to-be-recycled-132652311.jpg', name: 'Card Board', rate: '14/kg' },
//             { id: 4, img: 'https://img3.exportersindia.com/product_images/bc-full/2019/10/6338288/a4-size-copy-paper-1571135958-5117099.jpg', name: 'A4 Paper', rate: '14/kg' },
//             { id: 5, img: 'https://5.imimg.com/data5/FC/PC/UM/SELLER-55817076/magazine-scrap-sheet.jpg', name: 'Magazines', rate: '14/kg' },
//         ],
//         [
//             { id: 1, img: 'https://tiimg.tistatic.com/fp/1/008/272/-plastic-scrape-bottle-710.jpg', name: ' Bottle', rate: '14/kg' },
//             { id: 2, img: 'https://content.jdmagicbox.com/quickquotes/images_main/plastic-scrape-801146903-5c7ijsup.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit', name: 'Plastic', rate: '14/kg' },
//         ],
//         [
//             { id: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStC9jFCYMx1-sEvcFF3B0Ml1h_DB_q9cw4tg&s', name: 'Newspaper', rate: '14/kg' },
//             { id: 2, img: 'https://static.vecteezy.com/system/resources/thumbnails/008/025/313/small_2x/steel-scrap-materials-recycling-aluminum-chip-waste-after-machining-metal-parts-on-a-cnc-lathe-closeup-twisted-spiral-steel-shavings-small-roughness-sharpness-free-photo.jpg', name: 'Books', rate: '14/kg' },
//             { id: 3, img: 'https://thumbs.dreamstime.com/b/stacks-paper-cardboard-ready-to-be-recycled-stacks-paper-cardboard-ready-to-be-recycled-132652311.jpg', name: 'Card Board', rate: '14/kg' },
//             { id: 4, img: 'https://5.imimg.com/data5/SELLER/Default/2023/10/349254107/LS/NU/OC/3300632/copper-scrap-500x500.png', name: 'A4 Paper', rate: '14/kg' },
//             { id: 5, img: 'https://img3.exportersindia.com/product_images/bc-full/2022/3/9978238/brass-scrap-1646985506-6239816.jpeg', name: 'Magazines', rate: '14/kg' },
//         ]
//     ]
//     return (
//         <div className="boxcontainer" style={{ visibility: '' }}>
//             {
//                 boxdata[box.boxno].map((val) => {
//                     return (
//                         <div className="box" id={val.id}>
//                             <img src={val.img} alt="" />
//                             <h4>{val.name} </h4>
//                             <h5>Rs {val.rate} </h5>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

export default Ratelist