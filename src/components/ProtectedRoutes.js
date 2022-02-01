import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../helpers/UserContext';

const ProtectedRoutes = () => {
  const { loggedIn } = useContext(UserContext);
  const [isLoggedIn] = loggedIn;

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
