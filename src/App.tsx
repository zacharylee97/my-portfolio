import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./pages/Home/Home";

const App = () => (
  <Router>
    <NavigationBar />
    <Routes>
      <Route path="home" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
