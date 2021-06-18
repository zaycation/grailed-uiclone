import { Container, Row, Col } from "react-bootstrap";

import BootstrapNav from "./components/Navbar";
import FilterNav from "./components/FilterNav";
import Hero from "./components/Hero";
import Trends from "./components/Trends";

import "./App.css";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <BootstrapNav />
        </Col>
      </Row>
      <Row>
        <FilterNav />
      </Row>
      <Hero />
      <h4 className="my-3">Latest Trends</h4>
      <Row className="my-5">
        <Trends />
      </Row>
    </Container>
  );
}

export default App;
