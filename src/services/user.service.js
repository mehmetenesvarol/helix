const BASE_URL = "http://localhost:3001/users"

export const getUsers = () =>
  fetch(BASE_URL).then(res => res.json())