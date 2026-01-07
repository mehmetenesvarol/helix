import React from "react";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../services/user.service";
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

  return (
    <div>
      {users.map((u) => (
        <UserCard key={u.id} user={u} onRemove={handleRemove} />
      ))}
    </div>
  );
}

export default Users;
