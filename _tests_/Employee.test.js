const {Employee} = require('../lib/classes')



describe('Employee class', () => {
    describe('Initialization', () => {
        it('should take a name, id, and email addres', () => {
            const employee= new Employee('Waylon', 233, 'jenningsfamily@gmail.com')
            
            expect(employee.id).toEqual(233)
            expect(employee.name).toEqual('Waylon');
            expect(employee.email).toEqual('jenningsfamily@gmail.com');
            expect(employee.role).toEqual('Employee');
        })
    })
})