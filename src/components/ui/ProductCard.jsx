import React from 'react'

function ProductCard({product}) {
  return (
    <div className='product-card'>
        <span>{product.id}</span>
        <span>{product.title}</span>
        <span>{product.price}</span>
        <span>{product.category}</span>
        <span>{product.stock}</span>
    </div>
  )
}

export default ProductCard