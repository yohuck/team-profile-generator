const {expander} = require('./expander');
const fs = require('fs');
//HTML Generation


let middle = ''
let generateHTML = (list) => {

    list.forEach(employee => createArticle(employee))
    let outputHTML = firstHalf + middle + secondHalf;
    writeToFile('team-profile', outputHTML)
}

const writeToFile = (fileName, data) => {
    fs.appendFile(`${fileName}.html`, `${data}`, (err) => {
        err? console.error(err) : console.log('Success!')
    })
}

const createArticle = (dataObject) => {
    let lastQuestion = expander(dataObject.role)

    let article = `<article>
    <h3>${dataObject.name}</h3>
    <ul>
        <li>Role: ${dataObject.role}</li>
        <li>Employee ID: ${dataObject.id}</li>
        <li><a href="mailto: ${dataObject.email}">${dataObject.email}</a></li>
        <li>${lastQuestion.name}: ${dataObject[lastQuestion.name]}</li>
    </ul>
</article>`
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
        max-width: 300px;
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

exports.generateHTML= generateHTML;