import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { hospitals_data } from "../API/testDatas";
import {getUserById} from "../API/apiClient";
import axios from "axios";

export default function AppointmentScreen() {
	let navigate = useNavigate();

    const [object, setObject] = useState("");
    const [hospital, setHospital] = useState("");
	const [date, setDate] = useState("");
    

	const handleSubmit = async (e) => {
		e.preventDefault();
		
	};
	const handleChangeObject = (e) => {
		setObject(e);
	};
	const handleChangeHospital = (e) => {
		setHospital(e);
	};
    const handleChangeDate = (e) => {
		setDate(e);
	};
	return <>
		<div id="appointmentMainDiv">
            <a className="goBack" onClick={() => navigate(-1)}>Retour</a>
			<h1>Prise de rendez-vous</h1>
			<form onSubmit={handleSubmit}>
                <div className="champ">
                    <label htmlFor="object">Objet du rendez-vous</label>
                    <input
                        name="object"
                        type="text"
                        value={object}
                        onChange={(e) => handleChangeObject(e.target.value)}
                    />
                </div>
                <div className="champ">
                    <label for="hospitalSelect">Hôpital</label>
                    <select id="hospitalSelect" onChange={handleChangeHospital}>
						<option id="option-0" value="0">--Veuillez choisir une option--</option>
						{hospitals_data.map((hospital) => {
							return <option id={"option-" + hospital.id} value={hospital.id}>{hospital.name}</option>
						})}
					</select>
                </div>
                <div className="champ">
                    <label htmlFor="date">Date prévue</label>
                    <input
                        name="date"
                        type="date"
                        value={date}
                        onChange={(e) => handleChangeDate(e.target.value)}
                    />
                </div>
				<input type="submit" value="Valider la prise de rendez-vous"/>
			</form>
		</div>
	</>;
}
