import "./LighthouseLabs.css";
import { Container } from "react-bootstrap";

const LighthouseLabs = () => (
  <Container className="page-container">
    <h1>Lighthouse Labs</h1>
    <Container className="project">
      <b>The Forge</b>
      <br />
      <span>November 2018</span>
      <br />
      <a href="https://github.com/zacharylee97/the-forge">
        https://github.com/zacharylee97/the-forge
      </a>
      <br />
      <span>
        A user-friendly web application built with React for Game Masters and
        Authors to easily organize the details of their world, including a world
        map with markers for locations.
      </span>
      <br />
      <span>
        TECH: JavaScript, NodeJS, HTML, SCSS, Bootstrap, React, Leaflet API,
        Apollo, GraphQL, Sequelize, PostGreSQL
      </span>
      <br />
    </Container>
    <Container className="project">
      <b>Jungle</b>
      <br />
      <span>November 2018</span>
      <br />
      <a href="https://github.com/zacharylee97/jungle-rails">
        https://github.com/zacharylee97/jungle-rails
      </a>
      <br />
      <span>
        A mini e-commerce application where visitors can browse the catalogue,
        add items to the cart and checkout.
      </span>
      <br />
      <span>TECH: Ruby on Rails, Stripe API, PostgreSQL, SASS, bcrypt</span>
      <br />
    </Container>
    <Container className="project">
      <b>Chatty App</b>
      <br />
      <span>October 2018 to November 2018</span>
      <br />
      <a href="https://github.com/zacharylee97/chatty-app">
        https://github.com/zacharylee97/chatty-app
      </a>
      <br />
      <span>
        A single-page app built with React that allows users to send and receive
        messages in real-time.
      </span>
      <br />
      <span>
        TECH: JavaScript, NodeJS, Express, HTML, SCSS, Bootstrap, React,
        WebSockets
      </span>
      <br />
    </Container>
    <Container className="project">
      <b>Schoodle</b>
      <br />
      <span>October 2018</span>
      <br />
      <a href="https://github.com/zacharylee97/schoodle">
        https://github.com/zacharylee97/schoodle
      </a>
      <br />
      <span>
        A simple Doodle clone to plan an event by comparing availability of
        attendees.
      </span>
      <br />
      <span>
        TECH: JavaScript, NodeJS, Express, HTML, SCSS, Bootstrap, jQuery, AJAX,
        PostGreSQL, KnexJS
      </span>
      <br />
    </Container>
    <Container className="project">
      <b>Tweeter</b>
      <br />
      <span>October 2018</span>
      <br />
      <a href="https://github.com/zacharylee97/tweeter-project">
        https://github.com/zacharylee97/tweeter-project
      </a>
      <br />
      <span>
        A simple, single-page Twitter clone where new posts can be created.
      </span>
      <br />
      <span>
        TECH: JavaScript, NodeJS, Express, HTML, CSS, jQuery, AJAX, MongoDB
      </span>
      <br />
    </Container>
  </Container>
);

export default LighthouseLabs;
