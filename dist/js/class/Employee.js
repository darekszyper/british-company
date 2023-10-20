export class Employee {
    constructor(name, currentProject) {
        this.currentProject = 'Not assigned to project';
        this.name = name;
        if (currentProject)
            this.currentProject = currentProject;
    }
    setCurrentProject(currentProject) {
        this.currentProject = currentProject;
    }
    getName() {
        return this.name;
    }
    getCurrentProject() {
        return this.currentProject;
    }
}
//# sourceMappingURL=Employee.js.map