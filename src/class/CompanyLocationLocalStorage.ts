import { ILocation } from './ILocation.js';
import { Employee } from './Employee.js';

export class CompanyLocationLocalStorage implements ILocation {
    addPerson(employee: Employee): void {
        const currentData = JSON.parse(localStorage.getItem('employees') || '[]');
        currentData.push({
            name: employee.getName(),
            currentProject: employee.getCurrentProject()
        });
        localStorage.setItem('employees', JSON.stringify(currentData));
    }

    getPerson(index: number): Employee {
        const employees = JSON.parse(localStorage.getItem('employees') || '[]');
        const data = employees[index];
        if (data) {
            return new Employee(data.name, data.currentProject);
        }
        throw new Error('Employee not found');
    }

    getCount(): number {
        const employees = JSON.parse(localStorage.getItem('employees') || '[]');
        return employees.length;
    }
}