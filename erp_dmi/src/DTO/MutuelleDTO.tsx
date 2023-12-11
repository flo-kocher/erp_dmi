export interface MutuelleDTO {
    id: number;
    name: string;
}

export class Mutuelle implements MutuelleDTO {
    constructor(public id: number, public name: string) {}
}
