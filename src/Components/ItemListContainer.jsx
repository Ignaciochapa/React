import React, { useEffect, useState } from 'react'
import '../App.css'
import { getProducts } from '../ProductList'
import ItemList from './ItemList'
//import { useParams } from 'react-router-dom'

const ItemListContainer = (greeting) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
      getProducts()
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.log(error)
      })
    }, [])
    

    // const {categoriaId} = useParams()

    // useEffect(() => {
    //   const asyncFn = categoriaId ? getProductsCategory : getProducts

    //   asyncFn(categoriaId)
    //   .then(response => {
    //     setProducts(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // }, [categoriaId])

    const titulo = greeting.titulo
  return (
    <div className='ItemListContainer'>
      <h1 className='titulo'>{titulo}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer