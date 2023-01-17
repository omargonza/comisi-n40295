import React, { useContext, useState } from "react";
import {
  createBuyOrder,
  createBuyOrder_WithStockControl,
} from "../../service/firebase";
import { cartContext } from "../../storage/cartContext";
import { Link } from "react-router-dom";
import  "boxicons";
import CheckoutForm from "./CheckoutForm";
import "./CartContainer.css";


function CartContainer() {

  const [order, setOrder] = useState(false);
  const { cart, removeItem, totalPrice,clear } = useContext(cartContext);

  
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
      <p>Se generó la orden correctamente✅  </p>
      <small>Tu id de compra: {order}</small>
      
    </div>
  );
  

  return (
    <>
      {!cart.length ? (
        <>
          <h2>Tu carrito esta vacio</h2>
          <Link to="/inicio">Volver</Link>
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
              
                <div className="carrito_center" key={item.id}>
                  <div className="carrito_item">
                  <img height={180} src={item.img} alt={item.title} />
                    <h3> {item.title}</h3>

               <div>
                      <p className="price">$ {item.price} </p>
                      
                      <p className="cantidad"> {item.count}</p>
                      <button
                      onClick={() => {
                        removeItem(item.id);
                      }}
                      className="invisible-button"
                    >
                      
                      <box-icon name="trash"> </box-icon>
                    </button>
                  </div>
                      </div>
                  </div>
                   ))}

                  <div className="remove_item">
                    
                </div >
                <div className="carrito_footer">
                <h4>Precio Total ${totalPrice(cart)} </h4>
                <button onClick={clear}>Vaciar carrito</button>
                <CheckoutForm onCheckout={handleCheckout} />
                </div>
              
           
          </div>
        </div>
      )}
    </>
  );
}

export default CartContainer;

