import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import GoHome from "../GoHome/GoHome";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <NavBar />
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/experience" component={Experience}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/skills" component={Skills}></Route>
          <Route path="/contact" component={Contact}></Route>
          <GoHome></GoHome>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
