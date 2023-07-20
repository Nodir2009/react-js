import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ authState }) {
  return authState.loggedIn ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedRoute;