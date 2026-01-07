import React from "react";

function EditProductCard({ product, onChange, onRemove }) {
  return (
    <div className="edit-product-card">
      <div className="edit-product-info">
        <span>{product.id}</span>
        <span>{product.title}</span>
        <span>{product.price}</span>
        <span>{product.category}</span>
        <span>{product.stock}</span>
      </div>
      <div className="edit-product-buttons">
        <button onClick={() => onChange(product.id)}>Change</button>
        <button onClick={() => onRemove(product.id)}>Remove</button>
      </div>
    </div>
  );
}

export default EditProductCard;
