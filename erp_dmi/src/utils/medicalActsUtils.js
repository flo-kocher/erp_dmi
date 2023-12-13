import {data, hospitals_data} from "../API/testDatas";

export function getHospitalName(hospital_id) {
    const hospitals = hospitals_data;

    for(let i = 0; i < hospitals.length; i++) {
        if(hospitals[i].id === hospital_id)
            return hospitals[i].name;
    }
    return "Hôpital de secours";
}

function compareDate(a, b) {
    a = a.date_prevue;
    b = b.date_prevue;
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

function groupActs(acts) {
    let grouped_acts = {
        prevu: [],
        passe: []
    };

    const now = new Date().toJSON();
    for(let i = 0; i < acts.length; i++) {
        if(acts[i]['date_prevue'] < now) {
            grouped_acts.passe.push(acts[i]);
        } else {
            grouped_acts.prevu.push(acts[i]);
        }
    }
    return grouped_acts;
}

function groupByHospital(acts) {
    acts.passe = Object.groupBy(acts.passe, ({hospital_id}) => hospital_id);
    acts.prevu = Object.groupBy(acts.prevu, ({hospital_id}) => hospital_id);
    return acts
}


export function groupActsByPreviousAndPassedByHospital(id_graulande) {
    let acts = data.filter(act => act.user_id === id_graulande).sort(compareDate);
    acts = groupActs(acts);
    acts = groupByHospital(acts);
    return acts;
}
