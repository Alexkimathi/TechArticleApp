import React from 'react'
import { NavLink } from "react-router-dom";
import '../../src/App.css';

function Navbar() {
  return (
    <nav className="nav">
      <div className="site-title">
        <NavLink to={"/"} exact="true">
          TECH-ARTICLES
        </NavLink>
      </div>
      <ul>
        <NavLink to={"/"} exact="true">
          All Articles
        </NavLink>
        <NavLink to={"/newarticles"} exact="true">
          NewArticles
        </NavLink>
    
      </ul>
    </nav>
  );
}

export default Navbar