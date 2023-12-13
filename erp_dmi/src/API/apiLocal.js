import { updateMedicalAct, getMedicalActById } from "./apiClient";
import { data } from "./testDatas";

//Get only one act medical
export const getMedicalActFromId = (id) => {
    let responseGet = getMedicalActById(id);
    if(responseGet.status === 200){
     return responseGet.data;
    }
    for(let i = 0; i < data.length; i++)
    {
        if(id == data[i].id)
            return data[i]
    }
    return {
        "id": 0,
        "user_id": 0,
        "hospital_id": 0,
        "mutuelle_id": 0,
        "metadata_1": "",
        "metadata_2": "",
        "montant_total": 0,
        "prise_en_charge_hopital": 0,
        "prise_en_charge_mutuelle": 0,
        "prise_en_charge_patient": 0,
        "confirmation_paiement_patient": false,
        "confirmation_mutuelle": false,
        "confirmation_rdv": false,
        "pourcentage_prise_en_charge": 0,
        "commentaire": "",
        "date_creation": "",
        "date_prevue": "",
        "date_venue": ""
    }
      
}

//fonction pour confirmer le rdv 
export const putConfirmationRDVFromId = ( idMedical, confirmationRDV ) => {
    // window.location.reload();
    // console.log(data[idMedical-1])
    let responseGet = getMedicalActById(idMedical);
    if(responseGet.status === 200){
        let data = responseGet.data;
        data["confirmation_rdv"] = confirmationRDV;
        updateMedicalAct(idMedical, data);
    }else{
        data[idMedical-1]['confirmation_rdv'] = confirmationRDV
    }
    // fetch("http://localhost:4200/signup", {
    //     method: "put",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({  idMedical, confirmationRDV }),
    // });
};

export const putConfirmationPaiementFromId = ( idMedical, confirmationPaiement ) => {
    // window.location.reload();
    // console.log(data[idMedical-1])
    let responseGet = getMedicalActById(idMedical);
    if(responseGet.status === 200){
        let data = responseGet.data;
        data["confirmation_paiement_patient"] = confirmationPaiement;
        updateMedicalAct(idMedical, data);
    }else{
        data[idMedical-1]['confirmation_paiement_patient'] = confirmationPaiement
    }
    
    // fetch("http://localhost:4200/signup", {
    //     method: "put",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({  idMedical, confirmationRDV }),
    // });
};