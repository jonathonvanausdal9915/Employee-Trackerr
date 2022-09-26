// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// Prompt for inquirer
inquirer.
prompt([{
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a breif description of your project.',
        name: 'discription',
    },
    {
        type: 'input',
        message: 'What was your motivation?.',
        name: 'motivation',
    },
    {
        type: 'input',
        message: 'Why did you build this project?.',
        name: 'why?',
    },
])