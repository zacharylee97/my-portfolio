import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./pages/Home/Home";
import LighthouseLabs from "./pages/LighthouseLabs/LighthouseLabs";
import Beslogic from "./pages/Beslogic/Beslogic";
import Education from "./pages/Education/Education";
import Freelance from "./pages/Freelance/Freelance";

const App = () => (
  <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="education" element={<Education />} />
      <Route path="lighthouse-labs" element={<LighthouseLabs />} />
      <Route path="beslogic" element={<Beslogic />} />
      <Route path="freelance" element={<Freelance />} />
    </Routes>
  </Router>
);

export default App;
