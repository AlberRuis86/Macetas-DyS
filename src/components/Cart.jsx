import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Styles.css';

const Cart = () => {
  const { items, removeItem, clear, getTotalPrice, images } = useCart();

  if (items.length === 0) {
    return (
      <Container className="d-grid justify-content-center align-items-center background-green" fluid style={{ height: "100vh", width: "100vw" }}>
        <h1 className='fw-bolder fs-1'>No hay ítems en tu carrito</h1>
        <Link className='text-decoration-none fs-2 text-center text-warning' to="/">Volver al inicio</Link>
      </Container>
    );
  }

  return (
    <Container className="d-grid justify-content-center align-items-center background-green overflow-x-hidden overflow-y-auto p-4" fluid style={{ height: "100vh", width: "100vw" }}>
      <h1 className='fw-bolder fs-1 mt-4'>Productos en tu Carrito</h1>
      {items.map((item) => (
        <Card key={item.id} className="mb-3">
          <Row>
            <Col md={4}>
              <Card.Img src={images[item.id]} alt={item.title} className="img-fluid" />
            </Col>
            <Col md={8}>
              <Card.Body className='text-center'>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Cantidad: {item.quantity}
                <Card.Text>
                  Precio: ${item.price}
                </Card.Text>
                  <Button variant="danger" onClick={() => removeItem(item.id)}>
                    Eliminar
                  </Button>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
      <h4>Precio Total: ${getTotalPrice()}</h4>
      <Button variant="danger" onClick={clear} style={{ width: '100%' }}>
        Vaciar Carrito
      </Button>
      <Link to="/checkout">
        <Button variant="warning" style={{ width: '100%' }}>
          Terminar mi compra
        </Button>
      </Link>
    </Container>
  );
};

export default Cart;