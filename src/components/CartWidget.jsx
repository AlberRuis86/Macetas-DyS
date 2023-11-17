import React from 'react'
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <div>
         <Link className='text-warning' to="/cart" >
            <FaShoppingCart />
         </Link>
         
         <Badge className='bg-success' pill variant="info">5</Badge>
    </div>
  )
}

export default CartWidget