import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';

const ItemDetail = ({ producto, onVolver }) => {
  const { addItem } = useCart();

  if (!producto) {
    return <div>Cargando...</div>;
  }

  const { nombre, descripcion, precio, imagen } = producto;

  const handleAddToCart = (count) => { 
      addItem({ ...producto }, count);
  };   

  return (
    <Card className="bg-light mx-4 my-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body className="text-center">
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>Descripción: {descripcion}</Card.Text>
        <Card.Text>Precio: ${precio}</Card.Text>
        <ItemCount onAdd={handleAddToCart} producto={producto} />
        <Button variant="success" onClick={onVolver}>
          Volver
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;