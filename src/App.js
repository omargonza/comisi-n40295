
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./componentes/NavBar/NavBar";
import { CartContextProvider } from "./storage/cartContext";
import CartContainer from "./componentes/CartContainer/CartContainer";
import { getItems } from "./service/firebase";
import ThankYou from "./componentes/ThanKYou/ThanKYou";
import Inicio from "./componentes/inicio/Inicio";

import "./index.css";




function App() {
  getItems();
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar
          onNavigate={(ruta) => console.log("Estas navegando a la ruta", ruta)}
        />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          <Route path="/item/:itemID" element={<ItemDetailContainer />} />
      
          
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/Thankyou/:orderID" element={<ThankYou />} />
          <Route path="*" element={<h1>404: Recurso no encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;