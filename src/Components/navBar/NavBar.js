import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import './NavBar.css'

export const NavBar = () => {
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
              <Nav.Link href="#home">
                <CartWidget />
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
        </Container>
      </Navbar>
    </>
  )
}