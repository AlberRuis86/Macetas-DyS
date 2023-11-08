import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './Styles.css';

const NavBar = ({ setSeleccionCategoria }) => {
  return (
    <Navbar fixed="top" bg="black" variant="dark" expand="lg">
      <Container fluid>
        <Image
          className="icono"
          src=".\src\assets\MacetasDyS.png"
          rounded
        ></Image>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container fluid>
            <Nav className="justify-content-center">
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setSeleccionCategoria("Todas")}>
                  Todas
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setSeleccionCategoria("Categoría 1")}
                >
                  Categoría 1
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setSeleccionCategoria("Categoría 2")}
                >
                  Categoría 2
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setSeleccionCategoria("Categoría 3")}
                >
                  Categoría 3
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar.Collapse>
        <Nav className="justify-content-end">
          <Nav.Link href="#cart">
            <CartWidget />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

