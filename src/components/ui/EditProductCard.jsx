import React from "react";
import { useState } from "react";

function EditProductCard({ product, onRemove, onChange }) {
  const [productValue, setProductValue] = useState({ ...product });
  const [isEditing, setIsEditing] = useState(false);

  const applyChanges = () => {
    if (!/^\d+([.,]\d{1,2})?$/.test(productValue.price)) {
      alert("Please enter a valid price");
      return;
    }
    if (!/^\d+$/.test(productValue.stock)) {
      alert("Please enter a valid stock value");
      return;
    }
    onChange(productValue);
    setIsEditing(false);
  };
  return (
    <div className="product-card">
      <div className="product-info">
        <span>{product.id}</span>
        <span>{product.title}</span>
        <span>{product.price}</span>
        <span>{product.category}</span>
        <span>{product.stock}</span>
      </div>
      <div className="product-buttons">
        <button
          onClick={() => {
            if (isEditing) {
              setProductValue({ ...product });
            }
            setIsEditing(!isEditing);
          }}
        >
          Change
        </button>

        <button onClick={() => onRemove(product.id)}>Remove</button>
      </div>

      {isEditing && (
        <div className="edit-bar">
          <input
            value={productValue.title}
            onChange={(e) =>
              setProductValue((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <input
            value={productValue.price}
            onChange={(e) =>
              setProductValue((prev) => ({ ...prev, price: e.target.value }))
            }
          />
          <input
            value={productValue.category}
            onChange={(e) =>
              setProductValue((prev) => ({ ...prev, category: e.target.value }))
            }
          />
          <input
            value={productValue.stock}
            onChange={(e) =>
              setProductValue((prev) => ({ ...prev, stock: e.target.value }))
            }
          />

          <button onClick={applyChanges}>Apply Changes</button>
        </div>
      )}
    </div>
  );
}

export default EditProductCard;
