import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const { calcItemsQty, items } = useCart();

  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <Link className='text-warning' to="/cart">
        <FaShoppingCart />
      </Link>
      <Badge className='bg-success' pill variant="info">
        {calcItemsQty()}
      </Badge>
    </div>
  );
};

export default CartWidget;