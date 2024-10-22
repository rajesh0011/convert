import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';

export default function Header() {

  const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}

const [isFixed, setIsFixed] = useState(false);

// Function to handle scroll event
const handleScroll = () => {
  if (window.scrollY > 100) {
    setIsFixed(true);
  } else {
    setIsFixed(false);
  }
};

// Set up the scroll event listener on component mount
useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  // Clean up event listener on component unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <>
        <Navbar collapseOnSelect expand="lg" className={isFixed ? 'navbar-fixed' : ''}>
      <Container>
        <Link to="./" className='navbar-brand'> <img className='logo' src="./logo-convert.webp" /> </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/imagescompressor">Images Compressor</Link>
            <Link to="/jpgtowebp">Jpg to Webp</Link>
            <Link to="/convert">Text Converter</Link>
            <Link to="/imgtopdf">Img to Pdf</Link>
            <Link to="/imagetogif">Images to Gif</Link>
            
            {/* <NavDropdown title="Services" id="collapsible-nav-dropdown"
            show={show}
            onMouseEnter={showDropdown} 
            onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href="#action/3.1">Service-1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Service-2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Service-3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Service-4
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link to="https://wa.me/917900099842?text=Hi, I want to know more about this tool!" target="_blank" >Contact</Nav.Link>
            <Nav.Link to="tel:7900099842" target='_blank' className='btn btn-warning call-btn'>
              +91-7900099842
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
