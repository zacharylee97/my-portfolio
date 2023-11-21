import "./NavigationBar.css";
import { Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => (
  <Navbar fixed="top" bg="light" expand="lg">
    <div className="navbar-container">
      <Navbar.Brand href="home">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="education">Education</Nav.Link>
          <Nav.Link href="lighthouse-labs">Lighthouse Labs</Nav.Link>
          <Nav.Link href="employment">Employment</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default NavigationBar;
