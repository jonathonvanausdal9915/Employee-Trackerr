// TODO: Include packages needed for this application
const { Resolver, resolveSoa } = require('dns');
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// Prompt for inquirer
inquirer.
prompt([{
        type: 'list',
        message: 'What would you like to do?',
        name: 'command questions',
        choices: ['View All Employees', 'Add Employee', 'Update', 'Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    },

])