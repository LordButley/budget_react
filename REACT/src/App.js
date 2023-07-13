import './App.css';
import NavBar from './components/NavBar';

import {
  Routes,
  Route,
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
          <Col>
            <Routes>
              <Route>
                exact path="/"
                element = {}
              </Route>
              <Route>
                exact path="/combined"
                element = {}
              </Route>
              <Route>
                exact path="/income"
                element = {}
              </Route>
              <Route>
                exact path="/outgoing"
                element = {}
              </Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
