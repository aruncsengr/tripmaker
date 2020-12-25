const ValidationError = require('./validationError')
const Person = require('./person')

module.exports = class Boat{
  constructor(distanceToReachTarget = 0){
    this.occupied = false
  }

  onBoard(person){
    if(person instanceof Person){
      this.occupied = true  
      return
    }

    let notaHumanError = new ValidationError("Not a Human!")
    throw notaHumanError
  }

  move(distanceInKm) {
    let distanceCoveredInKm = 0
    console.time("Total Journey Time")
    process.stdout.write("\n<__>")
    while(distanceCoveredInKm < distanceInKm) {
      
      process.stdout.write("~")
      distanceCoveredInKm += 1 
    }
    process.stdout.write("<__>\n\n")
    console.log(`Phew! we made our effort to reach the destiny by covering ${distanceCoveredInKm}km`)
    console.timeLog("Total Journey Time")
  }

  offBoard(person){
    this.occupied = false  
  }
}
