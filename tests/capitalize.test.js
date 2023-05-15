const capitalize = require('../code/capitalize')

test('capitalize first character of a string', () => {
    expect(capitalize('hello, how are you?')).toBe('Hello, how are you?');
  });