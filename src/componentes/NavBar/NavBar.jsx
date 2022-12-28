import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  let activeStyle = {
    color: "red",
    textDecoration: "underline",
  };

  return (
    <nav className="nav-menu">
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/"
      >
        Inicio
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/category/Remeras"
      >
        Remeras
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/category/Calzados"
      >
        Calzados
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/category/Pantalones"
      >
        Pantalones
      </NavLink>
      
      <CartWidget />
    </nav>
  );
}

export default NavBar;