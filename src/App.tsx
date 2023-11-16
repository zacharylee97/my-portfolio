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
import Employment from "./pages/Employment/Employment";
import Education from "./pages/Education/Education";

const App = () => (
  <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="education" element={<Education />} />
      <Route path="lighthouse-labs" element={<LighthouseLabs />} />
      <Route path="employment" element={<Employment />} />
    </Routes>
  </Router>
);

export default App;
