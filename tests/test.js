/* eslint-env mocha */

const chai = require('chai')
const expect = chai.expect

const {PizzaSquad, PizzaSingle} = require('../pizzas')

describe('Part 1', () => {
  const testString = '^v^v^v^v^v'
  it('Part 1 - it should return 2 for the string "^v^v^v^v^v"', () => {
    let part1 = new PizzaSingle()
    expect(part1.processMove(testString)).to.equal(2)
  })
  it('Part 2 - it should return 11 for the same string', () => {
    let part2 = new PizzaSquad()
    expect(part2.processSquadMove(testString)).to.equal(11)
  })
})
