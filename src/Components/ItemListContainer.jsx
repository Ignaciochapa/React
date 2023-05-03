import React, { useEffect, useState } from 'react'
import '../App.css'
import { getProducts, getProductsCategory } from '../ProductList'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (greeting) => {

    const [products, setProducts] = useState([])

    const {categoriaId} = useParams()

    useEffect(() => {
      const conseguirIdCategoria = categoriaId ? getProductsCategory : getProducts

      conseguirIdCategoria(categoriaId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.log(error)
      })
    }, [categoriaId])

    const titulo = greeting.titulo
  return (
    <div className='ItemListContainer'>
      <h1 className='titulo'>{titulo}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer