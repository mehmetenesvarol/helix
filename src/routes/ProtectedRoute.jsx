import { Navigate, Outlet } from "react-router-dom";
import React from "react";

function ProtectedRoute() {
//   const isAuth = localStorage.getItem("isAuth") === "true";
  const isAuth = "true";

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />
}

export default ProtectedRoute;