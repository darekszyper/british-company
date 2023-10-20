import { Company } from './class/Company.js';
import { Employee } from './class/Employee.js';
import { CompanyLocationArray } from './class/CompanyLocationArray.js';
import { CompanyLocationLocalStorage } from './class/CompanyLocationLocalStorage.js';
localStorage.removeItem('employees');
const arrayBasedCompany = new Company(new CompanyLocationArray());
const localStorageBasedCompany = new Company(new CompanyLocationLocalStorage());
arrayBasedCompany.add(new Employee('Alice', 'Project A'));
arrayBasedCompany.add(new Employee('Bob', 'Project B'));
localStorageBasedCompany.add(new Employee('Charlie', 'Project C'));
localStorageBasedCompany.add(new Employee('David', 'Project D'));
console.log('Array-based Company Projects:', arrayBasedCompany.getProjectList());
console.log('Array-based Company Names:', arrayBasedCompany.getNameList());
console.log('LocalStorage-based Company Projects:', localStorageBasedCompany.getProjectList());
console.log('LocalStorage-based Company Names:', localStorageBasedCompany.getNameList());
//# sourceMappingURL=app.js.map