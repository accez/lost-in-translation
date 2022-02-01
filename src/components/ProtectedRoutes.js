import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../helpers/UserContext';

/**
 * Protected Routes component
 * @returns The protected views or navigates back to start page depending on the user is logged in or not
 */
const ProtectedRoutes = () => {
  const { loggedIn } = useContext(UserContext);
  const [isLoggedIn] = loggedIn;

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
