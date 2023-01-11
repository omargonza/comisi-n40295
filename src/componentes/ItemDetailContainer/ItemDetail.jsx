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


import  "./ItemDetail.css";

function ItemDetail({ product }) {
  const [countInCart, setCountInCart] = useState(0);

  const { addToCart, removeItem } = useContext(cartContext);
  const removeItemBtn={
    color:"white",
    margin: "1rem 0 0 0",
     maxwidth:"200px",
     padding:" 1rem 1rem",
     outline:"0",
     fontsize: "1.6rem",
     fontweight:"600",
     background: "#3033d3",
     borderadius:  "25px", 
     border:"none",
     cursor: "pointer"
   }

  


  function handleAddToCart(count) {
    //1. Guardar la cantidad en un estado
    setCountInCart(count);
    addToCart(product, count);
    //2. ocultar el itemCount . . .
  }

  const [compra, setCompra]= useState(false)
  const onAdd = (cantidad) => {
   //funcion de context q agrega al carrito
    setCompra(true)
  };
  return (
    <div>
      //codigo de itemdetail
     {compra ? <button>Ir al carrito</button>: <ItemCount stock={10} initial={1} onAdd={onAdd} />}
    </div>
  );



  console.log(product)
  return (
    <>
      <h1 className="Title">PRODUCTO</h1>
      <div className="productos">
        <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src={product.img} alt={product.title} />
            </div>
          </a>
          <div className="producto_footer">
            <h1>{product.title} </h1>
            
            <p> {product.description} </p>
            <p className="price">${product.price} </p>
          </div>
          <div className="buttom">
            <ItemCount stock={product.stock} onAddToCart={handleAddToCart} />
            <button style={removeItemBtn} onClick={() => removeItem(product.id)}>Remover el carrito</button>
            <Link to="/cart">Ir al carrito</Link>
          </div>
        </div> 
       </div>
    </>
  );
}

export default ItemDetail;