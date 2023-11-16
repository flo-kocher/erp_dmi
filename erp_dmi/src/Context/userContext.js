import React, { useState, useContext } from "react";

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}
export function useUserUpdate() {
  return useContext(UserUpdateContext);
}
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const changeUser = (user) => {
    setUser(user);
  };
  return (
    <UserContext.Provider value={[user]}>
      <UserUpdateContext.Provider value={[changeUser]}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}
