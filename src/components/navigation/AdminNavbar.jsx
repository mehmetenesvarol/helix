import { NavLink, useNavigate } from "react-router-dom";
import "./AdminNavbar.css";
import logo from "../../assets/images/navbar-logo.png";

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
          <div className="logo-admin">
            <img src={logo} alt="" />
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/admin" end>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/analytics">Analytics</NavLink>
            </li>
            <li>
              <NavLink to="/admin/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/admin/products">Products</NavLink>
            </li>
          </ul>
        </div>

        <div className="admin-navbar-right">
          <h3>
            Admin
          </h3>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
