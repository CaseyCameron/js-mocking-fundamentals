const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')

// when you hear a call to utils (provide a path), provide getWinner -- a module factory function
// fun fact, this gets hoisted to the top of the file above imports when run
jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p1)
  }
})

test('returns winner', () => {
  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
  ])

  // cleanup
  // reset the mock function to the intial state, clearing out the calls
  utilsMock.getWinner.mockReset()
})
