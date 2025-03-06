import React from 'react';
import './css/style.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './img/carousel-1.jpg';
import img2 from './img/carousel-2.jpg';
import img3 from './img/front.jpeg';

function Carousels() {
  return (
    <Carousel interval={4000} fade={true} wrap={true} slide={true}>
      <Carousel.Item >
        <img src={img1} className="d-block w-100" alt="First slide" />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img2} className="d-block w-100" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img3} className="d-block w-100" alt="Third slide" />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
