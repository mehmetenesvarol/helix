const BASE_URL = "http://localhost:4001/products";

export const getProducts = () => fetch(BASE_URL).then((res) => res.json());

export const deleteProduct = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
