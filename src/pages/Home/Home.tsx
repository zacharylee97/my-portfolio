import "./Home.css";
import React from "react";
import { Container } from "react-bootstrap";

const Home = () => (
  <Container className="page-container">
    <h1>Zachary Lee</h1>
    <span>Full Stack Software Developer</span>
    <br />
    <span>
      Email: <a href="mailto:zacharylhlee@gmail.com">zacharylhlee@gmail.com</a>
    </span>
    <br />
    <span>Phone: +1 (438) 992-9667</span>
    <br />
    <span>
      Instagram:{" "}
      <a href="https://www.instagram.com/zachary.lee97/">
        https://www.instagram.com/zachary.lee97/
      </a>
    </span>
    <br />
    <span>
      LinkedIn:{" "}
      <a href="https://www.linkedin.com/in/zachary-lee-850b2314a">
        https://www.linkedin.com/in/zachary-lee-850b2314a
      </a>
    </span>
    <br />
    <span>
      GitHub:{" "}
      <a href="https://www.github.com/zacharylee97">
        https://www.github.com/zacharylee97
      </a>
    </span>
    <br />
  </Container>
);

export default Home;
