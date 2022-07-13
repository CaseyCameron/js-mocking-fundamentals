const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

// originalGetWinner servers as a cleanup function. Before every test, it resets.
// this is called monkey-patching
const originalGetWinner = utils.getWinner
// mock out a function to ensure getWinner always returns player 1
// this makes our test deterministic
utils.getWinner = (p1, p2) => p1

// mocks out a random winner so it will pass or fail w/o the functionality above
const winner = thumbWar('Kent C. Dodds', 'Kent Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')

// clean up after the test so other tests in the module can use it in its unmodified state
utils.getWinner = originalGetWinner
