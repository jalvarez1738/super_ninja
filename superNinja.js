class Ninja{
    constructor(name, health, strength = 3, speed = 3){
        this.name = name
        this.health = health
        this.strength = strength
        this.speed = speed
    }
    sayName(){
        console.log(`Boom! ${this.name}`)
        return this
    }
    showStats(){
        console.log(`Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`)
        return this
    }
    drinkSake(){
        this.health += 10
        return this
    }
}

class Sensei extends Ninja{
    constructor(name, wisdom = 10){
    super(name, 200, 10, 10)
    this.wisdom = wisdom
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        Ninja.drinkSake();
    }
}