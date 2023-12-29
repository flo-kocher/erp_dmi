import { useState, useEffect } from "react";
import '../Css/MedicalActList.css';
import { useNavigate, generatePath } from 'react-router-dom';
import { useUser, useUserUpdate } from "../Context/userContext";
import { MedicalActGrid } from "./MedicalActCard";
import { groupActsByPreviousAndPassedByHospital } from "../utils/medicalActsUtils";
import { getUserMedicalActs, getHospitals, getMutuelles } from "../API/apiClient";
import { data, hospitals_data, mutuelles_data } from "../API/testDatas";

/**
 * Affichage de la page 'Actes médicaux' permettant de visualiser l'ensemble de ses actes médicaux.
 * @returns {JSX.Element}
 * @constructor
 */
function MedicalActList() {
   
    /*Déclaration des variables*/
    const navigate = useNavigate();
    const [user] = useUser();
    const [userChange] = useUserUpdate();
    const [medicalActs, setMedicalActs] = useState([]);
    const [hospitals, setHospitals] = useState([]);
    const [mutuelles, setMutuelles] = useState([]);
    const [prevu, setPrevu] = useState([]);
    const [passe, setPasse] = useState([]);

    useEffect(() => {
        async function fetchData() {
            //récupération des hôpitaux
            let response = await getHospitals();
            if (response.status === 200){
                setHospitals(response.data);
            }
            else{
                setHospitals(hospitals_data);
            }
            //récupération des mutuelles
            response = await getMutuelles();
            if (response.status === 200){
                setMutuelles(response.data);
            }
            else{
                setMutuelles(mutuelles_data);
            }
            //récupération des actes médicaux
            response = await getUserMedicalActs(user.id);
            if (response.status === 200){
                setMedicalActs(response.data);
            }
            else{
                setMedicalActs(data);
            }
        }
        fetchData();
    },[]);

    /*Tri des actes médicaux*/
    useEffect(() => {
        let grouped_acts_by_hospital = groupActsByPreviousAndPassedByHospital(medicalActs);
        // console.log(grouped_acts_by_hospital);
        if (grouped_acts_by_hospital != null && Object.keys(grouped_acts_by_hospital.passe).length > 0) {
            setPasse(grouped_acts_by_hospital.passe);
        }

        if (grouped_acts_by_hospital != null && Object.keys(grouped_acts_by_hospital.prevu).length > 0) {
            setPrevu(grouped_acts_by_hospital.prevu);
        }
    },[medicalActs]);

    /*Fonction de déconnexion*/
    const handleLogoff = () => {
        userChange(null);
        navigate("/signin");
    }

    /*Fonction de navigation vers la page d'un acte médical*/
    const handleAppointment = () => {
        const path = generatePath("/user/:idGr/Appointment", { idGr: user.id_graulande });
        navigate(path, { state: { hospitals: hospitals }});
    }
    
    return (
        <div>
            <div id="buttons">
                <button onClick={() => handleLogoff()}>Déconnexion</button>
                <button onClick={() => handleAppointment()}>Prendre un rendez-vous</button>
            </div>
            <div className="MedicalActsContent">
                <div className="row">
                    <h1>Actes médicaux de {user.first_name} {user.name}</h1>
                    <h3>Actes médicaux prévus</h3>
                    <MedicalActGrid key="nextMedicalActs" data={prevu} hospitals={hospitals} mutuelles={mutuelles}/>
                    <h3>Actes médicaux passés</h3>
                    <MedicalActGrid key="previousMedicalActs" data={passe} hospitals={hospitals} mutuelles={mutuelles}/>
                </div>
            </div>
        </div>
    );
}

export default MedicalActList;
