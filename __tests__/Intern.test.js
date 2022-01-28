const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('bob', 123, 'bob@email.com', 'ut austin')

    expect(intern.name).toEqual('bob')
    expect(intern.id).toEqual(123)
    expect(intern.email).toEqual('bob@email.com')
    expect(intern.school).toEqual('ut austin')
})

test('get intern info', () => {
    const intern = new Intern('bob', 123, 'bob@email.com', 'ut austin')

    expect(intern.getSchool()).toEqual(intern.school)
})