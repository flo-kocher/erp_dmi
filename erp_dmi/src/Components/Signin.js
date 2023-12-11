import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser, useUserUpdate } from "../Context/userContext";
import { signin } from "../API/apiCalls";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

export default function Signin() {
	let navigate = useNavigate();

	const [changeUser]=useUserUpdate();
	const [idGr, setIdGr] = useState("");
	const [password, setPassword] = useState("");

	const users = [
		{
			id: 1,
			id_Graulandais: 549863,
			email: "florentin.kocher@unistra.fr",
			password: "123456",
			name: "Kocher",
			first_name:	"Florentin",
			mutuelle: {
				id: 1,
				name: "Mgen"
			}
		},
		{
			id: 2,
			id_Graulandais: 235446,
			email: "jbhari@hotmail.fr",
			password: "orange",
			name: "Hari",
			first_name:	"Jean-Baptiste",
			mutuelle: {
				id: 2,
				name: "TrucMuche"
			}
		},
	];
  

	const handleSubmit = async (e) => {
		//navigate("/pages/");
		e.preventDefault();
		let userExists = false;
		let connectedUser = null;
		users.forEach(u => {
			if(u.id_Graulandais == idGr && u.password == password)
			{
				userExists = true;
				connectedUser = u;
			}
		});

		if(userExists){
			changeUser(connectedUser);
			navigate("/userConnected/home");
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
		<Link to="/signup">Pas encore de compte ?</Link>
	</>;
}
