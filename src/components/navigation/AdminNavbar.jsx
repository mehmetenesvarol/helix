import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

function AdminNavbar() {
  const navigate = useNavigate();

  function handleLogout() {
    // later: clear auth state
    navigate("/login");
  }

  return (
    <div className="navbar-wrapper">
      <div className="admin-navbar">
        <div className="admin-navbar-left">
          <div className="logo-admin">Helix Admin</div>

          <ul className="nav-links">
            <li>
              <NavLink to="/admin" end>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/admin/analytics">Analytics</NavLink>
            </li>
          </ul>
        </div>

        <div className="admin-navbar-right">
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;