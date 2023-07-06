import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React Budget</Navbar.Brand>
        {/* <Navbar.Toggle /> */}
        {/* <Navbar.Collapse className="justify-content-end"> */}
        <Navbar.Text>
        Signed in as: <a href="#login">Josh Wilson</a>
        </Navbar.Text>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  )
}

export default NavBar