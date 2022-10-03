const db = require('./db/connection');
const inquirer = require('inquirer');

function prompty() {
    inquirer
        .prompt([{
            type: "list",
            name: "start",
            message: "What would you like to do?",
            chioces: ["View", "Add", "Update", "Exit"]
        }]).then(function(answer) {
            switch (answer.start) {
                case "View":
                    viewAll();
                    break;
                case "Add":
                    add();
                    break;
                case "Update":
                    updateEmployee();
                    break;
                case "Exit":
                    console.log('ALL DONE');
                    break;
                default:
                    console.log("default");



            }
        });
}
//All View Functions
function viewAll() {
    inquirer
        .prompt([{
            type: "list",
            name: "view",
            message: "What would you like to view?",
            chioces: ["All employees", "View by department", "View by Role"]
        }]).then(function(answer) {
            switch (answer.start) {
                case "All employees":
                    viewEmployee();
                    break;
                case "View by department":
                    viewDepartment();
                    break;
                case "View by Role":
                    viewRoles();
                default:
                    console.log("default");



            }
        });
}

function viewEmployee() {
    db.query("SELECT * FROM Employee.db.employee", function(err, results) {
        if (err) throw err;
        console.table(results);
        prompty();
    })
}

function viewDepartment() {
    db.query("SELECT * FROM Employee.db.department", function(err, results) {
        if (err) throw err;
        console.table(results);
        prompty();
    })
}

function viewRoles() {
    db.query("SELECT * FROM Employee.db.rolee", function(err, results) {
        if (err) throw err;
        console.table(results);
        prompty();
    })
}
//All Add Functions

function add() {
    inquirer
        .prompt([{
            type: "list",
            name: "add",
            message: "What would you like to add?",
            chioces: ["Department", "Employee role", "Employee"]
        }]).then(function(answer) {
            switch (answer.start) {
                case "Department":
                    addDepartment();
                    break;
                case "Employee role":
                    addEmployeeRole();
                    break;
                case "Employee":
                    addEmployee();
                default:
                    console.log("default");



            }
        });
}