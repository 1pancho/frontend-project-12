// @ts-check
import { createContext } from 'react';

const AuthContext = createContext({
  login: 'admin',
  password: 'admin',
});

export default AuthContext;
