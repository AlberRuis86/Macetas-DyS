import React, { useState } from 'react';
import './Styles.css';
import Item from './Item';
import ItemDetailContainer from './ItemDetailContainer';
import { Row, Col } from 'react-bootstrap';

const ItemList = ({ items, categoriaSeleccionada, images }) => {
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
        <ItemDetailContainer item={productoSeleccionado} onVolver={volverALista} images={images} />
      </div>
    );
  }

  const productosFiltrados = categoriaSeleccionada
    ? items.filter(item => item.category === categoriaSeleccionada)
    : items;

  return (
    <div
      className="overflow-x-hidden overflow-y-auto"
      style={{ maxHeight: "calc(100vh - 100px)" }}
    >
      <Row className="justify-content-center">
        {productosFiltrados.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={4} xl={4}>
            <Item
              item={item}
              onProductoSeleccionado={selectSelect}
              images={images}
              imageKey={item.imageKey}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemList;