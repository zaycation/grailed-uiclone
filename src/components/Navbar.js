import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

const BootstrapNavbar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="#home">GRAILED</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-dark">Search</Button>
        </Form>
        <Nav className="m-auto">
          <Nav.Link href="#shop">SHOP</Nav.Link>
          <Nav.Link href="#sell">SELL</Nav.Link>
          <Nav.Link href="#read">READ</Nav.Link>
        </Nav>
        <div className="ml-auto">
          <Button variant="outline-dark" className="mr-2">
            LOGIN
          </Button>
          <Button variant="dark">SIGN UP</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BootstrapNavbar;
