import "./NavigationBar.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => (
  <Navbar bg="light" expand="lg">
    <Container className="navbar-container">
      <Navbar.Brand href="home">Zachary Lee</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="about-me">About Me</Nav.Link>
          <Nav.Link href="education">Eductation</Nav.Link>
          <Nav.Link href="lighthouse-labs">Lighthouse Labs</Nav.Link>
          <Nav.Link href="employment">Employment</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
