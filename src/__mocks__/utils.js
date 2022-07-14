// create this mock file so that Jest will pick this up whenever we run utils in /tests
module.exports = {
  getWinner: jest.fn((p1, p2) => p1)
}
