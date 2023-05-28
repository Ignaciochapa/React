import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {

  return (
    <CartProvider>
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="/productos/:categoria" element={<ItemListContainer/>}></Route>
        <Route path="/cart" element={<Cart/>} ></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;