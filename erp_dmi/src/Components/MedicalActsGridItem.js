import {MedicalActCard} from "./MedicalActCard";

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

export function MedicalActsGridItem({data, hospital_name, mutuelles}) {
    return (
        data.map((act, index) => {
            const mutuelle_name = getMutuelleName(act.mutuelle_id, mutuelles);
            return (
                <MedicalActCard
                    key={"medicalActCard"+index}
                    id={act['id']}
                    date={act['date_prevue']}
                    intervention={act['metadata_1']}
                    comment={act['commentaire']}
                    price={act['montant_total']}
                    hospital_name={hospital_name}
                    mutuelle_name={mutuelle_name}
                />
            )
        })
    );
}
