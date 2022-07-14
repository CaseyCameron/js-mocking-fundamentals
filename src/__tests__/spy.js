const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  // listen for utils (the object being called) and interrupt the getWinner method attached
  // this means we don't have to keep track of the original version of originalGetWinner
  // because we aren't using it. We now use a mock
  jest.spyOn(utils, 'getWinner')
  // when utils.getWinner is called, run this mockImplementation and pass in this anon function
  utils.getWinner.mockImplementation((p1, p2) => p1)

  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
  ])

  // cleanup
  utils.getWinner.mockRestore()
})
