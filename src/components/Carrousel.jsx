import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import "./Styles.css";
import imagenProducto1 from '../assets/producto1.png';
import imagenProducto1_1 from '../assets/producto1_1.png';
import imagenProducto1_2 from '../assets/producto1_2.png';
import imagenProducto2 from '../assets/producto2.png';
import imagenProducto2_1 from '../assets/producto2_1.png';
import imagenProducto2_2 from '../assets/producto2_2.png';
import imagenProducto3 from '../assets/producto3.png';
import imagenProducto3_1 from '../assets/producto3_1.png';
import imagenProducto3_2 from '../assets/producto3_2.png';

function CarrouselContainer() {
  return (
    <div>
      <Carousel className='mi-carrousel bg-success rounded' data-bs-theme="dark">
        <Carousel.Item>
          <Image className='mi-imagen' src={imagenProducto1} alt="imagen" rounded />
          <Carousel.Caption>
            <h3>Categoria 1</h3>
          </Carousel.Caption>
          <Image className='mi-imagen' src={imagenProducto1_1} alt="imagen" rounded />

          <Image className='mi-imagen' src={imagenProducto1_2} alt="imagen" rounded />  
 
        </Carousel.Item>
        <Carousel.Item>
          <Image className='mi-imagen' src={imagenProducto2} alt="imagen" rounded />
          <Carousel.Caption>
            <h3>Categoria 2</h3>
          </Carousel.Caption>
          <Image className='mi-imagen' src={imagenProducto2_1} alt="imagen" rounded />  

          <Image className='mi-imagen' src={imagenProducto2_2} alt="imagen" rounded />  
 
        </Carousel.Item>
        <Carousel.Item>
          <Image className='mi-imagen' src={imagenProducto3} alt="imagen" rounded />  
          <Carousel.Caption>
            <h3>Categoria 3</h3>
          </Carousel.Caption>
          <Image className='mi-imagen' src={imagenProducto3_1} alt="imagen" rounded />  

          <Image className='mi-imagen' src={imagenProducto3_2} alt="imagen" rounded />  

        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarrouselContainer;