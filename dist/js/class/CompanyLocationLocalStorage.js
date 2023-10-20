import { Employee } from './Employee.js';
export class CompanyLocationLocalStorage {
    addPerson(employee) {
        const currentData = JSON.parse(localStorage.getItem('employees') || '[]');
        currentData.push({
            name: employee.getName(),
            currentProject: employee.getCurrentProject()
        });
        localStorage.setItem('employees', JSON.stringify(currentData));
    }
    getPerson(index) {
        const employees = JSON.parse(localStorage.getItem('employees') || '[]');
        const data = employees[index];
        if (data) {
            return new Employee(data.name, data.currentProject);
        }
        throw new Error('Employee not found');
    }
    getCount() {
        const employees = JSON.parse(localStorage.getItem('employees') || '[]');
        return employees.length;
    }
}
//# sourceMappingURL=CompanyLocationLocalStorage.js.map