import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './Styles.css';
import imagenProducto1 from '../assets/producto1.png';
import imagenProducto1_1 from '../assets/producto1_1.png';
import imagenProducto1_2 from '../assets/producto1_2.png';
import imagenProducto2 from '../assets/producto2.png';
import imagenProducto2_1 from '../assets/producto2_1.png';
import imagenProducto2_2 from '../assets/producto2_2.png';
import imagenProducto3 from '../assets/producto3.png';
import imagenProducto3_1 from '../assets/producto3_1.png';
import imagenProducto3_2 from '../assets/producto3_2.png';
import ItemList from './ItemList';
import NavBar from './NavBar';
import fetchProducts from '../utils/asyncMock';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      const productosObtenidos = await fetchProducts();
      setProductos(productosObtenidos);
    };

    obtenerProductos();
  }, [categoria]);

  return (
    <div>
      <NavBar categoria={categoria} />

      <Container
        className="d-grid justify-content-center align-items-center background-green"
        fluid
        style={{ height: "100vh", width: "100vw" }}
      >
        {categoria !== 'Todas' && (
          <ItemList
            items={productos.filter((item) =>
              categoria ? item.category === categoria : true
            )}
            categoriaSeleccionada={categoria}
            images={{
              producto1: imagenProducto1,
              producto1_1: imagenProducto1_1,
              producto1_2: imagenProducto1_2,
              producto2: imagenProducto2,
              producto2_1: imagenProducto2_1,
              producto2_2: imagenProducto2_2,
              producto3: imagenProducto3,
              producto3_1: imagenProducto3_1,
              producto3_2: imagenProducto3_2,
            }}
          />
        )}
      </Container>
    </div>
  );
};

export default ItemListContainer;