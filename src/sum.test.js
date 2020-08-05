import sum from './sum'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('no values into arguments to equal NaN', () => {
    expect(sum()).toBe(NaN)
})