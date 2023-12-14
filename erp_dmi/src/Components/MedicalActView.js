import {MedicalActData} from "./MedicalActData";
import { useLocation, useNavigate } from "react-router-dom";
// import {getMedicalActFromId} from "../API/apiLocal";
import { useState, useEffect } from "react";
import { getMedicalActById } from "../API/apiClient";
import { data } from "../API/testDatas";


// Page d'un acte Médical
function MedicalActView() {
    let { state } = useLocation();
    let navigate = useNavigate();
    const [act, setAct] = useState([]);
    const [champs_avant_confirmation, setChamps_avant_confirmation] = useState([]);
    const [champs_apres_confirmation, setChamps_apres_confirmation] = useState([]);

    useEffect(() => {
        async function fetchData() {
            //récupération de l'acte médical
            let responseGet = await getMedicalActById(state.id).then((res) => {
                console.log(res);
                return res;
            });
            if(responseGet.status == 200){
                // console.log(responseGet.data)
                setAct(responseGet.data);
            }
            else{
                for(let i = 0; i < data.length; i++)
                {
                    if(state.id == data[i].id)
                        setAct(data[i]);
                }
            }
        }
        fetchData();
    },[]);

    useEffect(() => {
        setChamps_avant_confirmation([
            { label: 'Hôpital', value: state.hospital_name },
            { label: 'Mutuelle', value: state.hospital_name },
            { label: 'Date prévue', value: new Date(act.date_prevue).toLocaleString() },
            { label: 'Sujet', value: act.metadata_1 }
        ]);
        setChamps_apres_confirmation([
            { label: 'Hôpital', value: state.hospital_name },
            { label: 'Mutuelle', value: state.hospital_name },
            { label: 'Date prévue', value: new Date(act.date_prevue).toLocaleString() },
            { label: 'Date de venue', value: new Date(act.date_venue).toLocaleString() },
            { label: 'Sujet', value: act.metadata_1 },
            { label: 'Sujet 2', value: act.metadata_2 },
            { label: 'Commentaire', value: act.commentaire },
            { label: 'Montant total', value: act.montant_total },
            { label: 'Pourcentage pris en charge', value: act.pourcentage_prise_en_charge },
            { label: 'Montant pris en charge par l\'hôpital', value: act.prise_en_charge_hopital },
            { label: 'Montant pris en charge par la mutuelle', value: act.prise_en_charge_mutuelle },
            { label: 'Montant pris en charge par le patient', value: act.prise_en_charge_patient },
        ]);
    }, [act]);


    return (
        <div className="MedicalActView">
            <a className="goBack" onClick={() => navigate(-1)}>Retour</a>
            <h1>
                Mon acte médical : {state.id}
            </h1>
            <MedicalActData
                act={act}
                champs_avant_confirmation={champs_avant_confirmation}
                champs_apres_confirmation={champs_apres_confirmation}
            />
        </div>
    );
}

export default MedicalActView;
