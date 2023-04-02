import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/xlri.png'; 
import amba from '../assets/amba.png'; 
import aac from '../assets/aac.png'; 

const Header = () => {
  return (
   <>
    <Navbar>
    <Container>
        <Navbar.Brand> <a href="/"><img src= {logo} alt="" style={{height: '40px'}} /></a> </Navbar.Brand>
        <Navbar.Toggle />
        <h2 style={{paddingLeft: '300px', color: 'blue'}}> <b> Xavier Online Learning (XOL)</b></h2>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          </Navbar.Text>
          <Navbar.Brand> <a href="/"><img src= {aac} alt="" style={{height: '40px'}} /></a> </Navbar.Brand>
          <Navbar.Brand> <a href="/"><img src= {amba} alt="" style={{height: '40px'}} /></a> </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      </>
  )
}

export default Header