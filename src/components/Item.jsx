import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Styles.css';

const Item = ({ item, onProductoSeleccionado }) => {
  const { nombre, precio, imagen } = item;

  const handleItemClick = () => {
    onProductoSeleccionado(item);
  };

  return (
    <div className="item" onClick={handleItemClick}>
      <Card className="mx-auto my-4" style={{ width: '18rem', height: '100%' }}>
        <Card.Img variant="top" src={imagen} style={{ objectFit: 'cover', height: '50%' }} />
        <Card.Body className="text-center" style={{ height: '50%' }}>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>Precio: ${precio}</Card.Text>
          <Button variant="warning" onClick={() => onProductoSeleccionado(item)}>
            Ver Detalles
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;