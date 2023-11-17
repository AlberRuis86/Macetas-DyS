import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Styles.css';
import NavBar from './NavBar';

const Home = () => {

  const [seleccionCategoria, setSeleccionCategoria] = useState(null);

  return (
    <div>
      <NavBar setSeleccionCategoria={setSeleccionCategoria} />
      <Container
        className="d-grid justify-content-center align-items-center background-green fw-bolder fs-1"
        fluid
        style={{ height: "100vh", width: "100vw" }}
      > Bienvenidos a Macetas DyS
      </Container>
    </div>
  )
}

export default Home
