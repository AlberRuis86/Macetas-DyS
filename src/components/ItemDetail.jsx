import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';

const ItemDetail = ({ item, onVolver, images }) => {

  if (!item) {
    return <div>Cargando...</div>;
  }

  const { title, description, price, imageKey } = item;

  return (
    <Card className="bg-light mx-4 my-5" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images[imageKey]}  />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>Descripción: {description}</Card.Text>
        <Card.Text>Precio: ${price}</Card.Text>
        <ItemCount />
        <Button variant="success" onClick={onVolver}>
         Volver
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;