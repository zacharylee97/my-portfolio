import "./Employment.css";
import React from "react";
import { Container } from "react-bootstrap";

const Employment = () => (
  <Container className="page-container">
    <Container className="beslogic-container">
      <h1>Beslogic</h1>
      <a href="https://www.beslogic.com">https://www.beslogic.com</a>
      <br />
    </Container>
    <Container className="project">
      <b>Parts Planning Hub</b>
      <br />
      <span>July 2022 to January 2023</span>
      <br />
      <span>An application to allow users to manage products.</span>
      <br />
      <span>TECH: Angular, C#, DynamoDB</span>
      <br />
    </Container>
    <Container className="project">
      <b>Services Hub</b>
      <br />
      <span>February 2022 to August 2022</span>
      <br />
      <span>
        An application to allow customers to find services for their aircraft
        and engine models.
      </span>
      <br />
      <span>TECH: Angular, C#, SQL</span>
      <br />
    </Container>
    <Container className="project">
      <b>OneForm</b>
      <br />
      <span>July 2021 to August 2022</span>
      <br />
      <span>
        An application consisting of an external form to allow users to register
        for an account and an internal application to process the registrations.
      </span>
      <br />
      <span>TECH: Angular, C#, CosmosDB</span>
      <br />
    </Container>
    <Container className="project">
      <b>Engine Tracker</b>
      <br />
      <span>January 2021 to July 2021</span>
      <br />
      <span>
        An application to allow users to view and edit information about engine
        models.
      </span>
      <br />
      <span>TECH: Angular, C#, SQL</span>
      <br />
    </Container>
    <Container className="project">
      <b>Artigator</b>
      <br />
      <span>October 2020 to January 2021</span>
      <br />
      <span>An application to generate article summaries through AI.</span>
      <br />
      <span>TECH: Angular, C#</span>
      <br />
    </Container>
    <Container className="project">
      <b>Rate My Day</b>
      <br />
      <span>August 2020 to December 2020</span>
      <br />
      <span>Mobile app for employees to complete daily surveys.</span>
      <br />
      <span>TECH: React Native</span>
      <br />
    </Container>
    <Container className="project">
      <b>EmPassion</b>
      <br />
      <span>July 2020 to September 2020</span>
      <br />
      <span>An application to create surveys for employees.</span>
      <br />
      <span>TECH: Angular, C#, MongoDB</span>
      <br />
    </Container>
    <Container className="project">
      <b>MyP&WC Portal</b>
      <br />
      <span>January 2019 to August 2020</span>
      <br />
      <span>Customer portal for Pratt and Whitney Canada.</span>
      <br />
      <span>TECH: Angular, C#, SQL</span>
      <br />
    </Container>
  </Container>
);

export default Employment;
