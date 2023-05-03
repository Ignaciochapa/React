import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, imagen, precio, descripcion}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
            {descripcion}
        </Card.Text>
        <Card.Text>
            ${precio}
        </Card.Text>
        <Link to={`/item/${id}`}>Ver detalle</Link>
      </Card.Body>
    </Card>
  )
}

export default Item