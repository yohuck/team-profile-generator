const { Employee, Manager, Engineer, Intern } = require('./lib/classes.js');
const fs = require('fs');
const inquirer = require('inquirer');
const { team } = require('./lib/data.js');

let teamList = []

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


let finalQuestion = questions.pop()


function init() {

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
        teamList.push(combined)
        addAnother()
    })
}

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

let middle = ''
let generateHTML = (list) => {
    console.log(list)

    list.forEach(employee => createArticle(employee))
    console.log(firstHalf + middle + secondHalf)
}

const createArticle = (dataObject) => {
    let article = `<article>
    <h3>${dataObject.name}</h3>
    <ul>
        <li>Role: ${dataObject.role}</li>
        <li>Employee ID: ${dataObject.id}</li>
        <li><a href="mailto: ${dataObject.email}">${dataObject.email}</a></li>
        <li>${dataObject.last}</li>
    </ul>
</article>`
console.log(article)
middle = middle + article
return article
}



let firstHalf = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>Team Profile</h1>
        <p>This team profile was created using Eric Lake's team profile generator for Node.js. Thanks for checking it out!</p>
    </header>
    <section>`

let secondHalf = `    </section>
</body>
</html>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Ewert&family=Koulen&family=Lacquer&family=Miniver&family=Roboto+Mono:wght@300;700&family=Staatliches&display=swap');
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto Mono';
    }

    body{
        background-color: #ECFFF8;
        color: #071013;
    }
    header{
        text-align: center;
        max-width: 700px;
        margin: 1rem auto 1rem auto;
        line-height: 2.5rem;
    }
    section{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        
    }

    article{
        padding: 1rem;
        margin: 1rem;
        max-width: 200px;
        width: 100%;
        border: 1px solid black;
        border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px #C589E8;
    }

    li{
        list-style: none;
        padding: 0.3rem;
    }

    a{
        color: #9673FF
    }
</style>`