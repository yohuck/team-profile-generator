const {Manager} = require('../lib/classes')



describe('Manager class', () => {
    describe('Initialization', () => {
        it('should take a name, id, email address, and office number', () => {
            const manager = new Manager('Eric', 202, 'ericlake@me.com', 202)

            expect(manager.id).toEqual(202)
            expect(manager.name).toEqual('Eric');
            expect(manager.email).toEqual('ericlake@me.com')
            expect(manager.officeNumber).toEqual(202);
            expect(manager.role).toEqual('Manager');
        })
    })
})