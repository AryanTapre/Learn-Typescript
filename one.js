"use strict";
// Generic regular / arrow functions.
function greetings(val) {
    console.log("hello, " + val);
}
const greetings2 = (val) => {
    console.log("hello, " + val);
};
const greetings3 = function (val) {
    console.log("hello, " + val);
};
const greetings4 = function (val) {
    console.log("hello " + val);
};
greetings4("aryantapre");
// const pass = new Boolean(true);
// console.log(pass);
// generic classes
class Example {
    constructor() {
        console.log("constructor called!.");
    }
    greet(person) {
        console.log("good afternoon, " + person);
    }
}
const p1 = new Example();
p1.greet("aryan-tapre");
function createObject(instance) {
    return new instance();
}
const p2 = createObject(Example);
p2.greet("harshad mehta");
class Person {
    constructor() {
        this.height = 5;
    }
}
class Aryan extends Person {
    constructor() {
        super(...arguments);
        this.name = "Aryan";
    }
}
const getInstance = (instance) => {
    return new instance();
};
//@ts-ignore
const jack = {
    legs: 4,
    ears: 2,
    colour: "white-brown"
};
const props = "colour";
console.log(jack[props]);
//@ts-ignore
const getvalue = (obj, props) => {
    return obj[props];
};
console.log(getvalue(jack, "ears"));
