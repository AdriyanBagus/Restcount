import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from "@clerk/clerk-react";

const PrivateRoute = ({ children }) => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
