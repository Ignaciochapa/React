import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-router-dom';

const Cart = () => {

    const {carrito, setCarrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const borrarProducto = (id) => {
        const productoAEliminar = carrito.find((prod) => prod.id === id)
        const nuevoCarrito = carrito.filter((prod) => {
            return prod !== productoAEliminar
        })
        setCarrito(nuevoCarrito)
    }

    const limpiarCarrito = () => {
        vaciarCarrito();
    }

  return (
    <div className='container-cart'>
        <h1 className='main-title-cart'>Carrito de compras</h1>
        {
            carrito.map((prod) => {

                    return <ListGroup key={prod.id}>
                    <ListGroup.Item>{prod.titulo}</ListGroup.Item>
                    <ListGroup.Item>Cantidad de unidades: {prod.cantidad}</ListGroup.Item>
                    <ListGroup.Item>Precio unitario: ${prod.precio}</ListGroup.Item>
                    <ListGroup.Item>Subtotal: ${prod.precio * prod.cantidad}</ListGroup.Item>
                    <CloseButton onClick={() => borrarProducto(prod.id)}/>
                    </ListGroup>
            })
        }
        <div className='cart-controls'>
        <h2>Precio Total: ${precioTotal()}</h2>
        <button onClick={limpiarCarrito} className='boton-vermas'>Vaciar carrito</button>
        <Link className='boton-vermas2' to='/checkout'>Finalizar compra</Link>
        </div>
    </div>
  )
}

export default Cart