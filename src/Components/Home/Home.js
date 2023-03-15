import React, { useState, useEffect } from 'react'
import {Card} from '../Card/Card'
import './Home.css'
export const Home = () => {
   const [products, setProduct] = useState([])
   async function fetchProducts() {
    const products = await fetch('https://fakestoreapi.com/products')
    return products.json()
   }
   useEffect(() => {
    fetchProducts().then(response => setProduct(response.map(el => el)))
   }, [])
  return (
    <div className='products'>
        {products.map(product => (
            <Card key={product.id} details={product} />
        ))}
    </div>
  )
}
