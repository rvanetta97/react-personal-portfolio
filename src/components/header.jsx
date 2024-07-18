import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'; 
import '.././App.css';

function Header() {
  return (
    <>
     <Navbar className='.full-width-navbar'>
      <Container className='.navbar-container'>
        <Navbar.Brand href="#home">Rachel Vanetta</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
   
  );
}

export default Header;
