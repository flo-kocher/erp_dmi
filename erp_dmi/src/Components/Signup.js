import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { signup } from "./apicalls";
import { useUser, useUserUpdate } from "../Context/userContext";

export default function Signup() {
	let navigate = useNavigate();
	const userUpdate = useUserUpdate();
	const [idGraulandais, setidGraulandais] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [name, setName] = useState("");
	const [firstname, setFirstname] = useState("");
	const [mutuelle, setMutuelle] = useState("");
	const [email, setEmail] = useState("");

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
	const handleChangeEmail = (e) => {
		setEmail(e);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			email.trim() !== "" &&
			password.trim() !== "" &&
			password === passwordConfirm &&
			idGraulandais.trim() !== "" &&
			firstname.trim() !== "" &&
			name.trim() !== "" &&
			mutuelle !== 0
		) {
			const newUser = {
				id: 3,
				id_Graulandais: idGraulandais,
				email: email,
				password: password,
				name: name,
				first_name:	firstname,
				mutuelle: {
					id: mutuelle,
					name: "???"
				}
			};
			console.log(newUser);
			//signup({ parseInt(idGraulandais), password, name, firstname, mutuel, email });
		}
	};
	return (
		<>
		<form onSubmit={handleSubmit}>
			<label>Votre identifiant Graulandais </label>
			<input
				type="text"
				value={idGraulandais}
				onChange={(e) => handleChangeIdGraulandais(e.target.value)}
			/>
			<label>Votre mot de passe </label>
			<input
				type="password"
				value={password}
				onChange={(e) => handleChangePassword(e.target.value)}
			/>
			<label>Confirmez votre mot de passe </label>
			<input
				type="password"
				value={passwordConfirm}
				onChange={(e) => handleChangePasswordConfirm(e.target.value)}
			/>
			<label>Votre nom </label>
			<input
				type="text"
				value={name}
				onChange={(e) => handleChangeName(e.target.value)}
			/>
			<label>Votre prénom </label>
			<input
				type="text"
				value={firstname}
				onChange={(e) => handleChangeFirstname(e.target.value)}
			/>
			<label>Votre adresse mail </label>
			<input
				type="text"
				value={email}
				onChange={(e) => handleChangeEmail(e.target.value)}
			/>
			<label>Votre mutuelle </label>
			<select id="mutuelle-select" onChange={handleChangeMutuelle}>
				<option value="0">--Veuillez choisir une option--</option>
				<option value="1">Mgen</option>
				<option value="2">TrucMuche</option>
			</select>
			<input type="submit" />
		</form>
		<Link to="/">Déjà un compte ?</Link>
		</>
	);
}
