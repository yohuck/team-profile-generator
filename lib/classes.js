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

let eric = new Employee('eric', '001', 'ericlake@me.com');
