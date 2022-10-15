import "./AboutMe.css";
import React from "react";
import { Container } from "react-bootstrap";
import InstagramFeed from "../../components/InstagramFeed/InstagramFeed";

const AboutMe = () => (
  <Container className="page-container">
    <h1>About Me</h1>
    <p>
      I am a full-stack web developer with a background in life sciences. Having
      worked in multiple research labs, I have experience collaborating on a
      project and I have enjoyed working in a group setting. I decided to pursue
      a career in web development because I became interested in programming
      after I took an intro to Java course in university. I am an artistic and
      creative person, which lends itself to front-end development and user
      interface design. I also enjoy the problem solving and logical thinking
      associated with back-end development.
    </p>
    <InstagramFeed limit={12}></InstagramFeed>
  </Container>
);

export default AboutMe;
