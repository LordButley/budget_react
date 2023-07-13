import './App.css';
import NavBar from './components/NavBar';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SideBar from './components/SideBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container>
        <Row className = "min-vh-100">
          <Col sm="2">
            <SideBar/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
