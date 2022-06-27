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
        console.log(response)
    }))
}

// Function call to initialize app
init();



// let eric = new Employee('eric', '001', 'ericlake@me.com');
// let danny = new Manager ('Danny', '002', 'teacher.danny.notreal@gmail.com', '101');
// let marlee = new Engineer('Marlee', '003', 'marleeahudson@gmail.com', 'marcelona')
// let isaiah = new Intern('Isaiah', '004', 'isaiah.example@gmail.com', 'University of Denver')

// console.log(danny.role)
// console.log(marlee.github)
// console.log(isaiah.email)
