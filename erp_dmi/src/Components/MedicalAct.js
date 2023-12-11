// import './MedicalAct.css';
import { CreateMedicalActGrid } from "./MedicalActGrid";
import { useLocation, useNavigate } from "react-router-dom";

// Page d'un acte Médical
function MedicalAct(props) {
    let { state } = useLocation();
    let navigate = useNavigate();

    return (
        <div className="MedicalAct">
            <a onClick={() => navigate(-1)}>Retour</a>
            <h1>
                Mon acte médical : {state.id}
            </h1>
            {/* Informations sur l'acte médical*/}
            <CreateMedicalActGrid data={state.id}/>
        </div>
    );
}

export default MedicalAct;
