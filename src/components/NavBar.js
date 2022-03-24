import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <li><NavLink exact to="/">Home</NavLink></li>
    <li><NavLink exact to="/movies">Movies</NavLink></li>
    <li><NavLink exact to="/directors">Directors</NavLink></li>
    <li><NavLink exact to="/actors">Actors</NavLink></li>
  </div>
  );
}

export default NavBar;
