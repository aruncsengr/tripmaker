const Trip = require('./trip')
const Place = require('./place')
const Boat = require('./boat')
const Person = require('./person')
const prompt = require('prompt-sync')();

let personName = prompt('Hey there, whats your good name! ')
console.log(`Awesome ${personName}, now lets make your trip smooth!`);

let onBoardRegion = prompt('Boarding region? ')
let offBoardRegion = prompt('Destination? ')
let distanceInKm = prompt('Approximate distance (km) to reach the destiny? ')

const factors = {
    source: new Place(onBoardRegion),
    target: new Place(offBoardRegion),
    transporter: new Boat(),
    person: new Person(personName),
    distanceInKm: distanceInKm
}
  
trip = new Trip(factors)
trip.farewellByeMsg()
trip.make()
trip.targetReachedGreetings()
console.log("\nWoohoo, Mission Accomplished!")
console.log("I like to move it, move it...\n")
