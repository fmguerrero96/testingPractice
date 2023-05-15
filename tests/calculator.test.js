const Calculator = require('../code/calculator')

const myCalculator = new Calculator

test('add two numbers', () => {
    expect(myCalculator.add(2,3)).toBe(5)
})

test('subtract two numbers', () => {
    expect(myCalculator.subtract(5,3)).toBe(2)
})

test('multiply two numbers', () => {
    expect(myCalculator.multiply(4,3)).toBe(12)
})

test('divide two numbers', () => {
    expect(myCalculator.divide(6,2)).toBe(3)
})