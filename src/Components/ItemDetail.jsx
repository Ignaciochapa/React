import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import Card from 'react-bootstrap/Card';
import { CartContext } from "../context/CartContext";


const ItemDetail = ( {item} ) => {

  const {agregarAlCarrito} = useContext(CartContext)

  const [cantidad, setCantidad] = useState(1);
    
    const restar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const sumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
      <div className="container-detalle">
          <div className="producto-detalle">
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.imagen} />
        <Card.Body>
        <Card.Title>{item.titulo}</Card.Title>
        <Card.Text>Categoria: {item.categoria}</Card.Text>
        <Card.Text>Material de fabricación: {item.material}</Card.Text>
        <Card.Text>Talles disponibles: {item.talles}</Card.Text>
        <Card.Text>Precio: ${item.precio}</Card.Text>
        </Card.Body>
        <ItemCount cantidad={cantidad} sumar={sumar} restar={restar} agregarAlCarrito={() => { agregarAlCarrito(item, cantidad) }} className="boton-agregar"/>
        </Card>
          </div>
      </div>
    )
  }
  
  export default ItemDetail