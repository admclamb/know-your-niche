import { createContext, useState } from 'react';
import { Auth } from '../hooks/useAuth';

const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
