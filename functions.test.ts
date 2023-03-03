const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    let arr = [1, 2, 3]
    it("returns an array the same length as the argument", () => {
        expect(shuffleArray(arr).length).toBe(arr.length);
    })

    it("returns an array", () => {
        expect(typeof shuffleArray(arr)).toBe("object");
    })
})