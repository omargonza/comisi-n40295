import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount/ItemCount";
import { cartContext } from "../../storage/cartContext";
import  "./ItemDetail.css";

function ItemDetail({ product }) {
  const [compra, setCompra]= useState(false)
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
    addToCart(product, count);
    setCompra(true)
    
  }

  console.log(product.stock)
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
            {!compra ? <ItemCount stock={product.stock} onAddToCart={handleAddToCart} />
            :<><button style={removeItemBtn} onClick={() => removeItem(product.id)}>Remover el carrito</button>
            <Link to="/cart">Ir al carrito</Link></>}
          </div>
        </div> 
       </div>
    </>
  );
}

export default ItemDetail;