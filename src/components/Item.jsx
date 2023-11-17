import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Styles.css';

const Item = ({ item, onProductoSeleccionado, images, mostrarDetalle }) => {
  const { title, price, imageKey } = item;

  return (
    <div>
      <Card className="mx-auto my-4" style={{ width: '18rem', height: '400px' }}>
        <Card.Img variant="top" src={images[imageKey]} style={{ objectFit: 'cover', height: '60%' }} />
        <Card.Body className="text-center" style={{ height: '40%' }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Precio: ${price}</Card.Text>
          {!mostrarDetalle && (
            <Button variant="warning" onClick={() => onProductoSeleccionado(item)}>
              Ver Detalles
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;