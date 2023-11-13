import "./Education.css";
import React from "react";
import { Container } from "react-bootstrap";

const Education = () => (
  <Container className="page-container">
    <Container className="education-container">
      <h1>Education</h1>
      <b>McGill University</b>
      <br />
      <span>September 2014 to April 2018</span>
      <br />
      <span>B.Sc. Physiology Major</span>
      <br />
    </Container>
    <Container className="education-container">
      <b>Western Canada High School</b>
      <br />
      <span>September 2011 to April 2014</span>
      <br />
      <span>International Baccalaureate® (IB) Diploma Programme (DP)</span>
      <br />
      <span>Alberta High School Diploma</span>
      <br />
    </Container>
    <Container className="projects-container">
      <h1>Research Projects</h1>
      <Container className="project">
        <b>Summer Research Project</b>
        <br />
        <span>Research Assistant</span>
        <br />
        <span>McGill University Health Centre Glen Site, Montreal, QC</span>
        <br />
        <span>May 2018 to August 2018</span>
        <br />
        <span>
          Worked in a parasitology lab under Dr. Momar Ndao: GST system protein
          expression of Cruzipain Inhibitors for vaccine development against T.
          cruzi
        </span>
        <br />
      </Container>
      <Container className="project">
        <b>MIMM 396 Undergraduate Research Project</b>
        <br />
        <span>McGill University Health Centre Glen Site, Montreal, QC</span>
        <br />
        <span>January 2018 to April 2018</span>
        <br />
        <span>
          Worked in a parasitology lab under Dr. Momar Ndao: Optimization of
          transformation of GP45 into C. rodentium for vaccine development
          against enteropathogenic E. coli
        </span>
        <br />
      </Container>
      <Container className="project">
        <b>NSERC Undergraduate Student Research Award</b>
        <br />
        <span>University of Alberta, Edmonton, AB</span>
        <br />
        <span>May 2017 to August 2017</span>
        <br />
        <span>
          Worked in a microbiology lab under Dr. George Owttrim: Conducted
          cyanobacterial sampling and protein extraction to examine function of
          RNA helicases in cyanobacteria
        </span>
        <br />
      </Container>
    </Container>
    <Container className="volunteering-container">
      <h1>Volunteering</h1>
      <b>Montreal General Hospital</b>
      <br />
      <span>Friendly Visitor</span>
      <br />
      <span>November 2014 to April 2018</span>
      <br />
      <span>
        Weekly visits to patients in orthopaedic and general surgery wards to
        provide company and assistance
      </span>
      <br />
    </Container>
  </Container>
);

export default Education;
