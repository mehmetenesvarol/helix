import React from "react";
import { useState } from "react";

function UserCard({ user, onRemove, onChange }) {
  const [userValue, setUserValue] = useState({ ...user });
  const [isEditing, setIsEditing] = useState(false);

  const applyChanges = () => {
    if (!/^\d+$/.test(userValue.age)) {
      alert("Please enter a valid age");
      return;
    }
    if (!userValue.email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    if (userValue.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    onChange(userValue);
    setIsEditing(false);
  };

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
            value={userValue.firstName}
            onChange={(e) =>
              setUserValue((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
          <input
            value={userValue.lastName}
            onChange={(e) =>
              setUserValue((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
          <input
            value={userValue.age}
            onChange={(e) =>
              setUserValue((prev) => ({ ...prev, age: e.target.value }))
            }
          />
          <input
            value={userValue.location}
            onChange={(e) =>
              setUserValue((prev) => ({ ...prev, location: e.target.value }))
            }
          />
          <input
            value={userValue.email}
            onChange={(e) =>
              setUserValue((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            value={userValue.password}
            onChange={(e) =>
              setUserValue((prev) => ({ ...prev, password: e.target.value }))
            }
          />

          <button onClick={applyChanges}>Apply Changes</button>
        </div>
      )}
    </div>
  );
}

export default UserCard;
