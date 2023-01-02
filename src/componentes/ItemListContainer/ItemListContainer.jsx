/*import React, { useState, useEffect } from "react";

import { getItems, getItemsCategory } from "../../service/firebase";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categoryID = useParams().categoryID;

  useEffect(() => {
    if (categoryID === undefined) {
      getItems().then((respuesta) => {
        setProducts(respuesta);
        setIsLoading(false);
      });
    } else {
      getItemsCategory(categoryID).then((respuestaFiltrada) => {
        setProducts(respuestaFiltrada);
        setIsLoading(false);
      });
    }
  }, [categoryID]);

  // 3. Return con if temprano - early "return"
  if (isLoading) {
    return <Loader />;
  }

  return <ItemList products={products} />;
}

export default ItemListContainer;
*/

import React, { useState, useEffect } from "react";

import { getItems, getItemsCategory } from "../../service/firebase";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categoryID = useParams().categoryID;

  useEffect(() => {
    if (categoryID === undefined) {
      getItems().then((respuesta) => {
        setProducts(respuesta);
        setIsLoading(false);
      });
    } else {
      getItemsCategory(categoryID).then((respuestaFiltrada) => {
        setProducts(respuestaFiltrada);
        setIsLoading(false);
      });
    }
  }, [categoryID]);

  // 3. Return con if temprano - early "return"
  
  console.log(products)
  return <div>
    <div style={{width:'100%', height:100}}></div>
    {isLoading ? <Loader /> :<ItemList products={products} />}
    </div>
}

export default ItemListContainer;