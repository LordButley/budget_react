import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import appStyles from "../styles/SideBar.module.css";

const SideBar = () => {
  return (
    <Container className="d-flex flex-column justify-content-center min-vh-100 m-auto ">
        <div>
        <Link className={appStyles.sidebarlinks}>
            Dashboard
        </Link>
        </div>
        <div>
        <Link>
            Combined
        </Link>
        </div>
        <div>
        <Link>
            Income
        </Link>
        </div>
        <div>
        <Link>
            Outgoings
        </Link>
        </div>

    </Container>
    )
}

export default SideBar