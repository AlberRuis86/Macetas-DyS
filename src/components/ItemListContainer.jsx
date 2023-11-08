import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './Styles.css';
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer';
import NavBar from './NavBar';
import imagenProducto1 from '../assets/producto1.png';
import imagenProducto2 from '../assets/producto2.png';
import imagenProducto3 from '../assets/producto3.png';
import ItemCount from './ItemCount';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [seleccionProducto, setSeleccionProducto] = useState(null);
  const [seleccionCategoria, setSeleccionCategoria] = useState();

  const images = {
    producto1: imagenProducto1,
    producto2: imagenProducto2,
    producto3: imagenProducto3
  };

  useEffect(() => {
    setTimeout(() => {
      const listaProductos = [
        {
          id: 1,
          title: "Producto 1",
          description: "Descripción 1",
          price: 1000,
          category: "Categoría 1",
          imageKey: 'producto1'
        },
        {
          id: 2,
          title: "Producto 2",
          description: "Descripción 2",
          price: 1500,
          category: "Categoría 2",
          imageKey: 'producto2'
        },
        {
          id: 3,
          title: "Producto 3",
          description: "Descripción 3",
          price: 2000,
          category: "Categoría 3",
          imageKey: 'producto3'
        },
      ];

      setProductos(listaProductos);
    }, 2000);
  }, []);

  const selectSelect = (product) => {
    setSeleccionProducto(product);
  };

  return (
    <div>
      <NavBar setSeleccionCategoria={setSeleccionCategoria} />
      <Container
        className="d-grid justify-content-center align-items-center background-green"
        fluid
        style={{ height: "100vh", width: "100vw" }}
      >
        <ItemList items={productos} images={images} seleccionCategoria={seleccionCategoria} onProductoSeleccionado={selectSelect} />
        {seleccionProducto && <ItemDetailContainer item={seleccionProducto} />}
        <ItemCount />
      </Container>
    </div>
  );
}

export default ItemListContainer;