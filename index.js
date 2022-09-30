// TODO: Include packages needed for this application
const db = require('./db/connection');
const fs = require('fs');
const inquirer = require('inquirer');

// view functions 
function viewEmployee() {
    db.query('SELECT * FROM Employee_db.department', function(err, results) {
        console.log(results);
    });
};

function viewRoles() {
    db.query('SELECT * FROM Employee_db.rolee', function(err, results) {
        console.log(results);
    });
};

function viewDepartments() {
    db.query('SELECT * FROM Employee_.department', function(err, results) {
        console.log(results);
    });
};


// TODO: Create an array of questions for user input
// Prompt for inquirer
inquirer.
prompt([{
            type: 'list',
            message: 'Select What you would like to view',
            name: 'start',
            choices: ["View All Employees", "View All Roles", "View Departments"],


        },

    ])
    .then((answer) => {
        switch (answer.start) {
            case "View All Employees":
                viewEmployee();
                break;
            case "View All Roles":
                viewRoles();
                break;
            case "View Department":
                viewDepartments();


        }
    });