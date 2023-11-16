import "./Freelance.css";
import { Container } from "react-bootstrap";

const Freelance = () => (
  <Container className="page-container">
    <Container className="freelance-container">
      <h1>Freelance</h1>
      <br />
    </Container>
    <Container className="project">
      <b>FLC Consulting</b>
      <br />
      <a href="https://flc-consulting.netlify.app/">
        https://flc-consulting.netlify.app/
      </a>
      <br />
      <span>August 2023 to Current</span>
      <br />
      <span>Website for FLC Consulting</span>
      <br />
      <span>TECH: Next.js, Typescript, Tailwind CSS</span>
      <br />
    </Container>
  </Container>
);

export default Freelance;
