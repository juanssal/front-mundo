import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul className="pages">
      <NavLink exact="true"  to="/" className="link" activeclassname="selected-link">
        <li>INICIO</li>
      </NavLink>
      {/* <NavLink exact="true"  to="/podcasts" className="link" activeclassname="selected-link">
        <li>PODCAST</li>
      </NavLink>
      <NavLink exact="true"  to="/nosotros" className="link" activeclassname="selected-link" >
        <li>NOSOTROS</li>
      </NavLink> */}
    </ul>
  );
}

export default Navigation;