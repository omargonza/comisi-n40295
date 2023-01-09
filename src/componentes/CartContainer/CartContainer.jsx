import React, { useContext, useState } from "react";

import {
  createBuyOrder,
  createBuyOrder_WithStockControl,
} from "../../services/firebase";
import Button from "../Button/Button";
import swal from "sweetalert";
import { cartContext } from "../../storage/cartContext";
import { Link } from "react-router-dom";
import Card from "../../service/firebase/firestore";
import CheckoutForm from "./CheckoutForm";
//1. Traer el array del context
//2. desgloasar o "mapear" los items
import "boxicons";
import "./CartContainer.css";

function CartContainer() {

  const [order, setOrder] = useState(false);
  const { cart,  } = useContext(cartContext);

  
  function handleCheckout(buyerData) {
    const order = {
      buyer: buyerData,
      items: cart,
      /* Calcular el total desde context */
      total: 999,
      date: new Date(),
    };

    createBuyOrder_WithStockControl(order).then((id) => {
      setOrder(id);
    });
  }
  if (order)
  return (
    <div>
      <h1>Gracias!</h1>
      <p>Se generó la orden correctamente✅</p>
      <small>Tu id de compra: {order}</small>
    </div>
  );
  

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
              <button  >
                <box-icon name="x"></box-icon>
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
                </div >
                <div className="carrito_footer">
                <h4>Precio Total ${totalPrice(cart)} </h4>
                <CheckoutForm onCheckout={handleCheckout} />
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CartContainer;
