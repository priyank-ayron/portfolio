import React, { Component } from "react";
import { Link } from "react-router-dom";
import homeAnime from "./../../assets/home_anime.gif";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div class="home-container">
        <div class="header-text">
          <h1>Hello, everyone!</h1>
          <p>This is Priyank Agarwal, a Software Development Engineer</p>
        </div>
        <div class="head-btns">
          <Link to="/about" className="btn btn-white">
            <p class="btn-text">Know more about me.</p>
          </Link>
          <Link to="/contact" className="btn btn-transparent">
            <p class="btn-text">Connect with me.</p>
          </Link>
        </div>
        <div class="splash-image">
          <img src={homeAnime} alt="anime" className="home-anime"></img>
        </div>
      </div>
    );
  }
}

export default Home;
