
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./Page/Contactos";
import NavBar from "./componentes/NavBar/NavBar";
import { CartContextProvider } from "./storage/cartContext";
import CartContainer from "./componentes/CartContainer/CartContainer";
import { getItems } from "./service/firebase";
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
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          <Route path="/item/:itemID" element={<ItemDetailContainer />} />
          <Route path="./Page/contactos" element={<Contacto />} />
          
          <Route path="/cart" element={<CartContainer />} />

          <Route path="*" element={<h1>404: Recurso no encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;