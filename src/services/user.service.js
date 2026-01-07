const BASE_URL = "http://localhost:4001/users";

export const getUsers = () => fetch(BASE_URL).then((res) => res.json());

export const deleteUser = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
