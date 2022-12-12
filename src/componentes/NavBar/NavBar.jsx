import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsFillCartCheckFill } from "react-icons/bi";
import CartWidget from '../CartWidget/CartWidget';




export default function NavBar() {
  return (
    

<Navbar bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand href="#">MG desarrollos</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href=  "/">Home</Nav.Link>
            
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href=  "/" >Home</NavDropdown.Item>
              <NavDropdown.Item href=  "/category/Remeras" >Remeras ambos sexos</NavDropdown.Item>
              <NavDropdown.Item href="/category/Calzados" >
                Calzados
              </NavDropdown.Item>
              <NavDropdown.Divider />
           
          
              <NavDropdown.Item href="/category/Pantalones">
                Pantalones ambos sexos
              </NavDropdown.Item>
            </NavDropdown>
            <div className='carro'>
         <CartWidget />
         </div>
          
          </Nav>
         
    
        
        </Navbar.Collapse>

      
        
           
          
      </Container>
    </Navbar>
    
  )
}
