
class Employee {
    constructor(name, id, email){
        this._name = name;
        this._id = id;
        this._email = email;
        this._role = 'Employee'
    }

    get name(){
        return this._name;
    }
    get id(){
        return this._id;
    }
    get email(){
        return this._email;
    }
    get role(){
        return this._role
    }
}

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this._role = 'Manager'
        this._officeNumber = officeNumber;
    }
    
    get officeNumber(){
        return this._officeNumber
    }
}

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this._role = 'Engineer'
        this._github = github;
    }

    get github(){
        return this._github
    }
}
class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this._role = 'Intern'
        this._school = school;
    }

    get school(){
        return this._school
    }
}

// let eric = new Employee('eric', '001', 'ericlake@me.com');
// let danny = new Manager ('Danny', '002', 'teacher.danny.notreal@gmail.com', '101');
// let marlee = new Engineer('Marlee', '003', 'marleeahudson@gmail.com', 'marcelona')
// let isaiah = new Intern('Isaiah', '004', 'isaiah.example@gmail.com', 'University of Denver')

// console.log(danny.role)
// console.log(marlee.github)
// console.log(isaiah.email)

exports.Employee = Employee;
exports.Manager = Manager;
exports.Engineer = Engineer;
exports.Intern = Intern;