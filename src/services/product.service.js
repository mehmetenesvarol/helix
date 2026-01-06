const BASE_URL = "http://localhost:3001/products"

export const getProducts = () =>
  fetch(BASE_URL).then(res => res.json())