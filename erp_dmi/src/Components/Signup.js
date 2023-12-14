import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { users, mutuelles_data } from "../API/testDatas"
import { createUser, getMutuelles} from "../API/apiClient";

export default function Signup() {
	let navigate = useNavigate();
	const [idGraulandais, setidGraulandais] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [name, setName] = useState("");
	const [firstname, setFirstname] = useState("");
	const [mutuelle, setMutuelle] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleChangeIdGraulandais = (e) => {
		setidGraulandais(e);
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
	const handleChangeMutuelle = (e) => {
		setMutuelle(e);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		/*Vérification des champs du formulaire*/
		if (
			password.trim() !== "" &&
			password === passwordConfirm &&
			idGraulandais.trim() !== "" &&
			firstname.trim() !== "" &&
			name.trim() !== "" &&
			mutuelle !== 0
		) {
			const newUser = {
				id_graulande: idGraulandais,
				password: password,
				name: name,
				first_name:	firstname,
				mutuelle: mutuelle
			};
			// const response = createUser(newUser);
			// if(response.status !== 200){
				if(users.some(user => user.id_graulande === idGraulandais)){
					setErrorMessage("Il existe déjà un compte utilisateur avec cette identifiant graulandais.");
				}
				else{
					const newUser = {
						id: 3,
						id_graulande: idGraulandais,
						password: password,
						name: name,
						first_name:	firstname,
						mutuelle: mutuelle
					};
					console.log(newUser);
					users.push(newUser);
					
				}
			// }
			navigate("/signin");
			//signup({ parseInt(idGraulandais), password, name, firstname, mutuel, email });

		}
		else if(password !== passwordConfirm){
			setErrorMessage("Votre mot de passe et sa confirmation ne sont pas identiques.");
		}
		else{
			setErrorMessage("Veuillez remplir tous les champs du formulaire.");
		}
	};
	// const responseMutuelle = await getMutuelles();
	let data; 
	// if(responseMutuelle.status ===200){
	// 	data = responseMutuelle.data;
	// }else{
		data = mutuelles_data;
	// }
	console.log(data)

	return (
		<>
		<div id="signupMainDiv">
			<h1>Inscription</h1>
			<form onSubmit={handleSubmit}>
				<div className="champ">
					<label>Votre identifiant Graulandais : </label>
					<input
						type="number"
						value={idGraulandais}
						onChange={(e) => handleChangeIdGraulandais(e.target.value)}
					/>
				</div>
				<div className="champ">
					<label>Votre mot de passe : </label>
					<input
						type="password"
						value={password}
						onChange={(e) => handleChangePassword(e.target.value)}
					/>
				</div>
				<div className="champ">
					<label>Confirmez votre mot de passe : </label>
					<input
						type="password"
						value={passwordConfirm}
						onChange={(e) => handleChangePasswordConfirm(e.target.value)}
					/>
				</div>
				<div className="champ">
					<label>Votre nom : </label>
					<input
						type="text"
						value={name}
						onChange={(e) => handleChangeName(e.target.value)}
					/>
				</div>
				<div className="champ">
					<label>Votre prénom : </label>
					<input
						type="text"
						value={firstname}
						onChange={(e) => handleChangeFirstname(e.target.value)}
					/>
				</div>
				<div className="champ">
					<label>Votre mutuelle : </label>
					<select id="mutuelle-select" onChange={handleChangeMutuelle}>
						<option id="option-0" value="0">--Veuillez choisir une option--</option>
						
						{data.map((mutuelle) => {
							return <option id={"option-" + mutuelle.id} value={mutuelle.id}>{mutuelle.name}</option>
						}
						)}
					</select>
				</div>
				<input type="submit" value="Confirmer l'inscription"/>
			</form>
			<label className="errorMessage">{errorMessage}</label>
			<div className="divForLink">
				<Link to="/signin" className="link">Déjà un compte ?</Link>
			</div>
		</div>
		</>
	);
}
