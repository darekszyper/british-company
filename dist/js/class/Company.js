export class Company {
    constructor(location) {
        this.location = location;
    }
    add(employee) {
        this.location.addPerson(employee);
    }
    getProjectList() {
        const projects = [];
        for (let i = 0; i < this.location.getCount(); i++) {
            projects.push(this.location.getPerson(i).getCurrentProject());
        }
        return projects;
    }
    getNameList() {
        const names = [];
        for (let i = 0; i < this.location.getCount(); i++) {
            names.push(this.location.getPerson(i).getName());
        }
        return names;
    }
}
//# sourceMappingURL=Company.js.map