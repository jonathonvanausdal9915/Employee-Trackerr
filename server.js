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
            choices: ["View all employees", "View all departments", "View all roles"]
        }]).then(function(answer) {
            switch (answer.view) {
                case "View all employees":
                    viewEmployee();
                    break;
                case "View all departments":
                    viewDepartment();
                    break;
                case "View all roles":
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
            switch (answer.add) {
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
                    start();
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
                "INSERT INTO Employee_db.rolee SET ?", {
                    title: answer.role,
                    salary: answer.salary,
                    department_id: answer.department_id
                },
                function(err) {
                    if (err) throw err;
                    console.log("Employee Role updated with" + answer.role);
                    start();
                }
            )
        })
}
function addEmployee() {
    inquirer
        .prompt([{
                name: "first_name",
                type:"input",
                message: "What is your Employees first name?",
            },
            {
                name: "last_name",
                type: "input",
                message: "What is your Employees last name?",
                
            },
            {
                name: "rolee_id",
                type: "input",
                message: "What is the role id?",
                
            },
            {
                name: "manager_id",
                type: "input",
                message: "What is the manager id?",
                
            },
            
        ]).then(function(answer) {
            db.query(
                "INSERT INTO Employee_db.employee SET ?", {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    rolee_id: answer.rolee_id,
                    manager_id: answer.manager_id
                },
                function(err) {
                    if (err) throw err;
                    console.log("Updated Employee"+ answer.first_name +"Into the Employees");
                    start();
                }
            )
        })
}

function updateEmployee() {
    console.log("update Employee");
}