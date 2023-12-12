import {MedicalActsGrid} from "./MedicalActsGrid";

export function MedicalActsGridItem({data}) {
    return (
        data.map((act, index) => {
            return (
                <MedicalActsGrid
                    key={act['id']}
                    id={act['id']}
                    date={act['date_prevue']}
                    intervention={act['metadata_1']}
                    comment={act['commentaire']}
                />
            )
        })
    );
}
