import React from 'react';
import './Styles.css';
import Item from './Item';

const ItemList = ({ items, onProductoSeleccionado, seleccionCategoria, images }) => {
  const filtroProductos = seleccionCategoria === 'Todas'
    ? items
    : items.filter(item => item.category === seleccionCategoria);
  
  return (
    <div className="d-flex item-list">
      {filtroProductos.map((item) => (
        <Item key={item.id} item={item} onProductoSeleccionado={onProductoSeleccionado} images={images} />
      ))}
    </div>
  );
};
  
export default ItemList;