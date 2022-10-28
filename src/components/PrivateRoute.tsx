import React from "react";
import { Outlet, Navigate } from "react-router";
import useAuthStatus from "../hooks/useAuthStatus";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <h3>Loading...</h3>;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/signin/" />;
};

export default PrivateRoute;
