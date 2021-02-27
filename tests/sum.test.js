const sum = require('c:/Users/pavel/Desktop/git-hooks-nodejs/src/sum.js')

it('should return correct sum', () => {
    const result = sum(2, 5)
    expect(result).toBe(7)
})
