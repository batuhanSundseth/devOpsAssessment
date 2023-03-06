const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    let arr = [1, 2, 3]
    test("Returns an array the same length as the argument", () => {
        expect(shuffleArray(arr).length).toEqual(arr.length);
    })

    test('Returns an array', () => {
        expect(Array.isArray(shuffleArray([1, 2, 3]))).toBe(true)
       })
})