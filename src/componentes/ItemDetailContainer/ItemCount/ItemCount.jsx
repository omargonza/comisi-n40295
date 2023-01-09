import React, { useState } from "react";
import Button from "../../Button/Button";
import "./ItemCount.css";

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
        
      <div className="itemcount_control">
        <Button onbuttonTouch={handleSubstract}>
          -
        </Button>
        <h3 className="count">{count}</h3>
        <Button  onbuttonTouch={handleAdd}>
          +
        </Button>
      </div>
      <div className="itemcount_btns">
        <Button  onbuttonTouch={()=>onAddToCart(count)}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;