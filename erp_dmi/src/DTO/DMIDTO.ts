// medical-act.dto.ts
export interface MedicalActDTO {
    id?: number;
    user_id: number;
    hospital_id: number;
    mutuelle_id?: number;
    metadata_1: string;
    metadata_2: string;
    montant_total: number;
    prise_en_charge_hopital: number;
    prise_en_charge_mutuelle: number;
    prise_en_charge_patient: number;
    confirmation_paiement_patient: boolean;
    confirmation_mutuelle: boolean;
    confirmation_rdv: boolean;
    pourcentage_prise_en_charge: number;
    commentaire: string;
    date_creation: string; // ISO 8601 date-time format
    date_prevue: string; // ISO 8601 date-time format
    date_venue: string; // ISO 8601 date-time format
}

export class MedicalActDTO implements MedicalActDTO {
    constructor(
        public user_id: number,
        public hospital_id: number,
        public metadata_1: string,
        public metadata_2: string,
        public montant_total: number,
        public prise_en_charge_hopital: number,
        public prise_en_charge_mutuelle: number,
        public prise_en_charge_patient: number,
        public confirmation_paiement_patient: boolean,
        public confirmation_mutuelle: boolean,
        public confirmation_rdv: boolean,
        public pourcentage_prise_en_charge: number,
        public commentaire: string,
        public date_creation: string,
        public date_prevue: string,
        public date_venue: string,
        public mutuelle_id?: number,
        public id?: number
    ) {}
}
