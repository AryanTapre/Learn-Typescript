"use strict";
/**
 *  @abstract classes are not instantiated
 *  @abstract classes are generally the base class
 *  @abstract classes will only have abstract fields and methods
 *
 */
class Animal {
    constructor() {
        console.log("abstract class Aniaml invoked");
    }
}
class Bird extends Animal {
    constructor() {
        super();
        //@ts-ignore
        this.birdName = "Angle";
        console.log("child class Bird invoked");
    }
    eat() {
        console.log("bird is eating..");
    }
    walk() {
        console.log("bird is walking");
    }
}
class BirdFactory {
    static createBird() {
        return new Bird();
    }
}
const b = new Bird();
b.walk();
// const bird1 = BirdFactory.createBird();
// bird1.eat();
// bird1.walk();
