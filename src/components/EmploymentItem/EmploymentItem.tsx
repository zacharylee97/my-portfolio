import "./EmploymentItem.css";
import Beslogic from "../Beslogic/Beslogic";
import Freelance from "../Freelance/Freelance";

const EmploymentItem = ({ ...props }) => {
  if (props.selectedKey === "beslogic") {
    return <Beslogic />;
  } else if (props.selectedKey === "freelance") {
    return <Freelance />;
  } else {
    return null;
  }
};

export default EmploymentItem;
