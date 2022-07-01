const {Engineer} = require('../lib/classes')



describe('Engineer class', () => {
    describe('Initialization', () => {
        it('should take a name, id, email address, and github username', () => {
            const engineer= new Engineer('Graham', 232, 'flyingburritos@gmail.com', 'burrito-delux')
            
            expect(engineer.id).toEqual(232)
            expect(engineer.name).toEqual('Graham');
            expect(engineer.email).toEqual('flyingburritos@gmail.com')
            expect(engineer.github).toEqual('burrito-delux');
            expect(engineer.role).toEqual('Engineer');
        })
    })
})