import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";

const App = () => (
  <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="about-me" element={<AboutMe />} />
    </Routes>
  </Router>
);

export default App;
