import {hospitals_data} from "../API/testDatas";

export function getHospitalName(hospital_id) {
    const hospitals = hospitals_data;

    for(let i = 0; i < hospitals.length; i++) {
        if(hospitals[i].id === hospital_id)
            return hospitals[i].name;
    }
    return "Hôpital de secours";
}
