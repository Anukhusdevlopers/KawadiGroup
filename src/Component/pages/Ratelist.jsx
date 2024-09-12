import React, { useState } from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/footer';
import './Ratelist.css';

const Ratelist = () => {
  // Categorize the data
  const boxdata = {
    papers: [
      { id: 1, img: 'https://smartai-blog.com/content/images/size/w960/2021/05/news_img.jpeg', name: 'Newspaper', rate: '14/kg' },
      { id: 2, img: 'https://img.freepik.com/premium-photo/books-table-library_1002726-171.jpg', name: 'Books', rate: '14/kg' },
      { id: 3, img: 'https://thumbs.dreamstime.com/b/stacks-paper-cardboard-ready-to-be-recycled-stacks-paper-cardboard-ready-to-be-recycled-132652311.jpg', name: 'Card Board', rate: '14/kg' },
      { id: 4, img: 'https://img3.exportersindia.com/product_images/bc-full/2019/10/6338288/a4-size-copy-paper-1571135958-5117099.jpg', name: 'A4 Paper', rate: '14/kg' },
      { id: 5, img: 'https://5.imimg.com/data5/FC/PC/UM/SELLER-55817076/magazine-scrap-sheet.jpg', name: 'Magazines', rate: '14/kg' },
    ],
    plastic: [
      { id: 6, img: 'https://tiimg.tistatic.com/fp/1/008/272/-plastic-scrape-bottle-710.jpg', name: 'Bottle', rate: '14/kg' },
      { id: 7, img: 'https://content.jdmagicbox.com/quickquotes/images_main/plastic-scrape-801146903-5c7ijsup.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit', name: 'Plastic', rate: '14/kg' },
    ],
    metals: [
      { id: 8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStC9jFCYMx1-sEvcFF3B0Ml1h_DB_q9cw4tg&s', name: 'Iron', rate: '14/kg' },
      { id: 9, img: 'https://static.vecteezy.com/system/resources/thumbnails/008/025/313/small_2x/steel-scrap-materials-recycling-aluminum-chip-waste-after-machining-metal-parts-on-a-cnc-lathe-closeup-twisted-spiral-steel-shavings-small-roughness-sharpness-free-photo.jpg', name: 'Steel', rate: '14/kg' },
      { id: 10, img: 'https://5.imimg.com/data5/SELLER/Default/2023/10/349254107/LS/NU/OC/3300632/copper-scrap-500x500.png', name: 'Copper', rate: '14/kg' },
      { id: 11, img: 'https://img3.exportersindia.com/product_images/bc-full/2022/3/9978238/brass-scrap-1646985506-6239816.jpeg', name: 'Brass', rate: '14/kg' },
    ],
  };

  const allData = [...boxdata.papers, ...boxdata.plastic, ...boxdata.metals];

  const [displayData, setDisplayData] = useState(allData);

  const showAll = () => setDisplayData(allData);
  const showPapers = () => setDisplayData(boxdata.papers);
  const showPlastic = () => setDisplayData(boxdata.plastic);
  const showMetals = () => setDisplayData(boxdata.metals);

  return (
    <>
      <Navbar userdisplay="none" />

      <div className='ratelist'>
        <div>
          <h1>Scrap Rates</h1>
          <div className="buttoncontainer">
            <button onClick={showAll}>All</button>
            <button onClick={showPapers}>Papers</button>
            <button onClick={showPlastic}>Plastic</button>
            <button onClick={showMetals}>Metal</button>
            <button>Electronics</button>
            <button>E-Waste</button>
            <button>Vehicle</button>
          </div>

          <div className="boxcontainer">
            {displayData.map((val) => (
              <div className="box" key={val.id}>
                <img src={val.img} alt={val.name} />
                <h4>{val.name}</h4>
                <h5>Rs {val.rate}</h5>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Ratelist;
