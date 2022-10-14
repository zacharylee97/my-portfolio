import "./Home.css";
import React from "react";
import { Container } from "react-bootstrap";

const Home = () => (
  <Container className="home-container">
    <h1>Zachary Lee</h1>
    <span>Full-Stack Developer</span>
    <br />
    <span>
      email: <a href="mailto:zacharylhlee@gmail.com">zacharylhlee@gmail.com</a>
    </span>
    <br />
    <span>phone: +1 (438) 992-9667</span>
    <br />
    <span>
      LinkedIn:{" "}
      <a href="https://www.linkedin.com/in/zachary-lee-850b2314a">
        linkedin.com/in/zachary-lee-850b2314a
      </a>
    </span>
    <br />
    <span>
      GitHub:{" "}
      <a href="https://www.github.com/zacharylee97">github.com/zacharylee97</a>
    </span>
    <br />
  </Container>
);

export default Home;
