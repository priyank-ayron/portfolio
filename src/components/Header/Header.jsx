import React from "react";

function Header({ heading, details }) {
  return (
    <div className="header-container">
      <h1>{heading}</h1>
      <p>{details}</p>
    </div>
  );
}

export default Header;