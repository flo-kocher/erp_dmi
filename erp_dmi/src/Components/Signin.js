import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserUpdate } from "../Context/userContext";
import { useNavigate, generatePath } from "react-router-dom";
import { users } from "../API/testDatas";
import {getUserById} from "../API/apiClient";
import axios from "axios";

//Page de connexion
export default function Signin() {
	/*Déclaration des variables*/
	let navigate = useNavigate();
	const [changeUser] = useUserUpdate();
	const [idGr, setIdGr] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	/*Envoi du formulaire de connexion*/
	const handleSubmit = async (e) => {
		e.preventDefault();
		let userExists = false;
		let connectedUser = null;
		let response = null;
		try{
			response = await getUserById(idGr);
			if (response.status === 200){
				userExists = true;
				connectedUser = response.data;
			}else { /*Cas module isolé (si l'API ne répond pas ou par une erreur)*/
				users.forEach(u => {
					if(u.id_graulande == idGr && u.password == password)
					{
						userExists = true;
						connectedUser = u;
					}
				});
			}
		}catch(error) {
			if (axios.isAxiosError(error)) {
				// AxiosError
				if (error.response) {
					// The request was made and the server responded with a status code
					// other than 2xx (e.g., 404, 500)
					console.error('Server responded with an error status:', error.response.status);
					console.error('Response data:', error.response.data);
				} else if (error.request) {
					// The request was made but no response was received
					console.error('No response received from the server');
					console.error('Request details:', error.request);
				} else {
					// Something happened in setting up the request
					console.error('Error setting up the request:', error.message);
				}
			}
		}
		/*Si on passe par le catch à cause d'une erreur serveur, on passe en local*/
		if(!userExists){
			users.forEach(u => {
				if(u.id_graulande == idGr && u.password == password)
				{
					userExists = true;
					connectedUser = u;
				}
			});
		}
		/*Sinon on ajoute l'utilisateur au contexte pour qu'il soit accessible dans les pages suivantes*/
		if(userExists){
			changeUser(connectedUser);
			const path = generatePath("/user/:idGr/MedicalActList", { idGr });
			navigate(path);
			setErrorMessage("");
		}
		else{
			setErrorMessage("Aucun utilisateur existant pour cet identifiant graulandais et ce mot de passe.");
		}
	};
	    
	/*Fonctions de mise à jour des variables du state*/
	const handleUsernameChange = (e) => {
		setIdGr(e);
	};
	const handlePasswordChange = (e) => {
		setPassword(e);
	};
	
	return <>
		<div id="signinMainDiv">
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
				<input type="submit" value="Se connecter"/>
			</form>
			<label className="errorMessage">{errorMessage}</label>
			<div className="divForLink">
				<Link to="/signup" className="link">Pas encore de compte ?</Link>
			</div>
		</div>
	</>;
}
