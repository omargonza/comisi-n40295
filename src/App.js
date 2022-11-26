import React from 'react';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar';
import  'boxicons';
import CartWitch from './componentes/CartWitch/CartWitch';
function App() {
  return (
   <>

<NavBar/>
<CartWitch/> 
<ItemListContainer onClick={console.log}>Aguante</ItemListContainer>
<ItemListContainer onClick={console.log}>la</ItemListContainer>
<ItemListContainer onClick={console.log}>Selección!!</ItemListContainer>
   </>
  );
}

export default App;
