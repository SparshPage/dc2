import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Profile from "./views/profile";
import About from "./views/About";
import { SubNav } from "./views/SubNav";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Profile />
      <SubNav></SubNav>
    </div>
  );
}

export default App;
