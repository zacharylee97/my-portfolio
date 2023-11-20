import "./Employment.css";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import EmploymentItem from "../../components/EmploymentItem/EmploymentItem";

const Employment = () => {
  const [selectedKey, setSelectedKey] = useState("beslogic");

  return (
    <div className="page-container">
      <h1>Employment</h1>
      <Nav
        variant="underline"
        defaultActiveKey="beslogic"
        onSelect={(selectedKey) => setSelectedKey(selectedKey ?? "")}
      >
        <Nav.Item>
          <Nav.Link eventKey="beslogic">Beslogic</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="freelance">Freelance</Nav.Link>
        </Nav.Item>
      </Nav>
      <EmploymentItem selectedKey={selectedKey} />
    </div>
  );
};

export default Employment;
