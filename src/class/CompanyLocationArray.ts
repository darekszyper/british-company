import { ILocation } from './ILocation.js';
import { Employee } from './Employee.js';

export class CompanyLocationArray implements ILocation {
    private employees: Employee[] = [];

    addPerson(employee: Employee): void {
        this.employees.push(employee);
    }

    getPerson(index: number): Employee {
        return this.employees[index];
    }

    getCount(): number {
        return this.employees.length;
    }
}
