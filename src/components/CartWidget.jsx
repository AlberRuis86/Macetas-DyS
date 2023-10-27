import React from 'react'
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div>
         <FaShoppingCart />
         <Badge pill variant="info">5</Badge>
    </div>
  )
}

export default CartWidget