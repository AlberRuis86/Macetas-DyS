import React from 'react';
import { Container } from 'react-bootstrap';
import './Styles.css';
import CarrouselContainer from './Carrousel';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <Container
        className="d-grid justify-content-center align-items-center background-green"
        fluid
        style={{ height: "100vh", width: "100vw" }}
      >
        <h2 className="text-center mt-4 primary-text-color">{greeting}</h2>
        <CarrouselContainer />
      </Container>
    </div>
  );
}

export default ItemListContainer;



