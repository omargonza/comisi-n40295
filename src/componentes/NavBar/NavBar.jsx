import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom";



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
            <Nav.Link as={Link}to="/">Home</Nav.Link>
            
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              
              <NavDropdown.Item as= {Link}to="/category/Remeras" >Remeras ambos sexos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Calzados">Calzados</NavDropdown.Item>
              <NavDropdown.Divider />
           
          
              <NavDropdown.Item as={Link}to="/category/Pantalones">Pantalones ambos sexos</NavDropdown.Item>
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
