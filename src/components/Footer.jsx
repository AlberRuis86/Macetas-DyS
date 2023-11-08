import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-black text-light p-1">
      <Container fluid>
        <Row>
          <Col xs={12} className="text-center">
            <p>Copyright 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
