import React from "react";
import { useEffect, useState } from "react";
import {
  getProducts,
  deleteProduct,
  updateProduct,
} from "../../services/product.service";
import EditProductCard from "../../components/ui/EditProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const handleRemove = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleUpdate = async (updatedProduct) => {
    try {
      const result = await updateProduct(updatedProduct.id, updatedProduct);

      setProducts((prevProduct) =>
        prevProduct.map((u) => (u.id === result.id ? result : u))
      );
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="edit-products-container">
      <div className="edit-products-container-title">
        <span>ID</span>
        <span>Title</span>
        <span>Price</span>
        <span>Category</span>
        <span>Stock</span>
      </div>
      <div className="edit-products-wrapper">
        {products.map((p) => (
          <EditProductCard
            key={p.id}
            product={p}
            onRemove={handleRemove}
            onChange={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
