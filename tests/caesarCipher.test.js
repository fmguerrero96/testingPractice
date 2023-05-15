const caesarCipher = require('../code/caesarCipher')

test('encript a string by a given factor', () => {
    expect(caesarCipher('hello world', 3)).toBe('khoor zruog')
})

test('encript a string by a given factor', () => {
    expect(caesarCipher('hello world', 1)).toBe('ifmmp xpsme')
})