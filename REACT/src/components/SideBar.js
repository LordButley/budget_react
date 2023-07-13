import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import appStyles from "../styles/SideBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPeopleArrows, faCartShopping, faSterlingSign } from '@fortawesome/free-solid-svg-icons'


const SideBar = () => {
    return (
        <Container className={`d-flex flex-column m-auto mt-5 ${appStyles.sidebarcontainer}`}>
            <div className={appStyles.sidebardivs}>
                <Link className={appStyles.sidebarlinks}>
                    <FontAwesomeIcon className={appStyles.sidebaricons} icon={faHouse} />
                    <span>
                        Dashboard
                    </span>             
                    </Link>
            </div>
            <div className={appStyles.sidebardivs}>
                <Link className={appStyles.sidebarlinks}>
                    <FontAwesomeIcon className={appStyles.sidebaricons} icon={faPeopleArrows} />
                    <span>
                        Combined
                    </span>            
                    </Link>
            </div>
            <div className={appStyles.sidebardivs}>
                <Link className={appStyles.sidebarlinks}>
                    <FontAwesomeIcon className={appStyles.sidebaricons} icon={faSterlingSign} />
                    <span>
                        Income
                    </span>
                    </Link>
            </div>
            <div className={appStyles.sidebardivs}>
                <Link className={appStyles.sidebarlinks}>
                    <FontAwesomeIcon className={appStyles.sidebaricons} icon={faCartShopping} />
                    <span>
                        Outgoings
                    </span>
                </Link>
            </div>

        </Container>
    )
}

export default SideBar