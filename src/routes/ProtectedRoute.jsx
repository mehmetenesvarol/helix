import { Navigate, Outlet } from "react-router-dom";
import React from "react";

function ProtectedRoute() {
  
  const isAuth = "true";

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />
}

export default ProtectedRoute;