import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

const Item = ( {producto} ) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.titulo}</Card.Title>
        <Card.Text>{producto.categoria}</Card.Text>
        <Card.Text>Precio: ${producto.precio}</Card.Text>
        <Link className='boton-vermas' to={`/item/${producto.id}`}>Ver más</Link>
      </Card.Body>
    </Card>
  )
}

export default Item