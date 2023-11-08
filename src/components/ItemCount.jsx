import React, { useState } from 'react';
import { Button, Badge, Toast, ToastContainer } from 'react-bootstrap';
import "./Styles.css";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const [showToast, setShowToast] = useState(false);

  const addToCart = () => {
    setShowToast(true);
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
    <div className='bg-black text-center p-2 rounded m-auto'>
      <Button className='mx-2' variant="warning" onClick={increment}>
        +
      </Button>{' '}
      <Badge className='mx-2 p-2' bg="warning" text="dark">
        {count}
      </Badge>
      <Button className='mx-2' variant="warning" onClick={decrement}>
        -
      </Button>{' '}
      <Button className='mx-2' variant="warning" onClick={addToCart}>
        Agregar al Carrito
      </Button>{' '}
      <ToastContainer position="bottom-end">
        <Toast show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto toast-center">Felicitaciones!!!</strong>
          </Toast.Header>
          <Toast.Body>Has agregado {count} productos al carrito.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default ItemCount;
