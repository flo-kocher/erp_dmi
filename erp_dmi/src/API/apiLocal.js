import { updateMedicalAct } from "./apiClient";

//fonction pour confirmer le rdv 
export const putConfirmationRDVFromId = ( act, confirmationRDV ) => {
    act["confirmation_rdv"] = confirmationRDV;
    updateMedicalAct(act.id, act);
};

export const putConfirmationPaiementFromId = ( act, confirmationPaiement ) => {
    act["confirmation_paiement_patient"] = confirmationPaiement;
    updateMedicalAct(act.id, act);
};