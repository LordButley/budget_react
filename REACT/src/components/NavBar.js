import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import appStyles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React Budget</Navbar.Brand>
        {/* <Navbar.Toggle /> */}
        {/* <Navbar.Collapse className="justify-content-end"> */}
        <Navbar.Text>
         <a className={appStyles.navAnchor} href="#login"><FontAwesomeIcon icon={faUser} />  Josh Wilson</a>
        </Navbar.Text>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  )
}

export default NavBar