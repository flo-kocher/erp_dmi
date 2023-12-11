import logo from '../logo.svg';
import './MedicalActs.css';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
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
    return (
        <div className="MedicalActs">
            <h1>Actes médicaux</h1>
            <Link to="/userConnected/home">Home</Link>
            <h2>Actes médicaux (avec Complex Grid)</h2>
            <CreateMedicalActsGrid/>
        </div>
    );
}

export default MedicalActs;
