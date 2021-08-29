import React from "react";
import { stack as Menu } from "react-burger-menu";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    const { location } = this.props;
    const homeclass = location.pathname === "/" ? "active-item" : "";
    const aboutclass = location.pathname === "/about" ? "active-item" : "";
    const experienceclass =
      location.pathname === "/experience" ? "active-item" : "";
    const projectsclass =
      location.pathname === "/projects" ? "active-item" : "";
    const skillsclass = location.pathname === "/skills" ? "active-item" : "";
    const contactclass = location.pathname === "/contact" ? "active-item" : "";

    return (
      <Menu>
        <Link to="/" className={`menu-item ${homeclass}`}>
          Home
        </Link>
        <Link to="/about" className={`menu-item ${aboutclass}`}>
          About
        </Link>
        <Link to="/experience" className={`menu-item ${experienceclass}`}>
          Experience
        </Link>
        <Link to="/projects" className={`menu-item ${projectsclass}`}>
          Projects
        </Link>
        <Link to="/skills" className={`menu-item ${skillsclass}`}>
          Skills
        </Link>
        <Link to="/contact" className={`menu-item ${contactclass}`}>
          Contact
        </Link>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
