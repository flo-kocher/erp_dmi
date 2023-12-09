import { data } from "./testDatas";

const checkStatus = (res) => {
    if (res.ok) {
        return res;
    } else {
        return res.text().then((msg) => {
            throw new Error(msg);
        });
    }
};

//EXEMPLE DE FONCTION 
export const signup = ({ firstname, name, password, idGr, email, phoneNumber }) => {
    fetch("http://localhost:4200/signup", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, name, password, idGr, email, phoneNumber }),
    });
};

  export const signin = ({ idGr, password }) => {
    fetch(`http://localhost:4200/signin`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ idGr, password }),
    })
        .then(checkStatus)
        .then((res) => res.json());
};

//Get only one act medical
export const getMedicalActFromId = (id) => {
      
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
    console.log(data[idMedical-1])
    data[idMedical-1]['confirmation_rdv'] = confirmationRDV
    // fetch("http://localhost:4200/signup", {
    //     method: "put",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({  idMedical, confirmationRDV }),
    // });
};