const { Employee, Manager, Engineer, Intern } = require('./lib/classes.js');
const fs = require('fs');
const inquirer = require('inquirer')

let expander = (employeeType) => {
    switch(employeeType) {
    case 'Manager':
        return {
            type: 'input',
            message: 'Employee office number',
            name: 'office'}
        break;
    case 'Engineer':
        return {
            type: 'input',
            message: 'GitHub Username',
            name: 'github'}
        break;
    case 'Intern':
        return {
            type: 'input',
            message: 'School/University:',
            name: 'school'}
        break;
    default:
        return
        break;
    }
}

lastQuestion = input => expander(input)

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





function init() {
    let finalQuestion = questions.pop()
    inquirer
    .prompt(questions)
    .then((response => {
        let currentEmployee = response
        finalQuestionAsk(finalQuestion(response.role), currentEmployee)
    }))


}

const finalQuestionAsk = (questionObj, currentEmployee ) => {
    inquirer.prompt(questionObj)
    .then((response) => {
        let combined = Object.assign(currentEmployee, response)
        console.log(combined)
    })
}

// Function call to initialize app
init();


