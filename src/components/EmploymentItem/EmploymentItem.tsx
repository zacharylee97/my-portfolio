import "./EmploymentItem.css";
import Beslogic from "../Beslogic/Beslogic";
import Freelance from "../Freelance/Freelance";
import LinkAndLearn from "../LinkAndLearn/LinkAndLearn";

const EmploymentItem = ({ ...props }) => {
  if (props.selectedKey === "beslogic") {
    return <Beslogic />;
  } else if (props.selectedKey === "freelance") {
    return <Freelance />;
  } else if (props.selectedKey === "linkAndLearn") {
    return <LinkAndLearn />;
  } else {
    return null;
  }
};

export default EmploymentItem;
