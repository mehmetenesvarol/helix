import React from 'react'
import { useEffect, useState } from "react"
import { getProducts } from "../../services/product.service"

function Products() {

  const [products, setProducts] = useState([])
  
    useEffect(() => {
    getProducts().then(data => {
      setProducts(data)
    })
  }, [])

  console.log(products)
  
  return (
    <div>
    {products.map(p =>(
      <div key={p.id}>
        <hr />
        <h2>{p.id}</h2>
        <span>{p.title}</span>
        <span>{p.price}</span>
      </div>
    ))}    
    </div>
  )
}

export default Products