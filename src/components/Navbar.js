import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div className="site-title">
        <NavLink to={"/"} exact="true">
          ArtCalleryWebApp
        </NavLink>
      </div>
      <ul>
        <NavLink to={"/"} exact="true">
          AllArts
        </NavLink>
        <NavLink to={"/newarticles"} exact="true">
          NewArts
        </NavLink>
        <NavLink to={"/newarticles"} exact="true">
          FavouriteArts
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar