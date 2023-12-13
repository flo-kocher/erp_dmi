import { styled } from '@mui/material/styles';
import '../Css/MedicalActList.css';
import { useNavigate } from 'react-router-dom';
import { useUser, useUserUpdate } from "../Context/userContext";
import Paper from '@mui/material/Paper';
import { MedicalActGrid } from "./MedicalActCard";
import { groupActsByPreviousAndPassedByHospital } from "../utils/medicalActsUtils";

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
    const [user] = useUser();
    const [userChange] = useUserUpdate();
    const navigate = useNavigate();

    const handleLogoff = () => {
        userChange(null);
        navigate("/signin");
    }

    let grouped_acts_by_hospital = groupActsByPreviousAndPassedByHospital(user.id_graulande);

    let passe = <p>Aucun acte médical trouvé</p>
    if (Object.keys(grouped_acts_by_hospital.passe).length > 0) {
        passe = <MedicalActGrid key="previousMedicalActs" data={grouped_acts_by_hospital.passe}/>
    }

    let prevu = <p>Aucun acte médical trouvé</p>

    if (Object.keys(grouped_acts_by_hospital.prevu).length > 0) {
        prevu = <MedicalActGrid key="nextMedicalActs" data={grouped_acts_by_hospital.prevu}/>
    }

    return (
        <div>
            <button onClick={() => handleLogoff()}>Déconnexion</button>

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
