import { React, useState } from 'react';
import { Container, Button, Row, Col, Form, InputGroup, Toast } from 'react-bootstrap';
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useLocation } from 'react-router-dom';
import { app } from '../utils/Firebase';
import { useCart } from '../context/CartContext';
import "./Styles.css";

const SendOrder = () => {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  const { getTotalPrice, clear: clearCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const items = JSON.parse(decodeURIComponent(searchParams.get('items'))) || [];

  const db = getFirestore(app);
  const orderCollection = collection(db, "ordenes");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (items.length === 0) {
      console.warn("El carrito está vacío. No se enviará ninguna orden.");
      return;
    }
  
    const orderProducts = items.map((item) => {
        return {
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          cantidad: item.quantity,
        };
      });

      const total = getTotalPrice();
      const date = new Date();
      
      const order = {
        comprador: {
          nombre,
          email,
        },
        productos: orderProducts,
        total: total,
        fecha: date,
      };
  
    try {
      const docRef = await addDoc(orderCollection, order);
      setId(docRef.id);
      console.log("Order added successfully:", docRef);
      setShowToast(true);
      clearCart();
      e.target.reset();
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };  

  return (
    <Container
      className="d-grid justify-content-center align-items-center background-green overflow-x-hidden overflow-y-auto p-4"
      fluid
      style={{ height: "100vh", width: "100vw" }}
    >
      <h1 className="text-center fw-bold fs-2 mt-2">Enviar Orden</h1>
      <Row>
        <Col className="text-center bg-warning bg-opacity-80 p-4 rounded" md={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3 text-center fw-semibold fs-4"
              controlId="formNombre"
            >
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 text-center fw-semibold fs-4"
              controlId="formEmail"
            >
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <Button variant="success fw-semibold" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className="fw-bold fs-3">Id de la compra: {id}</p>
        </Col>
      </Row>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1,
        }}
      >
        <Toast.Header>
          <strong className="me-auto text-center toast-center">¡Éxito!</strong>
        </Toast.Header>
        <Toast.Body>La operación se ha completado exitosamente.</Toast.Body>
      </Toast>
    </Container>
  );
}

export default SendOrder;