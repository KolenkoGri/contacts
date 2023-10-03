import { Users } from "./user";

interface Staff {
    id: number;
    firstname: string;
    surname: string;
    age: number;
    post: string;
}

export class Employees extends Users<Staff> {}
