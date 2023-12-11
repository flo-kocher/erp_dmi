// import './MedicalAct.css';
import { CreateMedicalActGrid } from "./MedicalActGrid";

import { useLocation } from "react-router-dom";

// Page d'un acte Médical
function MedicalAct(props) {
    let { state } = useLocation();

    return (
        <div className="MedicalAct">
            <h1>
                My medical act : {state.id}
            </h1>
            {/* Informations sur l'acte médical*/}
            <CreateMedicalActGrid data={state.id}/>
        </div>
    );
}

export default MedicalAct;
