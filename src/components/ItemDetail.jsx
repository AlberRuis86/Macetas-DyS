import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';

const ItemDetail = ({ item, onVolver, images }) => {
  const { addItem, isInCart } = useCart();

  if (!item) {
    return <div>Cargando...</div>;
  }

  const { id, title, description, price, imageKey } = item;

  const handleAddToCart = (count) => {
    if (!isInCart(id)) {
      addItem({ ...item, image: images[imageKey] }, count);
    } else {
      alert(`${title} ya está en el carrito. No se agregó nuevamente.`);
    }
  }; 

  return (
    <Card className="bg-light mx-4 my-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={images[imageKey]} />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>Descripción: {description}</Card.Text>
        <Card.Text>Precio: ${price}</Card.Text>
        <ItemCount onAdd={handleAddToCart} item={item} />
        <Button variant="success" onClick={onVolver}>
          Volver
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;