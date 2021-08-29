import React from "react";
import "./Experience.css";

const ExperienceCard = ({ experienceName, experienceDescription }) => {
  const a = experienceDescription[0];
  const b = experienceDescription[1];
  return (
    <div className="experience-card">
      <div className="experience-details-container">
        <h2 className="experience-heading">{experienceName}</h2>
        <ul>
          <li>
            <p className="experience-details">{a}</p>
          </li>
          <li>
            <p className="experience-details">{b}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
