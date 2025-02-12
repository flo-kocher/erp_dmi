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
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const changeUser = (user) => {
    /*Mise en place de l'utilisateur dans le contexte et dans le localStorage*/
    const tempUser = JSON.parse(JSON.stringify(user));
    if(tempUser != null){ //On retire le mot de passe des informations ajoutées au localStorage
      tempUser.password = "";  
    }
    setUser(user);
    localStorage.setItem("user", JSON.stringify(tempUser));
  };
  
  return (
    <UserContext.Provider value={[user]}>
      <UserUpdateContext.Provider value={[changeUser]}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}
