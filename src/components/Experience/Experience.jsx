import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import { experienceData } from "../../assets/experienceData";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="section-container">
      <Header
        heading="My Work Experience."
        details="Here are a few things I've worked on!"
      />

      <div className="experience-cards-container">
        {experienceData.map(({ experienceName, experienceDescription }) => {
          return (
            <ExperienceCard
              experienceName={experienceName}
              experienceDescription={experienceDescription}
            />
          );
        })}
      </div>

      <FooterLink
        phrase="Check out "
        link="my projects!"
        toAdress="/projects"
      />
    </div>
  );
};

export default Experience;
