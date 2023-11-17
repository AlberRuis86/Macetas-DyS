import React from 'react';
import { Container } from 'react-bootstrap';
import './Styles.css';

const Cart = () => {
  return (
    <div>
      <Container
        className="d-grid justify-content-center align-items-center background-green"
        fluid
        style={{ height: "100vh", width: "100vw" }}
      ><h1 className='fw-bolder fs-1'>Productos en tu Carrito</h1>
      </Container>
    </div>
  )
}

export default Cart