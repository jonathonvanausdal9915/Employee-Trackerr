const db = require('./db/connection');
const inquirer = require('inquirer');

//functionaly of application
function prompt() {
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