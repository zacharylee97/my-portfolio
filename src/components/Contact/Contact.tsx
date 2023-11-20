import "./Contact.css";
import { Col, Container, Image } from "react-bootstrap";

const Contact = () => (
  <Container className="contact-container">
    <Container className="contact-info">
      <h1>Zachary Lee</h1>
      <span>Full Stack Software Developer</span>
      <br />
      <span>
        Email:{" "}
        <a href="mailto:zacharylhlee@gmail.com">zacharylhlee@gmail.com</a>
      </span>
      <br />
      <span>Phone: +1 (438) 992-9667</span>
      <br />
      <Container className="instagram-container">
        <span>
          Personal Instagram:{" "}
          <a href="https://www.instagram.com/zachary.lee97">
            https://www.instagram.com/zachary.lee97
          </a>
        </span>
        <br />
        <span>
          Queer Aquarian Instagram:{" "}
          <a href="https://www.instagram.com/queer_aquarian">
            https://www.instagram.com/queer_aquarian
          </a>
        </span>
        <br />
      </Container>
      <Container className="links-container">
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
      </Container>
    </Container>
    <Container>
      <Col xs={6} md={4}>
        <Image src="/profile-picture.jpg" thumbnail />
      </Col>
    </Container>
  </Container>
);

export default Contact;
