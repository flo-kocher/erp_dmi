// import './MedicalAct.css';

import { useLocation } from "react-router-dom";

function MedicalAct(props) {
    let { state } = useLocation();

    return (
        <div className="MedicalAct">
            <h1>
                My medical act : {state.id}
            </h1>
        </div>
    );
}

export default MedicalAct;
