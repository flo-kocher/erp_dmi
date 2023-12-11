// medical-act-result.dto.ts
export interface MedicalActResultDTO {
    id?: number;
    medical_act_id: number;
    file_name: string;
    file_data: string; // Assuming base64-encoded string, adjust as needed
}

export class MedicalActResultDTO implements MedicalActResultDTO {
    constructor(public medical_act_id: number, public file_name: string, public file_data: string, public id?: number) {}
}
