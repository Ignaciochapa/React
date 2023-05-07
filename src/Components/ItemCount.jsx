import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ItemCount = ({stock, onAdd}) => {
    const [cantidad, setCantidad] = useState(1)

    const incremento = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const decremento = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
  return (
    <div className='contador'>
        <div className='controles'>
        <button className='button' onClick={decremento}>-</button>
        <p className='number'>{cantidad}</p>
        <button className='button' onClick={incremento}>+</button>
        </div>
        <div>
            <Link onClick={() => onAdd(cantidad)}>Agregar al carrito</Link>
        </div>
    </div>
  )
}

export default ItemCount