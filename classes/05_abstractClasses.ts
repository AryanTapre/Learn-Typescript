/**
 *  @abstract classes are not instantiated
 *  @abstract classes are generally the base class
 *  @abstract classes will only have abstract fields and methods
 * 
 */

abstract class Animal {
    
    constructor() {
        console.log("abstract class Aniaml invoked");        
    }

    abstract walk() : void;
    abstract eat() : void;
}

class Bird extends Animal {
    //@ts-ignore
    const birdName:string = "Angle";
    constructor() {
        super();
        console.log("child class Bird invoked");
    }

    eat(): void {
        console.log("bird is eating..");
    }

    walk(): void {  
        console.log("bird is walking");    
    }
}


class BirdFactory {
    static createBird() : Bird {
        return new Bird();
    }
}


const b:Animal = new Bird();
b.walk();

// const bird1 = BirdFactory.createBird();
// bird1.eat();
// bird1.walk();