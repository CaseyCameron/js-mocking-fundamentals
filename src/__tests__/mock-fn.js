const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  // create a mock function with jest.fn
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  // console log to visually see that it's calling with what we expect
  // log utils.getWinner method with the .mock property 
  // console.log(utils.getWinner.mock)
  // then copy the console log value and use it as a test
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
  ])

  // thumbWar() always runs twice. Check it's been called twice.
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  // check it's been called with the correct values
  expect(utils.getWinner).toHaveBeenCalledWith('Kent C. Dodds', 'Ken Wheeler')
  // because it's called twice, check it's been called with the right things at the right time using 'Nth'
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1, 
    'Kent C. Dodds',
    'Ken Wheeler'
  )
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2, 
    'Kent C. Dodds',
    'Ken Wheeler'
  )


  // cleanup
  utils.getWinner = originalGetWinner
})
