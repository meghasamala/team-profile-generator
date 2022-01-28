const Manager = require('../lib/Manager');

test('create manager object', () => {
    const manager = new Manager('bob', 123, 'bob@email.com', '56789')

    expect(manager.name).toEqual('bob')
    expect(manager.id).toEqual(123)
    expect(manager.email).toEqual('bob@email.com')
    expect(manager.officeNumber).toEqual('56789')
})

test('get manager info', () => {
    const manager = new Manager('bob', 123, 'bob@email.com', '56789')

    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber)
})