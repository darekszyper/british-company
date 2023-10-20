export class CompanyLocationArray {
    constructor() {
        this.employees = [];
    }
    addPerson(employee) {
        this.employees.push(employee);
    }
    getPerson(index) {
        return this.employees[index];
    }
    getCount() {
        return this.employees.length;
    }
}
//# sourceMappingURL=CompanyLocationArray.js.map