import "./Home.css";
import { Container } from "react-bootstrap";
import Contact from "../../components/Contact/Contact";
import AboutMe from "../../components/AboutMe/AboutMe";

const Home = () => (
  <Container className="page-container">
    <Contact />
    <AboutMe />
  </Container>
);

export default Home;
