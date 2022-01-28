const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const engineer = new Engineer('bob', 123, 'bob@email.com', 'bobsgithub')

    expect(engineer.name).toEqual('bob')
    expect(engineer.id).toEqual(123)
    expect(engineer.email).toEqual('bob@email.com')
    expect(engineer.github).toEqual('bobsgithub')
})

test('get engineer info', () => {
    const engineer = new Engineer('bob', 123, 'bob@email.com', 'bobsgithub')

    expect(engineer.getGithub()).toEqual(engineer.github)
})