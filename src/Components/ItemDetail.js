import ItemCount from "./ItemCount"
import Card from 'react-bootstrap/Card';


const ItemDetail = ( {item} ) => {
    return (
      <div className="container">
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
        <ItemCount stock={20} onAdd={(cantidad) => console.log(cantidad)} className="boton-agregar"/>
        </Card>
          </div>
      </div>
    )
  }
  
  export default ItemDetail