import { createContext, useState } from "react";

const UserContext = createContext<any>({});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
