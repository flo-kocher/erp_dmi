import logo from '../logo.svg';
import './MedicalActs.css';
import { Link } from 'react-router-dom';

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
        </div>
    );
}

export default MedicalActs;
