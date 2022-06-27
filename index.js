// const { Employee, Manager, Engineer, Intern } = require('./lib/classes.js');
// const fs = require('fs');
const inquirer = require('inquirer')

let expander = (employeeType) => {
    switch(employeeType) {
    case 'Manager':
        return 'Employee office number'
        break;
    case 'Engineer':
        return 'GitHub Username'
        break;
    case 'Intern':
        return 'School/University'
        break;
    default:
        return
        break;
    }
}

lastQuestion = input => expander(input)

const questions = ['Enter employee name: ', 'Enter employee ID', 'Enter employee email address', 'Select employee role', lastQuestion]





function init() {
    let finalQuestion = questions.pop()
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data)
            // writeToFile(`${data.title.toUpperCase()}-README`, generateMarkdown.generateMarkdown(data))
        })
        .then(console.log(finalQuestion('Manager')))
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
