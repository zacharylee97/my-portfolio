import "./NavigationBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => (
  <Navbar bg="light" expand="lg">
    <Container className="navbar-container">
      <Navbar.Brand href="home">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="education">Education</Nav.Link>
          <Nav.Link href="lighthouse-labs">Lighthouse Labs</Nav.Link>
          <Nav.Link href="beslogic">Beslogic</Nav.Link>
          <Nav.Link href="freelance">Freelance</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
