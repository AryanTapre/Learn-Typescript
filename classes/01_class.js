"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TODO: --strictPropertyInitialization
class Point {
    constructor() {
        this.x = 0;
    }
}
const point = new Point();
console.log(point);
//TODO: readonly
//readonly- cannot update/reassign readonly property outside the constructor!
class Greater {
    constructor() {
        this.name = "hello world";
        this.name = "change";
        this.name = "change2";
    }
}
// TODO: super();
class Base {
    constructor() {
        this.x = 0;
    }
}
class Derived extends Base {
    constructor() {
        super();
        console.log(this.x);
    }
}
let d = new Derived();
//TODO: this
let y = "global";
class X {
    constructor() {
        this.y = "hello";
    }
    getY() {
        console.log(this.y); // access y as X.y
        console.log(y); // access global y
    }
}
//TODO: getters and setters
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    set setTitle(title) {
        this.name = title;
    }
    get getTitle() {
        return this.name;
    }
    set setPrice(price) {
        this.price = price;
    }
    get getPrice() {
        return this.price;
    }
}
const c = new Course("backend", 399);
console.log(c.getTitle);
//@ts-ignore
class Xuv700 {
    constructor(name, brand, price, fuelType) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.fuelType = fuelType;
    }
    setMode() {
        return true;
    }
}
const xuv700 = new Xuv700("xuv700", "mahindra", 2800000, "diesel");
console.log(xuv700);
class C {
    constructor(x) { this.x = x; }
}
//TODO: extends clauses
class Animal {
    constructor() {
        this.name = "hello";
        console.log("parent constructor called");
    }
    bark() {
        console.log("animal barking....");
    }
}
class Dog extends Animal {
    constructor(name) {
        console.log("child constructor called");
        super();
        this.name = name;
    }
    bark() {
        console.log("Dog is barking...");
    }
}
const dog = new Dog("kalu");
dog.bark();
const a = new Dog("jack");
a.bark();
