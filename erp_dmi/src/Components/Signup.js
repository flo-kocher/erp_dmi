import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../API/apiLocal";
import { users } from "../API/testDatas"

export default function Signup() {
	let navigate = useNavigate();
	const [idGraulandais, setidGraulandais] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [name, setName] = useState("");
	const [firstname, setFirstname] = useState("");
	const [mutuelle, setMutuelle] = useState("");

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
				id: 3,
				id_graulande: idGraulandais,
				password: password,
				name: name,
				first_name:	firstname,
				mutuelle: mutuelle
			};
			console.log(newUser);
			users.push(newUser);
			navigate("/signin");
			//signup({ parseInt(idGraulandais), password, name, firstname, mutuel, email });
		}
	};
	return (
		<>
		<h1>Inscription</h1>
		<form onSubmit={handleSubmit}>
			<div class="champ">
				<label>Votre identifiant Graulandais : </label>
				<input
					type="text"
					value={idGraulandais}
					onChange={(e) => handleChangeIdGraulandais(e.target.value)}
				/>
			</div>
			<div class="champ">
				<label>Votre mot de passe : </label>
				<input
					type="password"
					value={password}
					onChange={(e) => handleChangePassword(e.target.value)}
				/>
			</div>
			<div class="champ">
				<label>Confirmez votre mot de passe : </label>
				<input
					type="password"
					value={passwordConfirm}
					onChange={(e) => handleChangePasswordConfirm(e.target.value)}
				/>
			</div>
			<div class="champ">
				<label>Votre nom : </label>
				<input
					type="text"
					value={name}
					onChange={(e) => handleChangeName(e.target.value)}
				/>
			</div>
			<div class="champ">
				<label>Votre prénom : </label>
				<input
					type="text"
					value={firstname}
					onChange={(e) => handleChangeFirstname(e.target.value)}
				/>
			</div>
			<div class="champ">
				<label>Votre mutuelle : </label>
				<select id="mutuelle-select" onChange={handleChangeMutuelle}>
					<option value="0">--Veuillez choisir une option--</option>
					<option value="1">Mgen</option>
					<option value="2">TrucMuche</option>
				</select>
			</div>
			<input type="submit" />
		</form>
		<Link to="/signin">Déjà un compte ?</Link>
		</>
	);
}
