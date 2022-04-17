import React, { useContext } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { context } from '../../Context/ContextProvider';
import { CartWidget } from './CartWidget';
import './NavBar.css'

export const NavBar = () => {

  const { handleAuth, auth } = useContext(context)

  const handleLogOut = () => {
    handleAuth(null)
    window.localStorage.clear();
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand >
            <Link className='link-navbar' to="/">Kevin store</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">            
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item >
                  <Link to="/categories/items" className='link-navbar'>Articulos</Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to="/categories/t-shirt" className='link-navbar'>Camisetas</Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to="/categories/cap" className='link-navbar'>Gorras</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className='cart-btn-auth'>
            <CartWidget />
            {
              auth
                ? <Button to="/categories/cap" variant="danger" onClick={handleLogOut}>Log out</Button>
                : <Link to="/auth/login" className='btn btn-primary'>Log in</Link>
            }
          </div>
        </Container>
      </Navbar>
    </>
  )
}