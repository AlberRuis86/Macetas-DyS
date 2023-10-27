import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import "./Styles.css";

function CarrouselContainer() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Image className='mi-imagen' src=".\src\assets\pexels-1022922.jpg" alt="imagen" rounded />
          <Carousel.Caption>
            <h3>First</h3>
            <p>Nulla</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='mi-imagen' src=".\src\assets\pexels-9413730.jpg" alt="imagen" rounded />
          <Carousel.Caption>
            <h3>Second</h3>
            <p>Lorem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='mi-imagen' src=".\src\assets\pexels-1108572.jpg" alt="imagen" rounded />  
          <Carousel.Caption>
            <h3>Third</h3>
            <p>
              Praesent
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarrouselContainer;