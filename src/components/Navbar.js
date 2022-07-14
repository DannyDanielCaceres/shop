import React from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Producto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  </>

  );

}
export default NavbarComponent;