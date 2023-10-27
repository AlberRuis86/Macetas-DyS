import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './Styles.css';

const NavBar = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <div className='primary-text-color' href="#home">Macetas DyS</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container fluid>
          <Nav className="justify-content-center">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#category1">Categoría 1</NavDropdown.Item>
              <NavDropdown.Item href="#category2">Categoría 2</NavDropdown.Item>
              <NavDropdown.Item href="#category3">Categoría 3</NavDropdown.Item>
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
