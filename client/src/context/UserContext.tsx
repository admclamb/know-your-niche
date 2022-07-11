import { createContext, useState } from "react";

const UserContext = createContext<any>({});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
