const {Intern} = require('../lib/classes')



describe(' class', () => {
    describe('Initialization', () => {
        it('should take a name, id, email address, and github username', () => {
            const intern= new Intern('Willie', 420, 'williesroadhouse@gmail.com', 'Hard Knocks')
            
            expect(intern.id).toEqual(420)
            expect(intern.name).toEqual('Willie');
            expect(intern.email).toEqual('williesroadhouse@gmail.com')
            expect(intern.school).toEqual('Hard Knocks');
            expect(intern.role).toEqual('Intern');
        })
    })
})