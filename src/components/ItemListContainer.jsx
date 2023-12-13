import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Container } from 'react-bootstrap';
import NavBar from './NavBar';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "plantas");
  
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs;
  
      if (docs.length > 0) {
        const mappedDocs = docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
  
        setProductos(mappedDocs);
      }
    });
  }, []);  

  return (
    <div>
      <NavBar categoria={categoria} />

      <Container
        className="d-grid justify-content-center align-items-center background-green"
        fluid
        style={{ height: "100vh", width: "100vw" }}
      >
        {categoria && categoria !== 'Todas' ? (
          <ItemList
            items={productos.filter((item) =>
              categoria ? item.categoria === categoria : true
            )}
            categoriaSeleccionada={categoria}
          />
        ) : (
          <ItemList items={productos} categoriaSeleccionada={categoria} />
        )}
      </Container>
    </div>
  );
};

export default ItemListContainer;