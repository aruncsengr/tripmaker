module.exports = class Trip{
  constructor(factors){
    this.person = factors.person
    this.transporter = factors.transporter
    this.source = factors.source
    this.target = factors.target
    this.distanceInKm = factors.distanceInKm
  }

  farewellByeMsg() {
    console.log(`\nHad a good time, Bye Bye ${this.source.name}!`)
  }

  make(){
    this.transporter.onBoard(this.person)
    this.transporter.move(this.distanceInKm)
    this.transporter.offBoard(this.person)
  }

  targetReachedGreetings(){
    console.log(`\nVanakkam ${this.target.name} - by ${this.person.name}!`)
  }
}  
