import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Styles.css';
import ItemDetailContainer from './ItemDetailContainer';

const Item = ({ item, onProductoSeleccionado, images }) => {
  const { title, price, imageKey } = item;

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <Card className="mx-4 my-5" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={images[imageKey]} />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>Precio: ${price}</Card.Text>
          <Button variant="primary" onClick={() => {
            onProductoSeleccionado(item);
            setShowDetails(!showDetails);
          }}>
            {showDetails ? 'Ocultar Detalles' : 'Ver Detalles'}
          </Button>
        </Card.Body>
      </Card>
      {showDetails && <ItemDetailContainer item={item} />}
    </div>
  );
};

export default Item;

