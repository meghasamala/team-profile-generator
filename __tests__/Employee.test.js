const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('bob', 123, 'bob@email.com')

    expect(employee.name).toEqual('bob')
    expect(employee.id).toEqual(123)
    expect(employee.email).toEqual('bob@email.com')

})

test('get employee information', () => {
    const employee = new Employee('bob', 123, 'bob@email.com')

    expect(employee.getName()).toEqual(employee.name)
    expect(employee.getId()).toEqual(employee.id)
    expect(employee.getEmail()).toEqual(employee.email)
})



