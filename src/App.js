import React from 'react';
import './App.css';
import Item from './componentes/Item/Item';
import NavBar from './componentes/NavBar';

import CartWidget from './componentes/CartWidget/CartWidget';
function App() {
  return (
   < >

<NavBar/>

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
></Item>


   </>
  );
}

export default App;
