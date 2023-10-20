import logo from '../logo.svg';
import './MedicalActs.css';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {ComplexGrid, CreateComplexGrid} from "./ComplexGrid";
// import { DataGrid } from '@mui/x-data-grid';

// https://mui.com/x/react-data-grid/ pour créer un tableau avec une liste des actes

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function getActList() {
    return [
        {
            'id': 1,
            'date': '',
            'location': 'Strasbourg',
            'intervention': '',
            'comment': '',
            'price': 50,
            'support_price': 0,
            'remaining_price': 0
        },
        {
            'id': 2,
            'date': '',
            'location': 'Paris',
            'intervention': '',
            'comment': '',
            'price': 200,
            'support_price': 0,
            'remaining_price': 0
        }
    ]
}

function ActItemList() {
    const actList = getActList();
    const itemList = Object.entries(actList).map(([key, item]) =>
        <li key={key}>
            {item['location']} {item['price']}
        </li>
    );
    return (
        <div>
            <ol style={{listStyleType: "none"}}>{itemList}</ol>
        </div>
    );
}

/** Affichage de la page 'Actes médicaux'
 * permettant de visualiser les actes médicaux
 *
 * @returns {JSX.Element}
 * @constructor
 */
function MedicalActs() {
    return (
        <div className="MedicalActs">
            <h1>Actes médicaux</h1>
            <Link to="/">Home</Link>
            <h2>Test de visualisation d'actes médicaux</h2>
            <ActItemList/>
            <h2>Test visualisation avec Grid</h2>
            <Grid container spacing={3}>
                <Grid item xs="auto">
                    <Item>variable width content</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid item xs>
                    <Item>xs</Item>
                </Grid>
            </Grid>
            <h2>Test Complex Grid</h2>
            <CreateComplexGrid/>
        </div>
    );
}

export default MedicalActs;
