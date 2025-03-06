import React from 'react';
import './css/style.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './img/carousel-1.jpg';
import img2 from './img/carousel-2.jpg';
import img3 from './img/front.jpeg';
import vid1 from './img/video-1.mp4'
import vid2 from "./img/video-2.mp4"

function Carousels() {
  return (
    <Carousel interval={10000} fade={true} wrap={true} slide={true}>
      {/* <Carousel.Item style={{height:"600px"}} >
        
        <video src={vid1} loop muted autoPlay  />
       
      </Carousel.Item> */}

      <Carousel.Item >
        <div style={{ height: "600px", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
      <video 
        src={vid1} 
        loop 
        muted 
        autoPlay 
        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
      />
    </div>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
