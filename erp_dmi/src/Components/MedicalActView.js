import {MedicalActData} from "./MedicalActData";
import { useLocation, useNavigate } from "react-router-dom";
import {getMedicalActFromId} from "../API/apiLocal";

// Page d'un acte Médical
function MedicalActView() {
    let { state } = useLocation();
    let navigate = useNavigate();

    const act = getMedicalActFromId(state.id);

    return (
        <div className="MedicalActView">
            <a className="goBack" onClick={() => navigate(-1)}>Retour</a>
            <h1>
                Mon acte médical : {state.id}
            </h1>
            <MedicalActData
                vide = {" "}
                id = {act['id']}
                user_id = {act['user_id']}
                hospital_id = {act['hospital_id']}
                mutuelle_id = {act['mutuelle_id']}
                metadata_1 = {act['metadata_1']}
                metadata_2 = {act['metadata_2']}
                montant_total = {act['montant_total']}
                prise_en_charge_hopital = {act['prise_en_charge_hopital']}
                prise_en_charge_mutuelle = {act['prise_en_charge_mutuelle']}
                prise_en_charge_patient = {act['prise_en_charge_patient']}
                confirmation_paiement_patient = {act['confirmation_paiement_patient']}
                confirmation_mutuelle = {act['confirmation_mutuelle']}
                confirmation_rdv = {act['confirmation_rdv']}
                pourcentage_prise_en_charge = {act['pourcentage_prise_en_charge']}
                commentaire = {act['commentaire']}
                date_creation = {act['date_creation']}
                date_prevue = {act['date_prevue']}
                date_venue = {act['date_venue']}
            />
        </div>
    );
}

export default MedicalActView;
