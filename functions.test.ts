const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    let input = [];
    test("check that shuffleArray returns an array", () => {
        expect(Array.isArray(shuffleArray(input))).toBe(true);
    });

    test("check that array of same length is returned", () => {
        expect(shuffleArray(input).length).toBe(input.length);
    })
})