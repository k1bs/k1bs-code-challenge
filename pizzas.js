// Code solution part 1

// declare PizzaSingle class
class PizzaSingle {
  constructor () {
    this.posX = 0
    this.posY = 0
    this.positionTracker = ['posX 0 posY 0'] // always deliver to starting house
  }

  moveOnce (direction) {
    if (direction === '^') {
      this.posY += 1
    } else if (direction === 'v') {
      this.posY -= 1
    } else if (direction === '>') {
      this.posX += 1
    } else if (direction === '<') {
      this.posX -= 1
    }
    if (!this.positionTracker.includes(`posX ${this.posX} posY ${this.posY}`)) { // check if house has been visited
      this.positionTracker.push(`posX ${this.posX} posY ${this.posY}`) // if not, push visited house to positionTracker array
    }
  }

  processMove (moveString) {
    const moveArray = moveString.split('')
    moveArray.forEach(element => { // iterate through string array
      this.moveOnce(element)
    })
    return this.positionTracker.length // total houses visited is the length of the positionTracker array
  }
}

// Part 2

// extend the class declared above
class PizzaSquad extends PizzaSingle {
  constructor () {
    super()
    this.onePosX = 0 // declare positions for both delivery people
    this.onePosY = 0 //
    this.twoPosX = 0 //
    this.twoPosY = 0 //
    this.turnCounter = 1 // declare a turn counter
  }

  // alternate between turns, moving positions for each respective delivery person
  // uses similar logic to above, taking into account whose turn it is
  processSquadSingleMove (direction) {
    if (this.turnCounter === 1) {
      if (direction === '^') {
        this.onePosY += 1
      } else if (direction === 'v') {
        this.onePosY -= 1
      } else if (direction === '>') {
        this.onePosX += 1
      } else if (direction === '<') {
        this.onePosX -= 1
      }
      if (!this.positionTracker.includes(`posX ${this.onePosX} posY ${this.onePosY}`)) {
        this.positionTracker.push(`posX ${this.onePosX} posY ${this.onePosY}`)
      }
      this.turnCounter = 2
    } else {
      if (direction === '^') {
        this.twoPosY += 1
      } else if (direction === 'v') {
        this.twoPosY -= 1
      } else if (direction === '>') {
        this.twoPosX += 1
      } else if (direction === '<') {
        this.twoPosX -= 1
      }
      if (!this.positionTracker.includes(`posX ${this.twoPosX} posY ${this.twoPosY}`)) {
        this.positionTracker.push(`posX ${this.twoPosX} posY ${this.twoPosY}`)
      }
      this.turnCounter = 1
    }
  }

  processSquadMove (moveString) {
    const moveArray = moveString.split('')
    moveArray.forEach(element => {
      this.processSquadSingleMove(element)
    })
    return this.positionTracker.length
  }
}

module.exports = {
  PizzaSquad,
  PizzaSingle
}
