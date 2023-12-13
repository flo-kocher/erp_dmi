import { styled } from '@mui/material/styles';
import '../Css/MedicalActs.css';
import { useNavigate } from 'react-router-dom';
import { useUser, useUserUpdate } from "../Context/userContext";
import Paper from '@mui/material/Paper';
import { CreateMedicalActsGrid } from "./MedicalActsGrid";
import {data} from "../API/testDatas";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function compareDate(a, b) {
    a = a.date_prevue;
    b = b.date_prevue;
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

function groupActs(acts) {
    let grouped_acts = {
        prevu: [],
        passe: []
    };

    const now = new Date().toJSON();
    for(let i = 0; i < acts.length; i++) {
        if(acts[i]['date_prevue'] < now) {
            grouped_acts.passe.push(acts[i]);
        } else {
            grouped_acts.prevu.push(acts[i]);
        }
    }
    return grouped_acts;
}

function groupByHospital(acts) {
    acts.passe = Object.groupBy(acts.passe, ({hospital_id}) => hospital_id);
    acts.prevu = Object.groupBy(acts.prevu, ({hospital_id}) => hospital_id);
    return acts
}

/** Affichage de la page 'Actes médicaux' permettant de visualiser les actes médicaux
 * */
function MedicalActs() {
    const [user] = useUser();
    const [userChange] = useUserUpdate();
    const navigate = useNavigate();

    const handleLogoff = () => {
        userChange(null);
        navigate("/signin");
    }

    const acts = data.filter(act => act.user_id === user.id_graulande).sort(compareDate);

    let grouped_acts = groupActs(acts);
    let grouped_acts_by_hospital = groupByHospital(grouped_acts);

    let passe = <p>Aucun acte médical trouvé</p>
    if (Object.keys(grouped_acts_by_hospital.passe).length > 0) {
        passe = <CreateMedicalActsGrid data={grouped_acts_by_hospital.passe}/>
    }

    let prevu = <p>Aucun acte médical trouvé</p>

    if (Object.keys(grouped_acts_by_hospital.prevu).length > 0) {
        prevu = <CreateMedicalActsGrid data={grouped_acts_by_hospital.prevu}/>
    }

    return (
        <div className="MedicalActs">
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

export default MedicalActs;
