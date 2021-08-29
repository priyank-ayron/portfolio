import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import aboutVector from "./../../assets/about_vector.png";
import "./About.css";
import aboutAnime from "./../../assets/about_anime.gif";

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me."
        details="An avid learner | A team player | Outgoing and detail-oriented | Inquisitive | Action-oriented "
      />

      <div className="about-main">
        <div className="about-main-left">
          {/* Sub section 1 */}
          <h3 className="about-sub-head">SDE II at Expedia Group</h3>
          <p className="about-details">
            My work is focussed on network infrastructure automation, which
            makes multiple processes efficient, cost effective & easier to
            manage.
          </p>

          {/* Sub section 2 */}
          <h3 className="about-sub-head">An avid learner</h3>
          <p className="about-details">
            I have been learning more about cloud technologies which will
            broaden my knowledge about the infrastructure domain.
          </p>

          {/* Sub section 3 */}
          <h3 className="about-sub-head">Volunteer</h3>
          <p className="about-details">
            I have been a volunteer in the fundraising event by National
            Association for the Blind, sponsored by Expedia Cares.
          </p>
        </div>

        <div className="about-main-right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>

      <FooterLink
        phrase="Check out my "
        link="projects!"
        toAdress="/projects"
      />
      {/* Vector Frame! */}
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;
