/*
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount/ItemCount";
import { cartContext } from "../../storage/cartContext";
import "./ItemDetail.css"
function ItemDetail({ product }) {
  const [countInCart, setCountInCart] = useState(0);

  const { addToCart, removeItem } = useContext(cartContext);

  function handleAddToCart(count) {
    //1. Guardar la cantidad en un estado
    setCountInCart(count);
    addToCart(product, count);
    //2. ocultar el itemCount . . .
  }

  return (
    <>
    
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="card-detail_detail">
        <h1>{product.title}</h1>
        <h4 className="priceTag">$ {product.price}</h4>
        <p>{product.description}</p>
      </div>
      <ItemCount onAddToCart={handleAddToCart} />

      <button onClick={() => removeItem(product.id)}>X</button>
      <Link to="/cart">Ir al carrito</Link>
    </div>
    </>
  );
}

export default ItemDetail;
*/

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount/ItemCount";
import { cartContext } from "../../storage/cartContext";
import CartWidget from "../NavBar/CartWidget";

import "./ItemDetail.css";
function ItemDetail({ product }) {
  const [countInCart, setCountInCart] = useState(0);

  const { addToCart, removeItem } = useContext(cartContext);

  function handleAddToCart(count) {
    //1. Guardar la cantidad en un estado
    setCountInCart(count);
    addToCart(product, count);
    //2. ocultar el itemCount . . .
  }

  return (
    <>
      <h1 className="Title">PRODUCTO</h1>
      <div className="productos">
        <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src={product.imag} alt={product.title} />
            </div>
          </a>
          <div className="producto_footer">
            <h1>{product.title} </h1>
            <p> {product.description} </p>
            <p className="price">${product.price} </p>
          </div>
          <div className="buttom">
            <ItemCount onAddToCart={handleAddToCart} />
            <button onClick={() => removeItem(product.id)}>X</button>
            <Link to="../NavBar/CartWidget">Ir al carrito</Link>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
