import "./Beslogic.css";
import { Container } from "react-bootstrap";

const Beslogic = () => (
  <Container className="page-container">
    <Container className="beslogic-container">
      <h2>Beslogic</h2>
      <a href="https://www.beslogic.com">https://www.beslogic.com</a>
      <br />
    </Container>
    <Container className="project">
      <b>Parts Planning Hub</b>
      <br />
      <span>July 2022 to January 2023</span>
      <br />
      <span>
        Web app for users to view details on airplane and engine parts
      </span>
      <br />
      <span>TECH: Angular, Typescript, C#, DynamoDB</span>
      <br />
    </Container>
    <Container className="project">
      <span>
        <b>Services Hub</b>
        <br />
        <a href="https://www.pwc.ca/en/services-hub/">
          https://www.pwc.ca/en/services-hub/
        </a>
      </span>
      <br />
      <span>February 2022 to August 2022</span>
      <br />
      <span>
        Web app consisting of:
        <br />
        - external website for customers to find services associated to their
        aircraft and engine models
        <br />- internal application for customization of external survery
      </span>
      <br />
      <span>TECH: Angular, Typescript, C#, SQL</span>
      <br />
    </Container>
    <Container className="project">
      <b>OneForm</b>
      <br />
      <span>July 2021 to August 2022</span>
      <br />
      <span>
        Web app consisting of:
        <br />
        - external form for customers to register for an account
        <br />- internal application to process registration
      </span>
      <br />
      <span>TECH: Angular, Typescript, C#, CosmosDB</span>
      <br />
    </Container>
    <Container className="project">
      <b>Engine Tracker</b>
      <br />
      <span>January 2021 to July 2021</span>
      <br />
      <span>
        Web app for users to view and edit information about engine models
      </span>
      <br />
      <span>TECH: Angular, Typescript, AG Grid, C#, SQL</span>
      <br />
    </Container>
    <Container className="project">
      <b>Artigator</b>
      <br />
      <span>October 2020 to January 2021</span>
      <br />
      <span>Web app to generate article summaries using AI</span>
      <br />
      <span>TECH: Angular, Typescript, C#</span>
      <br />
    </Container>
    <Container className="project">
      <b>Rate My Day</b>
      <br />
      <span>August 2020 to December 2020</span>
      <br />
      <span>Mobile app for employees to complete daily surveys</span>
      <br />
      <span>TECH: React Native, Typescript</span>
      <br />
    </Container>
    <Container className="project">
      <b>EmPassion</b>
      <br />
      <span>July 2020 to September 2020</span>
      <br />
      <span>
        Web app to create custom surveys and collect data for employees
      </span>
      <br />
      <span>TECH: Angular, Typescript, C#, MongoDB</span>
      <br />
    </Container>
    <Container className="project">
      <b>MyP&WC Portal</b>
      <br />
      <span>January 2019 to August 2020</span>
      <br />
      <span>Customer portal for Pratt and Whitney Canada</span>
      <br />
      <span>TECH: Angular, Javascript, Typescript, C#, SQL</span>
      <br />
    </Container>
  </Container>
);

export default Beslogic;
