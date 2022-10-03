const db = require('./db/connection');
const inquirer = require('inquirer');

start();

function start(){
inquirer.
prompt([{
            type: 'list',
            message: 'What would you like to do?',
            name: 'start',
            choices: ["View", "Add", "Update", "Exit"],


        },

    ])
    .then((answer) => {
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
                console.log("ALL DONE");


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
            choices: ["All employees", "View by department", "View by Role"]
        }]).then(function(answer) {
            switch (answer.view) {
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
    db.query("SELECT * FROM Employee_db.employee;", function(err, results) {
        if (err) throw err;
        console.log(results);
        start();

    })
}

function viewDepartment() {
    db.query("SELECT * FROM Employee_db.department;", function(err, results) {
        if (err) throw err;
        console.table(results);
        start();
    })
}

function viewRoles() {
    db.query("SELECT * FROM Employee_db.rolee;", function(err, results) {
        if (err) throw err;
        console.table(results);
        start();
    })
}
//All Add Functions

function add() {
    inquirer
        .prompt([{
            type: "list",
            name: "add",
            message: "What would you like to add?",
            choices: ["Department", "Employee role", "Employee"]
        }]).then(function(answer) {
            switch (answer.start) {
                case "Department":
                    addDepartment();
                    break;
                case "Employee role":
                    addRole();
                    break;
                case "Employee":
                    addEmployee();
                default:
                    console.log("default");



            }
        });
}

function addDepartment() {
    inquirer
        .prompt([{
            type: "input",
            name: "department",
            message: "What would you like the department name to be?",

        }]).then(function(answer) {
            db.query(
                "INSERT INTO department VALUES (DEFAULT, ?)", [answer.department],
                function(err) {
                    if (err) throw err;
                    console.log("Departments updated with " + answer.department);
                    prompty();
                }
            )
        })
}

function addRole() {
    inquirer
        .prompt([{
                type: "input",
                name: "role",
                message: "Enter role tilte:",
            },
            {
                name: "salary",
                type: "number",
                message: "Enter salary",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "department_id",
                type: "number",
                message: "Enter department id",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                }
            }
        ]).then(function(answer) {
            db.query(
                "INSERT INTO role SET ?", {
                    title: answer.role,
                    salary: answer.salary,
                    department_id: answer.department_id
                },
                function(err) {
                    if (err) throw err;
                    console.log("Employee Role updated with" + answer.role);
                    prompty();
                }
            )
        })
}

function updateEmployee() {
    console.log("update Employee");
}