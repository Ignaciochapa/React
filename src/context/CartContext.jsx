//import { useEffect } from "react";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad};
    const nuevoCarrito = [...carrito]
    const estaEnElCarrito = nuevoCarrito.find((prod) => prod.id === itemAgregado.id);
    

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
    console.log(nuevoCarrito)
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  },[carrito])

  return (
    <CartContext.Provider value={{carrito, setCarrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>{children}</CartContext.Provider>
  )
}