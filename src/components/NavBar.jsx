import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";
import "./Styles.css";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ categoria }) => {
  const navigate = useNavigate();

  const handleCategoriaClick = (categoria) => {
    navigate(categoria === "Todas" ? "/productos" : `/productos/${categoria}`);
  };

  return (
    <Navbar fixed="top" bg="black" variant="dark" expand="lg">
      <Container fluid>
        <Link className="text-decoration-none" to="/">
          <Navbar.Brand className="text-warning text-decoration-none">
            Macetas DyS
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container fluid>
            <Nav className="justify-content-center">
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <Link
                  to="/productos/Todas"
                  className="text-decoration-none text-center"
                >
                  <NavDropdown.Item
                    onClick={() => handleCategoriaClick("Todas")}
                  >
                    Todas
                  </NavDropdown.Item>
                </Link>
                <Link
                  to="/productos/Categoria 1"
                  className="text-decoration-none text-center"
                >
                  <NavDropdown.Item
                    onClick={() => handleCategoriaClick("Categoria 1")}
                  >
                    Categoría 1
                  </NavDropdown.Item>
                </Link>
                <Link
                  to="/productos/Categoria 2"
                  className="text-decoration-none text-center"
                >
                  <NavDropdown.Item
                    onClick={() => handleCategoriaClick("Categoria 2")}
                  >
                    Categoría 2
                  </NavDropdown.Item>
                </Link>
                <Link
                  to="/productos/Categoria 3"
                  className="text-decoration-none text-center"
                >
                  <NavDropdown.Item
                    onClick={() => handleCategoriaClick("Categoria 3")}
                  >
                    Categoría 3
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar.Collapse>
        <Nav className="justify-content-end">
          <Nav.Link as={Link} to="/cart">
            <CartWidget />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
