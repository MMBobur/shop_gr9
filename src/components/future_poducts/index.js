import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Img1 from "../../assets/img/carousel-1.webp"
import Img2 from "../../assets/img/carousel-2.webp"
import Img3 from "../../assets/img/carousel-3.webp"
import Img4 from "../../assets/img/carousel-4.webp"
import Img5 from "../../assets/img/carousel-5.webp"
import Img6 from "../../assets/img/carousel-6.webp"
import Img7 from "../../assets/img/carousel-7.webp"
import Img8 from "../../assets/img/carousel-8.webp"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function App() {
  const [items, setItems] = useState([
    <img src={Img1} width="100%" height="100%" />,
    <img src={Img2} width="100%" height="100%" />,
    <img src={Img3} width="100%" height="100%" />,
    <img src={Img4} width="100%" height="100%" />,
    <img src={Img5} width="100%" height="100%" />,
    <img src={Img6} width="100%" height="100%" />,
    <img src={Img7} width="100%" height="100%" />,
    <img src={Img8} width="100%" height="100%" />
  ]);


  return (
    <div className="App">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
