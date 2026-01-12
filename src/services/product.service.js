const BASE_URL = "http://localhost:4001/products";

export const getProducts = async () => {
  const res = await fetch(BASE_URL)
  if (!res.ok){
    throw new Error("Failed to fetch products")
  }
  return res.json();
}

export const deleteProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete product");
  }
  return res.json();
};