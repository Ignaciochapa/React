import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({inicial, stock, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicial)

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
        <Button className='button' onClick={decremento}>-</Button>
        <p className='number'>{cantidad}</p>
        <Button className='button' onClick={incremento}>+</Button>
        </div>
        <div>
            <Button onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al carrito</Button>
        </div>
    </div>
  )
}

export default ItemCount