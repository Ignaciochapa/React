import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {

  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="/productos/:categoria" element={<ItemListContainer/>}></Route>
      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
  );
}

export default App;