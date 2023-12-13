import {MedicalActCard} from "./MedicalActCard";

export function MedicalActsGridItem({data}) {
    return (
        data.map((act, index) => {
            return (
                <MedicalActCard
                    key={"medicalActCard"+index}
                    id={act['id']}
                    date={act['date_prevue']}
                    intervention={act['metadata_1']}
                    comment={act['commentaire']}
                    price={act['montant_total']}
                />
            )
        })
    );
}
