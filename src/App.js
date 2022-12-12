import React from 'react';
import './App.css';
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './componentes/NavBar/NavBar.jsx';





function App() {
  return (
   < >
<BrowserRouter>
<NavBar/>
<Routes>
<Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryID" element={<ItemListContainer />} />
        <Route path="/item/:itemID" element={<ItemDetailContainer />} />

       
        <Route path="*" element={<h1>404: Recurso no encontrado</h1>} />
{/*
<Item onClick={console.log}
price={5000}
title="Taladro electrico"
description="Con función reversa.
Cuenta con función destornillador.
Incluye función percutor.
Velocidad máxima de rotación: 1650rpm.
Posee control de torque.
Tiene luz led.
"
imgUrl="https://http2.mlstatic.com/D_NQ_NP_902951-MLA47752673434_102021-O.webp"
></Item>*/}

</Routes>
</BrowserRouter>


   </>
  );
}

export default App;
