import React from "react";
import { useState } from "react";

function UserCard({ user, onRemove, onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [location, setLocation] = useState(user.location);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  return (
    <div className="user-card">
      <div className="user-info">
        <span>{user.id}</span>
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
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input value={age} onChange={(e) => setAge(e.target.value)} />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={() => {
              const updatedUser = {
                id: user.id,
                firstName,
                lastName,
                age,
                location,
                email,
                password,
              };
              onChange(updatedUser);
              setIsEditing(false);
            }}
          >
            Apply Changes
          </button>
        </div>
      )}
    </div>
  );
}

export default UserCard;
