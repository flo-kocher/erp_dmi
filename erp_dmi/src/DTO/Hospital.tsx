export interface HospitalDTO {
    id: number;
    name: string;
}

export class Hospital implements HospitalDTO {
    constructor(public id: number, public name: string) {}
}
