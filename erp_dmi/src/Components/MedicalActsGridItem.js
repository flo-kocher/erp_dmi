import { MedicalActCard } from "./MedicalActCard";
import { getMutuelleName } from "../utils/medicalActsUtils";

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
