const db = require('./db/connection');
const inquirer = require('inquirer');

//functionaly of application
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
                    addTo();
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
//VIEW SET
function view() {
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
                case "Add":
                    viewDepartment();
                    break;
                case "Update":
                    viewRoles();
                default:
                    console.log("default");



            }
        });
}