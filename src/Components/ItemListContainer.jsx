import React from 'react'
import '../App.css'

const ItemListContainer = (greeting) => {
    const titulo = greeting.titulo
  return (
    <h1 className='titulo'>{titulo}</h1>
  )
}

export default ItemListContainer