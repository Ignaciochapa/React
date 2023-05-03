import React, { useEffect, useState } from 'react'
import '../App.css'
import ItemDetail from './ItemDetail'
import { getProductsId } from '../ProductList'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])

    const {itemId} = useParams()

    useEffect(() => {
      getProductsId(itemId)
      .then(response => {
        setProduct(response)
      })
      .catch(error => {
        console.log(error)
      })
    }, [itemId])
    
  return (
    <div className='ItemDetailContainer'>
        <ItemDetail key={product.id}{...product}/>
    </div>
  )
}

export default ItemDetailContainer