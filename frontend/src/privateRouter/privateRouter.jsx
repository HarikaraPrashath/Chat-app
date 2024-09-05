
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PrivateRoute = ({ element }) => {
  const { authUser } = useAuthContext();

  return authUser ? element : <Navigate to="/signUp" />;
};

export default PrivateRoute;
