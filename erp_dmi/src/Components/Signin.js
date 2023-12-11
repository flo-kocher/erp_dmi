import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser, useUserUpdate } from "../Context/userContext";
import { signin } from "../API/apiLocal";
import { useNavigate, generatePath } from "react-router-dom";
import { users } from "../API/testDatas";

export default function Signin() {
	let navigate = useNavigate();

	const [changeUser] = useUserUpdate();
	const [idGr, setIdGr] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		let userExists = false;
		let connectedUser = null;
		users.forEach(u => {
			if(u.id_graulande == idGr && u.password == password)
			{
				userExists = true;
				connectedUser = u;
			}
		});

		if(userExists){
			changeUser(connectedUser);
			const path = generatePath("/user/:idGr/MedicalActs", { idGr });
			navigate(path);
			setErrorMessage("");
		}
		else{
			setErrorMessage("Aucun utilisateur existant pour cet identifiant graulandais et ce mot de passe.");
		}
	    // let response=await signin({username,password});
		// if(response.statusCode==200){
		// 	changeUser(response.username);
		// 	navigate("/home/test")
		// } 
	};
	const handleUsernameChange = (e) => {
		setIdGr(e);
	};
	const handlePasswordChange = (e) => {
		setPassword(e);
	};
	return <>
		<h1>Connexion</h1>
		<form onSubmit={handleSubmit}>
			<label htmlFor="idGr">Identifiant Graulandais</label>
			<input
				name="idGr"
				type="text"
				value={idGr}
				onChange={(e) => handleUsernameChange(e.target.value)}
			/>
			<label htmlFor="password">Mot de passe</label>
			<input
				name="password"
				type="password"
				value={password}
				onChange={(e) => handlePasswordChange(e.target.value)}
			/>
			<input type="submit" />
		</form>
		<label id="errorMessage">{errorMessage}</label>
		<br/>
		<Link to="/signup">Pas encore de compte ?</Link>
	</>;
}
