const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

// we grab (p1, p2) => p1 from below and store it in 'implementation'
function fn(implementation) {
  // pull out the arguments from the (p1, p2) => p1
  const mockFn = (...args) => {
    // push those arguments into the calls array which is a property of .mock
    mockFn.mock.calls.push(args)
    // return the return value of the (p1, p2) => p1 was automatically assigned to player 1, Kent C Dodds
    return implementation(...args)
  }
  // reset the calls array to empty?
  mockFn.mock = {calls: []}
  return mockFn
}

const originalGetWinner = utils.getWinner
// send an anon function into fn, and assign the return to utils.getWinner
utils.getWinner = fn((p1, p2) => p1)

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Kent C. Dodds', 'Ken Wheeler'],
  ['Kent C. Dodds', 'Ken Wheeler']
]
  )
// console.log(utils.getWinner.mock.calls)

// cleanup
utils.getWinner = originalGetWinner
