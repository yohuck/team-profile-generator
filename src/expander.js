// Allows for variable questions for each employee type
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

exports.expander = expander