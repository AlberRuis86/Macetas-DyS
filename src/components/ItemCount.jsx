import React, { useState } from 'react';
import { Button, Badge, Toast, ToastContainer } from 'react-bootstrap';
import "./Styles.css";

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const addToCart = () => {
    console.log('Agregado al carrito desde ItemCount:', count);
    setShowToast(true);
    onAdd(count);
  };  

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <div className='text-center my-1 rounded'>
      <Button className='' variant="warning" onClick={increment}>
        +
      </Button>{' '}
      <Badge className='' bg="warning" text="dark">
        {count}
      </Badge>
      <Button className='' variant="warning" onClick={decrement}>
        -
      </Button>{' '}
      <Button className='' variant="warning" onClick={addToCart}>
        Agregar al Carrito
      </Button>{' '}
      <ToastContainer position="bottom-end">
        <Toast show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto toast-center">Felicitaciones!!!</strong>
          </Toast.Header>
          <Toast.Body>Has agregado {count} productos al carrito.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default ItemCount;