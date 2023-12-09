import { useState } from "react";
import { Link } from "react-router-dom";
// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   QueryClient,
//   QueryClientProvider,
// } from "react-query";
import { signup } from "../API/apiCalls";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import { useUser, useUserUpdate } from "../Context/userContext";

export default function Signup() {
  let navigate = useNavigate();
  const userUpdate = useUserUpdate();
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const handleChangeUsername = (e) => {
    setusername(e);
  };
  const handleChangePassword = (e) => {
    setPassword(e);
  };
  const handleChangePasswordConfirm = (e) => {
    setPasswordConfirm(e);
  };
  const handleChangeName = (e) => {
    setName(e);
  };
  const handleChangeFirstname = (e) => {
    setFirstname(e);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      isEmail(username) &&
      password.trim() !== "" &&
      password === passwordConfirm &&
      username.trim() !== "" &&
      firstname.trim() !== ""
    ) {
      signup({ username, password, name, firstname });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Votre adresse mail </label>
        <input
          type="text"
          value={username}
          onChange={(e) => handleChangeUsername(e.target.value)}
        />
        <label>Votre mot de passe </label>
        <input
          type="password"
          value={password}
          onChange={(e) => handleChangePassword(e.target.value)}
        ></input>
        <label>Confirmez votre mot de passe </label>
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => handleChangePasswordConfirm(e.target.value)}
        ></input>
        <label>Votre nom </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChangeName(e.target.value)}
        ></input>
        <label>Votre prénom </label>
        <input
          type="text"
          value={firstname}
          onChange={(e) => handleChangeFirstname(e.target.value)}
        ></input>
        <input type="submit" />
      </form>
      <Link to="/">Déjà un compte ?</Link>
    </>
  );
}
