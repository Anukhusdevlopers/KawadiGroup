import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/footer';
import './Ratelist.css';

const Ratelist = () => {
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
    electronics: [
      { id: 8, img: 'https://tse1.mm.bing.net/th?id=OIP.NYQfKLzl1HccO-XEGUb68AHaC4&pid=Api&P=0&h=220', name: 'Phone', rate: '14/kg' },
      { id: 9, img: 'https://www.familyhandyman.com/wp-content/uploads/2018/01/shutterstock_151658033.jpg?fit=696%2C696', name: 'Tv', rate: '14/kg' },
      { id: 10, img: 'https://thumbs.dreamstime.com/b/recycling-industry-old-computer-electronic-waste-container-old-computer-electronic-waste-168791161.jpg', name: 'Wire', rate: '14/kg' },
      { id: 11, img: 'https://blogs.ntu.edu.sg/hp3203-2017-19/files/2017/04/device-recycling-16nlq0f.jpg', name: 'Other', rate: '14/kg' },
    ],
    metals: [
      { id: 12, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStC9jFCYMx1-sEvcFF3B0Ml1h_DB_q9cw4tg&s', name: 'Iron', rate: '14/kg' },
      { id: 13, img: 'https://static.vecteezy.com/system/resources/thumbnails/008/025/313/small_2x/steel-scrap-materials-recycling-aluminum-chip-waste-after-machining-metal-parts-on-a-cnc-lathe-closeup-twisted-spiral-steel-shavings-small-roughness-sharpness-free-photo.jpg', name: 'Steel', rate: '14/kg' },
      { id: 14, img: 'https://5.imimg.com/data5/SELLER/Default/2023/10/349254107/LS/NU/OC/3300632/copper-scrap-500x500.png', name: 'Copper', rate: '14/kg' },
      { id: 15, img: 'https://img3.exportersindia.com/product_images/bc-full/2022/3/9978238/brass-scrap-1646985506-6239816.jpeg', name: 'Brass', rate: '14/kg' },
    ],
    vehicle: [
      { id: 16, img: 'https://tse2.mm.bing.net/th?id=OIP.5LHM_ZxQZwN5wCQAgeoV-gHaE8&pid=Api&P=0&h=220', name: 'Vehicle', rate: '14/kg' },
      { id: 17, img: 'https://tse2.mm.bing.net/th?id=OIP.xRA71wzahNTiPp1OGUOqwwHaFb&pid=Api&P=0&h=220', name: 'Vehicle', rate: '14/kg' },
      { id: 18, img: 'https://thumbs.dreamstime.com/b/pile-discarded-car-parts-tires-demonstrating-environmental-impact-automobile-waste-ai-generation-271597882.jpg', name: 'Vehicle', rate: '14/kg' },
      { id: 19, img: 'https://tse2.mm.bing.net/th?id=OIP.Bhr6gLV-fN_sLONRGUZ9NgHaFc&pid=Api&P=0&h=220', name: 'Vehicle', rate: '14/kg' },
    ],
  };

  const allData = [
    ...boxdata.papers,
    ...boxdata.plastic,
    ...boxdata.electronics,
    ...boxdata.metals,
    ...boxdata.vehicle,
  ];

  const [displayData, setDisplayData] = useState(allData);
  const [currentIndex, setCurrentIndex] = useState(0);

  const boxContainerRef = useRef(null);

  const showAll = () => setDisplayData(allData);
  const showPapers = () => setDisplayData(boxdata.papers);
  const showPlastic = () => setDisplayData(boxdata.plastic);
  const showElectronics = () => setDisplayData(boxdata.electronics);
  const showMetals = () => setDisplayData(boxdata.metals);
  const showVehicle = () => setDisplayData(boxdata.vehicle);

  const visibleCards =
    window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + visibleCards >= displayData.length
          ? 0
          : prevIndex + visibleCards
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [displayData, visibleCards]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? displayData.length - visibleCards
        : prevIndex - visibleCards
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards >= displayData.length
        ? 0
        : prevIndex + visibleCards
    );
  };

  return (
    <>
      <Navbar userdisplay="none" />

      <div className="ratelist">
        <h1>Scrap Rates</h1>
        <div className="buttoncontainer">
          <button onClick={showAll}>All</button>
          <button onClick={showPapers}>Papers</button>
          <button onClick={showPlastic}>Plastic</button>
          <button onClick={showMetals}>Metal</button>
          <button onClick={showElectronics}>Electronics</button>
          <button onClick={showVehicle}>Vehicle</button>
        </div>

        <div className="slider">
          <button className="slider-btn left-btn" onClick={handlePrev}>
            &#9664;
          </button>
          <div className="boxcontainer" ref={boxContainerRef}>
            {displayData.slice(currentIndex, currentIndex + visibleCards).map((val) => (
              <div className="box" key={val.id}>
                <img src={val.img} alt={val.name} />
                <h4>{val.name}</h4>
                <h5>Rs {val.rate}</h5>
              </div>
            ))}
          </div>
          <button className="slider-btn right-btn" onClick={handleNext}>
            &#9654;
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Ratelist;
