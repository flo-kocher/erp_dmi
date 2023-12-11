import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useUser, useUserUpdate } from "../Context/userContext";
import Paper from '@mui/material/Paper';
import { CreateMedicalActsGrid } from "./MedicalActsGrid";

// https://mui.com/x/react-data-grid/ pour créer un tableau avec une liste des actes

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


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

    return (
        <div className="MedicalActs">
            <button onClick={() => handleLogoff()}>Déconnexion</button>
            <h1>Actes médicaux de {user.first_name} {user.name}</h1>
            <CreateMedicalActsGrid/>
        </div>
    );
}

export default MedicalActs;
