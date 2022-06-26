const { Employee, Manager, Engineer, Intern } = require('./lib/classes');



let eric = new Employee('eric', '001', 'ericlake@me.com');
let danny = new Manager ('Danny', '002', 'teacher.danny.notreal@gmail.com', '101');
let marlee = new Engineer('Marlee', '003', 'marleeahudson@gmail.com', 'marcelona')
let isaiah = new Intern('Isaiah', '004', 'isaiah.example@gmail.com', 'University of Denver')

console.log(danny.role)
console.log(marlee.github)
console.log(isaiah.email)
