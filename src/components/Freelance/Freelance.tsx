import "./Freelance.css";

const Freelance = () => (
  <div className="freelance-container">
    <h1>Freelance</h1>
    <div className="project">
      <b>Queer Aquarian</b>
      <br />
      <a href="https://queer-aquarian.netlify.app">
        https://queer-aquarian.netlify.app
      </a>
      <p>November 2023 to Current</p>
      <p>Website for Queer Aquarian Inc.</p>
      <p>TECH: Next.js, Typescript, Tailwind CSS</p>
    </div>
    <div className="project">
      <b>FLC Consulting</b>
      <br />
      <a href="https://flc-consulting.netlify.app">
        https://flc-consulting.netlify.app
      </a>
      <p>August 2023 to October 2023</p>
      <p>Website for FLC Consulting</p>
      <p>TECH: Next.js, Typescript, Tailwind CSS</p>
    </div>
  </div>
);

export default Freelance;
