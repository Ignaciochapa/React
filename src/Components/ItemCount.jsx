import { Link } from "react-router-dom"

const ItemCount = ({cantidad, sumar, restar, agregarAlCarrito}) => {
  return (
    <div className='contador'>
        <div className='controles'>
        <button onClick={restar} className='button'>-</button>
        <p className='number'>{cantidad}</p>
        <button onClick={sumar} className='button'>+</button>
        </div>
        <div>
            <Link onClick={agregarAlCarrito} className="boton-vermas">Agregar al carrito</Link>
        </div>
    </div>
  )
}

export default ItemCount