import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
//1. Traer el array del context
//2. desgloasar o "mapear" los items
import "boxicons"
import "./CartContainer.css"
/*
function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);

  //render condicional -> "carrito vacío , volvé al inicio"

  return (
    <div className="cartContainer">
      <h1>Tu carrito</h1>
      {cart.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <p>cantidad: {item.count}</p>
          <p>$ {item.price}</p>
          <h4>total: ${}</h4>
          <button>X</button>
        </div>
      ))}
    </div>
  );
}

export default CartContainer;
*/
function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);


  return (
<>
<div className="carritos show">
  <div className="carrito show">
    <div className="carrito_close">
    <button>
      <box-icon name="x"></box-icon>X</button>
    </div>
    <h1>Tu carrito</h1>
    {cart.map((item) => ( <>
    <div className="carrito-center">

      <div className="carrito-item">
        <img src="{cart} " alt=""/>
        <div>
          <h3>  {item.title}</h3>
          <p className="price">$ {item.price} </p>
          <h4>total: ${}</h4>
        </div>
      </div>
      <box-icon className="up-arrow" type="solid"></box-icon>
      <p className="cantidad">  {item.count}</p>

      <box-icon name="down-arrow" type="solid"></box-icon>
    </div>
    <div className="remove_item">
      <box-icon name="trash"></box-icon>
    </div>
    </>
      ))}

  </div>
</div>

</>
  );
}

export default CartContainer;