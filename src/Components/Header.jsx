import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../App.css';

const Header = () => {
  return (
    <>
        <Navbar expand="lg">
          <Container>
            <Link to={`/`}>
            <img
              alt=""
              src="/images/background-buzo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <p className="brand-titulo">Kenzo Ind.</p>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to={`/categoria/Buzos`}>Buzos</Link>
                <Link to={`/categoria/Camperas`}>Camperas</Link>
                <Link to={`/categoria/Remeras`}>Remeras</Link>
              </Nav>
              <CartWidget/>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default Header