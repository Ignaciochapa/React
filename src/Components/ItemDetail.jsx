import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
//import Item from './Item';

const ItemDetail = ({id, nombre, descripcion, imagen, material, talles, precio}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
            ID: {id}
        </Card.Text>
        <Card.Text>
            Descripción: {descripcion}
        </Card.Text>
        <Card.Text>
            Material: {material}
        </Card.Text>
        <Card.Text>
            Talles disponibles: {talles}
        </Card.Text>
        <Card.Text>
            Precio: ${precio}
        </Card.Text>
      </Card.Body>
      <ItemCount inicial={1} stock={20} onAdd={(cantidad) => console.log(cantidad)}/>
    </Card>
  )
}

export default ItemDetail