"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//FIXME: extends clause
class Animal {
    constructor() {
        console.log("base class constructor called");
    }
    eat() {
        console.log("Animal is eating!.");
    }
}
class Dog extends Animal {
    constructor() {
        super();
        console.log("derived class constructor called");
    }
    walk() {
        console.log("dog is walking..");
    }
}
const dog = new Dog();
dog.eat();
// TODO: method overriding
class Person {
    write() {
        console.log("person is writing");
    }
}
class Student extends Person {
    write() {
        console.log("Student is writing..");
    }
}
const aryan = new Student();
aryan.write();
//TODO: Type-only fiels declaration
// declare keyword
class A {
    constructor() {
        this.address = "Raj Abhishek City Homes";
        this.hello = "hello";
    }
}
class B extends A {
    constructor() {
        super(...arguments);
        this.one = "one";
    }
}
const a = new B(); // up-casting
console.log(a.address);
