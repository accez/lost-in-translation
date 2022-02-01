import { createContext, useState } from 'react';

/**
 * Setup for contextAPI
 */
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState(0);
  return (
    <UserContext.Provider
      value={{
        loggedIn: [isLoggedIn, setIsLoggedIn],
        username: [username, setUsername],
        userId: [userId, setUserId]
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
