import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar>
        <Container>
          <Link to="/">
            <img
              alt=""
              src="/images/background-buzo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <div className='container-brand'>
            <p>Kenzo</p>
            <p>Ind.</p>
            </div>
          </Link>
        </Container>
        <Nav className="me-auto">
            <Link to="/">Todos los productos</Link>
            <Link to="productos/Remeras">Remeras</Link>
            <Link to="productos/Buzos">Buzos</Link>
            <Link to="productos/Camperas">Camperas</Link>
            <CartWidget/>
          </Nav>
      </Navbar>
  )
}

export default NavBar