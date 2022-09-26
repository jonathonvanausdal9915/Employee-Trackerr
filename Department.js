class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;

    }
    getEmployeeByName() {
        return this.name;
    };
    getEmployeeById() {
        return this.id;
    };
}
module.exports = Employee;