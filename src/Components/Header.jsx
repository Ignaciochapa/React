import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import '../App.css';

const Header = () => {
  return (
    <>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
            <img
              alt=""
              src="/images/background-buzo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <p className="brand-titulo">Kenzo Ind.</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/index.html" id='linknavbar'>Inicio</Nav.Link>
                <Nav.Link href="/index.html" id='linknavbar'>Contacto</Nav.Link>
              </Nav>
              <CartWidget/>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default Header