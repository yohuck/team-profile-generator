let Id = require('../lib/data');


const employeeId = () => {
    let newest = Id.id._mostRecent += 1;
    Id.id.mostRecent = newest;
    let returner = String(newest).padStart(3,'0')
    return returner;
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
return article
}