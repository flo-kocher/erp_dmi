import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import '../Css/MedicalActList.css';
import { useNavigate, generatePath } from 'react-router-dom';
import { useUser, useUserUpdate } from "../Context/userContext";
import Paper from '@mui/material/Paper';
import { MedicalActGrid } from "./MedicalActCard";
import { groupActsByPreviousAndPassedByHospital } from "../utils/medicalActsUtils";
import { getMedicalActs, getHospitals, getMutuelles } from "../API/apiClient";
import { data, hospitals_data, mutuelles_data } from "../API/testDatas";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

/** Affichage de la page 'Actes médicaux' permettant de visualiser les actes médicaux
 * */
function MedicalActList() {
    const navigate = useNavigate();

    const [user] = useUser();
    const [userChange] = useUserUpdate();
    const [medicalActs, setMedicalActs] = useState([]);
    const [hospitals, setHospitals] = useState([]);
    const [mutuelles, setMutuelles] = useState([]);

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
            response = await getMedicalActs();
            if (response.status === 200){
                setMedicalActs(response.data);
            }
            else{
                setMedicalActs(data);
            }
        }
        fetchData();
    },[]);

    const handleLogoff = () => {
        userChange(null);
        navigate("/signin");
    }

    const handleAppointment = () => {
        const path = generatePath("/user/:idGr/Appointment", { idGr: user.id_graulande });
        navigate(path, { state: { hospitals: hospitals }});
    }

    let grouped_acts_by_hospital = groupActsByPreviousAndPassedByHospital(medicalActs);

    let passe = <p>Aucun acte médical trouvé</p>
    if (Object.keys(grouped_acts_by_hospital.passe).length > 0) {
        passe = <MedicalActGrid key="previousMedicalActs" data={grouped_acts_by_hospital.passe} hospitals={hospitals} mutuelles={mutuelles}/>
    }

    let prevu = <p>Aucun acte médical trouvé</p>

    if (Object.keys(grouped_acts_by_hospital.prevu).length > 0) {
        prevu = <MedicalActGrid key="nextMedicalActs" data={grouped_acts_by_hospital.prevu} hospitals={hospitals} mutuelles={mutuelles}/>
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
                    {prevu}
                    <h3>Actes médicaux passés</h3>
                    {passe}
                </div>
            </div>
        </div>
    );
}

export default MedicalActList;
