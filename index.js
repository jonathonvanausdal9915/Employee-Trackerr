// TODO: Include packages needed for this application
const db = require('./db/connection');
const fs = require('fs');
const inquirer = require('inquirer');


function callBack() {
    db.query('SELECT * FROM Employee_db.department', function(err, results) {
        console.log(results);
    });
};

function callFront() {
    db.query('SELECT * FROM Employee_db.rolee', function(err, results) {
        console.log(results);
    });
};

// TODO: Create an array of questions for user input
// Prompt for inquirer
inquirer.
prompt([{
            type: 'list',
            message: 'What would you like to do?',
            name: 'start',
            choices: ["View All Employees", "Add Employee", "Update", "Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"],


        },

    ])
    .then((answer) => {
        switch (answer.start) {
            case "View All Employees":
                callBack();
                break;
            case "Add Employee":
                callFront();
                break;


        }
    });