const BASE_URL = "http://localhost:4001/users";

export const getUsers = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
};

export const deleteUser = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete user");
  }
  return res.json();
};

export const updateUser = async (id, updatedUser) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT", // veya PATCH, backend’e bağlı olarak
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });
  if (!res.ok) {
    throw new Error("Failed to update user");
  }
  return res.json();
};
