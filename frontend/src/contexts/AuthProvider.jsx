import React, { useState, useMemo, useCallback } from 'react';
import AuthContext from './index';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);

  const logOut = useCallback(() => () => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
  }, [setLoggedIn]);

  const providedData = useMemo(
    () => ({
      loggedIn,
      logIn,
      logOut,
    }),
    [loggedIn, logIn, logOut],
  );

  return (
    <AuthContext.Provider value={providedData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
