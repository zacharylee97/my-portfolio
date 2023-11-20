import "./Contact.css";
import { Image } from "react-bootstrap";

const Contact = () => (
  <div className="contact-container">
    <div className="contact-info">
      <h1>Zachary Lee</h1>
      <h3>Full Stack Software Developer</h3>
      <br />
      <p>
        Email:{" "}
        <a href="mailto:zacharylhlee@gmail.com">zacharylhlee@gmail.com</a>
      </p>
      <p>Phone: +1 (438) 992-9667</p>
      <div className="instagram-container">
        <p>
          Personal Instagram:{" "}
          <a href="https://www.instagram.com/zachary.lee97">
            https://www.instagram.com/zachary.lee97
          </a>
        </p>

        <p>
          Queer Aquarian Instagram:{" "}
          <a href="https://www.instagram.com/queer_aquarian">
            https://www.instagram.com/queer_aquarian
          </a>
        </p>
      </div>
      <div className="links-container">
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/zachary-lee-850b2314a">
            https://www.linkedin.com/in/zachary-lee-850b2314a
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a href="https://www.github.com/zacharylee97">
            https://www.github.com/zacharylee97
          </a>
        </p>
      </div>
    </div>
    <br />
    <div className="profile-picture">
      <Image src="/profile-picture.jpg" fluid />
    </div>
  </div>
);

export default Contact;
