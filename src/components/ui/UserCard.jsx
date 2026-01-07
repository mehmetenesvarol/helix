import React from "react";

function UserCard({user,onRemove,onChange}) {
  return (
    <div className="user-card">
      <div className="user-info">
        <h2>{user.id}</h2>
        <span>-{user.firstName}</span>
        <span>-{user.secondName}</span>
        <span>-{user.age}</span>
        <span>-{user.location}</span>
        <span>-{user.email}</span>
        <span>-{user.password}</span>
      </div>
      <div className="user-buttons">
        <button onClick={() => onChange(user.id)}>Change</button>
        <button onClick={() => onRemove(user.id)}>Remove</button>
      </div>
    </div>
  );
}

export default UserCard;
