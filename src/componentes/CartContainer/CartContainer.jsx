import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import { Link } from "react-router-dom";
import Card from "../../imagenes/img05.jpg";
//1. Traer el array del context
//2. desgloasar o "mapear" los items
import "boxicons";
import "./CartContainer.css";

function CartContainer() {
  const { cart, removeItem, clear, totalPrice } = useContext(cartContext);

  //render condicional ->"carrito vacio, volver al inicio"

  return (
    <>
      {!cart.length ? (
        <>
          <h2>Tu carrito esta vacio</h2>
          <Link to="/">Volver</Link>
        </>
      ) : (
        <div className="carritos show">
          <div className="carrito show">
            <div className="carrito_close">
              <button>
                <box-icon name="x"></box-icon>X
              </button>
            </div>
            <h1>Tu carrito</h1>
            {cart.map((item) => (
              <>
                <div className="carrito-center">
                  <div className="carrito-item">
                    <img src={Card} alt="" />
                    <h3> {item.title}</h3>

                    <div>
                      <p className="price">$ {item.price} </p>
                      <box-icon name="up-arrow" type="solid"></box-icon>
                      <p className="cantidad"> {item.count}</p>
                      <box-icon name="down-arrow" type="solid"></box-icon>
                    </div>
                  </div>

                  <div className="remove_item">
                    <button
                      onClick={() => {
                        removeItem(item);
                      }}
                      className="invisible-button"
                    >
                      
                      <box-icon name="trash"> </box-icon>
                    </button>
                  </div>
                </div>
                <h4>Precio Total ${totalPrice(cart)} </h4>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CartContainer;
