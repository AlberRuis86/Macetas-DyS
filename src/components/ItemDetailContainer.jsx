import React from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ item, onVolver, images }) => {

  const { id } = useParams();

  return (
    <ItemDetail id={id} item={item} onVolver={onVolver} images={images} />
  );
};

export default ItemDetailContainer;
