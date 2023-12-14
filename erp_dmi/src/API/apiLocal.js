import { updateMedicalAct, getMedicalActById } from "./apiClient";
import { data } from "./testDatas";

//Get only one act medical
export const getMedicalActFromId = async (id) => {
    
      
}

//fonction pour confirmer le rdv 
export const putConfirmationRDVFromId = ( act, confirmationRDV ) => {
    // window.location.reload();
    // console.log(data[idMedical-1])
    //let responseGet = getMedicalActById(act.id);
    //if(responseGet.status === 200){
        // let data = responseGet.data;
        act["confirmation_rdv"] = confirmationRDV;
        updateMedicalAct(act.id, act);
    //}else{
        // act[idMedical-1]['confirmation_rdv'] = confirmationRDV
    //}
    // fetch("http://localhost:4200/signup", {
    //     method: "put",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({  idMedical, confirmationRDV }),
    // });
};

export const putConfirmationPaiementFromId = ( act, confirmationPaiement ) => {
    // window.location.reload();
    // console.log(data[idMedical-1])
   // let responseGet = getMedicalActById(act.id);
    //if(responseGet.status === 200){
        // let data = responseGet.data;
        act["confirmation_paiement_patient"] = confirmationPaiement;
        updateMedicalAct(act.id, act);
    // }else{
        // act[idMedical-1]['confirmation_paiement_patient'] = confirmationPaiement
    // }
    
    // fetch("http://localhost:4200/signup", {
    //     method: "put",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({  idMedical, confirmationRDV }),
    // });
};