import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ item, onVolver, images }) => {
  return (
    <ItemDetail item={item} onVolver={onVolver} images={images} />
  );
};

export default ItemDetailContainer;
