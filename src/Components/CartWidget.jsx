import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

  const { cantidadEnCarrito }= useContext(CartContext)

  return (
    <Link to="/cart"><i className="bi bi-cart">{cantidadEnCarrito()}</i></Link>
  )
}

export default CartWidget