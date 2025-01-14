/**
 * Récupération du nom de l'hôpital en fonction d'un ID donné.
 * @param hospital_id
 * @param hospitalList
 * @returns {*|string}
 */
export function getHospitalName(hospital_id, hospitalList) {
    const hospitals = hospitalList;

    for(let i = 0; i < hospitals.length; i++) {
        if(hospitals[i].id === hospital_id)
            return hospitals[i].name;
    }
    return "Hôpital de secours";
}

/**
 * Récupération du nom d'une mutuelle en fonction d'un ID donné.
 * @param mutuelle_id
 * @param mutuelleList
 * @returns {*|string}
 */
export function getMutuelleName(mutuelle_id, mutuelleList) {
    const mutuelles = mutuelleList;
    // console.log(mutuelleList);
    // console.log(mutuelle_id);
    for(let i = 0; i < mutuelles.length; i++) {
        if(mutuelles[i].id === mutuelle_id)
            return mutuelles[i].name;
    }
    return "Mutuelle de secours";
}

/**
 * Fonction de comparaison entre 2 dates données.
 * @param a
 * @param b
 * @returns {number}
 */
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

/**
 * Regroupe les actes médicaux entre actes prévus et actes passés, en fonction de la date actuelle.
 * @param acts
 * @returns {{passe: *[], prevu: *[]}}
 */
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

/**
 * Regroupe les actes médicaux par hôpital.
 * @param acts
 * @returns {*}
 */
function groupByHospital(acts) {
    acts.passe = Object.groupBy(acts.passe, ({hospital_id}) => hospital_id);
    acts.prevu = Object.groupBy(acts.prevu, ({hospital_id}) => hospital_id);
    return acts
}

/**
 * Fonction qui à partir d'une liste d'actes médicaux, les regroupe par hôpital et en fonction de s'ils sont prévus,
 * ou passés.
 * @param userActList
 * @returns {*|*[]}
 */
export function groupActsByPreviousAndPassedByHospital(userActList) {
    if(userActList != null){
        let acts = userActList.sort(compareDate);
        acts = groupActs(acts);
        acts = groupByHospital(acts);
        return acts;
    }
    return [];
}
