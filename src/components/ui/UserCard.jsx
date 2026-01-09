import React from "react";
import { useState } from "react";

function UserCard({ user, onRemove, onChange }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="user-card">
      <div className="user-info">
        <h2>{user.id}</h2>
        <span>-{user.firstName}</span>
        <span>-{user.lastName}</span>
        <span>-{user.age}</span>
        <span>-{user.location}</span>
        <span>-{user.email}</span>
        <span>-{user.password}</span>
      </div>
      <div className="user-buttons">
        <button onClick={() => setIsEditing(!isEditing)}>Change</button>
        <button onClick={() => onRemove(user.id)}>Remove</button>
      </div>
      {isEditing && (
        <div className="edit-bar">
          <input defaultValue={user.firstName} />
          <input defaultValue={user.lastName} />
          <input defaultValue={user.age} />
          <input defaultValue={user.location} />
          <input defaultValue={user.email} />
          <input defaultValue={user.password} />

          <button onClick={() => console.log("first")}>Apply Changes</button>
        </div>
      )}
    </div>
  );
}

export default UserCard;
