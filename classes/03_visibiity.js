"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    getName() {
        return this.name;
    }
}
class Derived extends Base {
    constructor(value) {
        super();
        this.rollno = 21;
        this.rollno = value;
    }
    getRollNo() {
        return this.rollno;
    }
}
const base = new Base();
const derived = new Derived(210160107518);
console.log(derived.getRollNo());
