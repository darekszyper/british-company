import { Employee } from './Employee.js';

export interface ILocation {
    addPerson(employee: Employee): void;
    getPerson(index: number): Employee;
    getCount(): number;
}