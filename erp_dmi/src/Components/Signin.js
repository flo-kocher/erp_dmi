import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser, useUserUpdate } from "./Context/userContext";
import { signin } from "./apicalls";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  let navigate = useNavigate();

  const [user, token] = useUser();
  const [changeUser,changeToken]=useUserUpdate();
  const userUpdate = useUserUpdate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =async (e) => {
              navigate("/home/allColoc")

    e.preventDefault();
/*     let response=await signin({username,password});
    if(response.statusCode==200){
      changeUser(response.username);
      changeToken(response.token);
      navigate("/home/allColoc")
    } */

  };
  const handleUsernameChange = (e) => {
    userUpdate(e);
    setUsername(e);
  };
  const handlePasswordChange = (e) => {
    setPassword(e);
  };
  return (
    <>
      <p>{user}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Adresse mail </label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => handleUsernameChange(e.target.value)}
        />
        <label htmlFor="password">Mot de passe </label>
        <input
          name="password"
          type="text"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
        ></input>
        <input type="submit" />
      </form>
      <Link to="/signup">Pas encore de compte ?</Link>
    </>
  );
}
