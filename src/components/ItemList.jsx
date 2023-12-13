import React, { useState } from 'react';
import './Styles.css';
import Item from './Item';
import ItemDetailContainer from './ItemDetailContainer';
import { Row, Col } from 'react-bootstrap';

const ItemList = ({ items, categoriaSeleccionada }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const selectSelect = (product) => {
    setProductoSeleccionado(product);
  };

  const volverALista = () => {
    setProductoSeleccionado(null);
  };

  if (productoSeleccionado) {
    return (
      <div className="d-flex justify-content-center">
        <ItemDetailContainer item={productoSeleccionado} onVolver={volverALista} />
      </div>
    );
  }

  const productosFiltrados = categoriaSeleccionada
    ? items.filter(item => item.categoria === categoriaSeleccionada)
    : items;

  return (
    <div
      className="overflow-x-hidden overflow-y-auto"
      style={{ maxHeight: "calc(100vh - 100px)" }}
    >
      <Row className="justify-content-center">
        {productosFiltrados.map((item) => (
          <Col key={item.id} >
            <Item
              item={item}
              onProductoSeleccionado={selectSelect}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemList;