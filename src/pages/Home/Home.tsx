import "./Home.css";
import React from "react";
import { Container } from "react-bootstrap";
import InstagramPost from "../../components/InstagramPost/InstagramPost";

const Home = () => (
  <Container className="page-container home-page">
    <Container>
      <h1>Zachary Lee</h1>
      <span>Full-Stack Developer</span>
      <br />
      <span>
        email:{" "}
        <a href="mailto:zacharylhlee@gmail.com">zacharylhlee@gmail.com</a>
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
        <a href="https://www.github.com/zacharylee97">
          github.com/zacharylee97
        </a>
      </span>
      <br />
    </Container>
    <Container>
      <InstagramPost postId={"17891330701216281"}></InstagramPost>
    </Container>
  </Container>
);

export default Home;
