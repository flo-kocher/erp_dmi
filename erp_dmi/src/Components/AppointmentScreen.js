import { useState, useEffect } from "react";
import { useUser } from "../Context/userContext";
import { useNavigate, generatePath, useLocation } from "react-router-dom";
import { data, hospitals_data } from "../API/testDatas";
import { createMedicalAct } from "../API/apiClient";

export default function AppointmentScreen() {
	let navigate = useNavigate();
    const { state } = useLocation();

    const [user] = useUser();
    const [object, setObject] = useState("");
    const [hospitalId, setHospitalId] = useState(0);
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
        /*Vérification des champs du formulaire*/
        if (
            object.trim() !== "" &&
            hospitalId != 0 &&
            date.trim() !== "" &&
            time.trim() !== ""
        ) {
            const response = await createMedicalAct({
                user_id: user.id,
                hospital_id: hospitalId,
                mutuelle_id: user.mutuelle_id,
                metadata_1: object,
                metadata_2: "",
                montant_total: 0,
                prise_en_charge_hopital: 0,
                prise_en_charge_mutuelle: 0,
                prise_en_charge_patient: 0,
                confirmation_paiement_patient: false,
                confirmation_mutuelle: false,
                confirmation_rdv: false,
                pourcentage_prise_en_charge: 0,
                commentaire: "",
                date_creation: null,
                date_prevue: date + "T" + time + ":00.000Z",
                date_venue: null
            });
            
            if (response.status !== 200){
                const newAct = {
                    id: data.length + 1,
                    user_id: user.id,
                    hospital_id: hospitalId,
                    mutuelle_id: user.mutuelle_id,
                    metadata_1: object,
                    metadata_2: "",
                    montant_total: 150.0,
                    prise_en_charge_hopital: 90.0,
                    prise_en_charge_mutuelle: 50.0,
                    prise_en_charge_patient: 10.0,
                    confirmation_paiement_patient: false,
                    confirmation_mutuelle: false,
                    confirmation_rdv: false,
                    pourcentage_prise_en_charge: 60,
                    commentaire: "",
                    date_creation: "",
                    date_prevue: date + "T" + time + ":00.000Z",
                    date_venue: ""
                };
                data.push(newAct);
            }
            const path = generatePath("/user/:idGr/MedicalActList", { idGr: user.id_graulande });
            navigate(path);
        }
        else{
            setErrorMessage("Veuillez remplir tous les champs du formulaire.");
        }
    };
	const handleChangeObject = (object) => {
		setObject(object);
	};
	const handleChangeHospital = (hospitalId) => {
		setHospitalId(hospitalId);
	};
    const handleChangeDate = (date) => {
		setDate(date);
	};
    const handleChangeTime = (time) => {
		setTime(time);
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
                    <label htmlFor="hospitalSelect">Hôpital</label>
                    <select id="hospitalSelect" onChange={(e) => handleChangeHospital(e.target.value)}>
						<option key="option-0" value={0}>--Veuillez choisir une option--</option>
						{state.hospitals.map((hospital) => {
							return <option key={"option-" + hospital.id} value={hospital.id}>{hospital.name}</option>
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
                <div className="champ">
                    <label htmlFor="time">Heure prévue</label>
                    <input
                        name="time"
                        type="time"
                        value={time}
                        onChange={(e) => handleChangeTime(e.target.value)}
                    />
                </div>
				<input type="submit" value="Valider la prise de rendez-vous"/>
			</form>
            <label className="errorMessage">{errorMessage}</label>
		</div>
	</>;
}
