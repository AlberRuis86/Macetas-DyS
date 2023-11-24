import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import fetchProducts from '../utils/asyncMock';

const ItemDetailContainer = ({ item, onVolver, images }) => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const productosObtenidos = await fetchProducts(item.id);
        const productoObtenido = productosObtenidos.find(producto => producto.id === item.id);
        setProducto(productoObtenido);
      } catch (error) {
        console.error("Error fetching producto:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProducto();
  }, [item.id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!producto) {
    console.error("Producto no disponible.");
    return null;
  }

  return <ItemDetail item={producto} onVolver={onVolver} images={images} />;
};

export default ItemDetailContainer;