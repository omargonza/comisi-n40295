import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {

  return (
    <nav className="nav-menu">
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
              color: "crimson",
              fontSize: "1.5rem",
              textDecoration: "none",
              fontWeight: "bold",
              fontFamily: "cursive",
              hover:"red"
            }
            : { color: "black",fontSize:"1rem", textDecoration: "none" }
        }
        to="/"
      >
        Inicio
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
              color: "crimson",
              fontSize: "1.5rem",
              textDecoration: "none",
              fontWeight: "bold",
              fontFamily: "cursive",
            }
            : { color: "black", fontSize:"1rem", textDecoration: "none" }
        }
        to="/category/Remeras"
      >
        Remeras
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive
            ?  {
              color: "crimson",
              fontSize: "1.5rem",
              textDecoration: "none",
              fontWeight: "bold",
              fontFamily: "cursive",
            }
            : { color: "black", fontSize:"1rem", textDecoration: "none" }
        }
        to="/category/Calzados"
      >
        Calzados
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
              color: "crimson",
              fontSize: "1rem",
              textDecoration: "none",
              fontWeight: "bold",
              fontFamily: "cursive",
            }
            : { color: "black", textDecoration: "none" }
        }
        to="/category/Pantalones"
      >
        Pantalones
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "crimson",
                fontSize: "1rem",
                textDecoration: "none",
                fontWeight: "bold",
                fontFamily: "cursive",
              }
            : { color: "black", textDecoration: "none" }
        }
        to="/Page/Contactos"
      >
        Contactos
      </NavLink>
      <CartWidget />
    </nav>
  );
}

export default NavBar;

