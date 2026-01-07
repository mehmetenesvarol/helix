import React from "react";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/product.service";
import ProductCard from "../../components/ui/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <div className="products-container">
        <div className="products-container-title">
          <span>ID</span>
          <span>Title</span>
          <span>Price</span>
          <span>Category</span>
          <span>Stock</span>
        </div>
        <div className="products-wrapper">
          {products.map((p) => (
            <div key={p.id}>
              <ProductCard product={p}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
