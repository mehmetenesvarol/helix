import React from "react";
import { useEffect, useState } from "react";
import { getUsers, deleteUser, updateUser } from "../../services/user.service";
import UserCard from "../../components/ui/UserCard";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleRemove = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((p) => p.id !== id));
  };

  const handleUpdate = async (updatedUser) => {
    try {
      const result = await updateUser(updatedUser.id, updatedUser);

      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === result.id ? result : u))
      );
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div>
      {users.map((u) => (
        <UserCard
          key={u.id}
          user={u}
          onRemove={handleRemove}
          onChange={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Users;
