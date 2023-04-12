import Footer from './Components/Footer';
import Header from './Components/Header';
import ItemListContainer from './Components/ItemListContainer';
import './App.css';
import CarouselDeImagenes from './Components/CarouselDeImagenes';

function App() {
  return (
    <>
    <Header/>
    <ItemListContainer titulo="Bienvenido a Kenzo"/>
    <CarouselDeImagenes/>
    <Footer/>
    </>
  );
}

export default App;
