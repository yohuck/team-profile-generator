let Id = require('../lib/data');


const employeeId = () => {
    let newest = Id.id._mostRecent += 1;
    Id.id.mostRecent = newest;
    let returner = String(newest).padStart(3,'0')
    return returner;
}


console.log(employeeId());
console.log(employeeId());
console.log(employeeId())

