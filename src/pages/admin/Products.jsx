import React from "react";
import { useEffect, useState } from "react";
import { getProducts,deleteProduct } from "../../services/product.service";
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

  // editing func
  // const handleChange = async (id) => {
  //   const updatedProducts = products.map((p) =>
  //     p.id === id ? { ...p, stock: p.stock + 1 } : p
  //   );

  //   const updatedProduct = updatedProducts.find((p) => p.id === id);
  //   await updateProduct(id, updatedProduct);

  //   setProducts(updatedProducts);
  // };

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
            // onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
