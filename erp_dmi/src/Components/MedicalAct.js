// import './MedicalAct.css';
import { CreateMedicalActGrid } from "./MedicalActGrid";

import { useLocation } from "react-router-dom";

function MedicalAct(props) {
    let { state } = useLocation();

    return (
        <div className="MedicalAct">
            <h1>
                My medical act : {state.id}
            </h1>
            <CreateMedicalActGrid data={state.id}/>
        </div>
    );
}

export default MedicalAct;
