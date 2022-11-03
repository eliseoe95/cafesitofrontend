import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Login from '../views/usuario/Login';
import Registrar from '../views/usuario/Registrar';

const Menu = () => {
  const [usuarioLogueado, setUsuarioLogueado] = useState({});
  const redirect = useNavigate();

  const cerrarSesion=()=>{
    localStorage.removeItem('usuarioLogueado');
    setUsuarioLogueado({});
    redirect('/');
  }

    return (
        <Navbar bg="danger" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>Cafecito</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className={'nav-item nav-link'}>Inicio</NavLink>
            {usuarioLogueado.nombre?
            <>
              <NavLink to='/administrar' className={'nav-item nav-link'}>Administrador</NavLink>
              <Registrar></Registrar>
              <Button variant='dark' onClick={cerrarSesion}>Cerrar Sesion</Button>
              </>
            :<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;