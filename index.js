// required imports
const { Employee, Manager, Engineer, Intern } = require('./lib/classes.js');
const {generateHTML} = require('./src/generateHTML');
const {expander} = require('./src/expander');
const fs = require('fs');
const inquirer = require('inquirer');

// initializes teamlsit array
let teamList = []



// Runs the switch statemenet based on the chosen employee type
lastQuestion = input => expander(input)

// Input questions
const questions = [
    {
    type: 'input',
    message: 'Enter employee name:',
    name: 'name'
    },
    {
    type: 'input',
    message: 'Enter employee ID',
    name: 'id'
    },
    {
    type: 'input',
    message: 'Enter employee email address',
    name: 'email'
    },
    {
    type: 'list',
    message: 'Select employee role', 
    name: 'role',
    choices: ['Manager', 'Engineer', 'Intern', 'Other']
    },
    lastQuestion]

// Removes the final question
let finalQuestion = questions.pop()

//Runs the input questions using inquirer
function init() {

    inquirer
    .prompt(questions)
    .then((response => {
        let currentEmployee = response
        finalQuestionAsk(finalQuestion(response.role), currentEmployee)
    }))


}

// Takes in the employee object and handles asking the final question based on the employee type
const finalQuestionAsk = (questionObj, currentEmployee ) => {
    inquirer.prompt(questionObj)
    .then((response) => {
        Object.keys(response).includes('github') ? response.github = `<a href='http://github.com/${response.github}' target='_blank'>${response.github}<a>` : response.github = response.github
        let combined = Object.assign(currentEmployee, response)
        teamList.push(combined)
        addAnother()
    })
}

// Routing based on whether another employee needs to be added or not
const addAnother = () => {
    inquirer.prompt({
        type: 'confirm',
        name: 'another',
        message: 'Add another team member',
        default: 'false'
        
    })
    .then((data) => {
        return (data.another ? init() : generateHTML(teamList))
    })
}

// Function call to initialize app
init();

exports.expander = expander