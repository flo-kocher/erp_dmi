// user.dto.ts
export interface UserDTO {
    id?: number;
    first_name: string;
    name: string;
    password: string;
    id_graulande: string;
    mutuelle_id?: number;
}

export class UserDTO implements UserDTO {
    constructor(
        public first_name: string,
        public name: string,
        public password: string,
        public id_graulande: string,
        public mutuelle_id?: number,
        public id?: number
    ) {}
}
