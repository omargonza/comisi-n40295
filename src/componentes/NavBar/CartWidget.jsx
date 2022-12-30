import { useContext } from "react";
import React from "react";
import { cartContext } from "../../storage/cartContext";
import { BsFillCartFill } from 'react-icons/bs';
import "./NavBar.css"

function CartWidget() {
  const valueContext = useContext(cartContext);
  const totalItems = valueContext.totalItemsInCartfn();
  return (
    <div className="cart">
     <BsFillCartFill />
       {totalItems > 0 &&<span> {totalItems}</span>}
    </div>
  );
}

export default CartWidget;
