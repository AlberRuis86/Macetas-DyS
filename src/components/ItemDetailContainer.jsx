import React, { useState, useEffect } from 'react';
import { getDoc, doc, getFirestore } from "firebase/firestore";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ item, onVolver }) => {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const db = getFirestore();
        const oneItem = doc(db, "plantas", item.id);
        const snapshot = await getDoc(oneItem);

        if (snapshot.exists()) {
          const docData = snapshot.data();
          setProducto(docData);
        }
      } catch (error) {
        console.error("Error fetching producto:", error);
      }
    };

    obtenerProducto();
  }, [item.id]);

  return (
    <ItemDetail producto={producto} onVolver={onVolver} />
  );
};

export default ItemDetailContainer;