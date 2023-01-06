import React from "react";
import { Link } from "react-router-dom";
import Portada from "../../imagenes/imgPortada.jpg"
 import "./inicio.css"


function Inicio() {
  return (
    <div className="inicio">
        <Link to="/">
        <h1 >  Inicio</h1>
        </Link>
      <div className="contenedorImg">
        <img src={Portada}  alt="imgPortada" width={650}/>
        </div>
    </div>
  )
}

export default Inicio