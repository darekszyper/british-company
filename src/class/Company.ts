import { Employee } from "./Employee.js";
import { ILocation } from './ILocation.js';

export class Company<T extends ILocation> {
    constructor(private location: T) {}

    add(employee: Employee): void {
        this.location.addPerson(employee);
    }

    getProjectList(): string[] {
        const projects: string[] = [];
        for (let i = 0; i < this.location.getCount(); i++) {
            projects.push(this.location.getPerson(i).getCurrentProject());
        }
        return projects;
    }

    getNameList(): string[] {
        const names: string[] = [];
        for (let i = 0; i < this.location.getCount(); i++) {
            names.push(this.location.getPerson(i).getName());
        }
        return names;
    }
}