

// Generic regular / arrow functions.

function greetings<T>(val:T): void {
    console.log("hello, " +val);
}

const greetings2 = <T>(val:T):void => {
    console.log("hello, "+val);
}

interface Greetings {
    <T>(val:T):void,
}

const greetings3:Greetings = function(val) {
    console.log("hello, "+val); 
}

// Defined generic interface.
interface Greetings2<T> {
    (val:T):void
}

type SString = String;
const greetings4:Greetings2<SString> = function(val) {
    console.log("hello "+val);
}

greetings4("aryantapre")

// const pass = new Boolean(true);
// console.log(pass);

// generic classes

class Example<Type> {
    constructor() {
        console.log("constructor called!.");
    }
    greet(person: Type) {
        console.log("good afternoon, "+person);
        
    }
}

const p1:Example<string> = new Example();
p1.greet("aryan-tapre");

function createObject<T>(instance: {new():T}): T {
    return new instance();
}

const p2:Example<string> = createObject(Example);
p2.greet("harshad mehta");

class Person {
    height: number = 5;
}

class Aryan extends Person {
    name:string = "Aryan";
}

const getInstance = <Type extends Person>(instance: {new ():Type}) => {
    return new instance()
}

// const aryan2:Aryan = getInstance(Aryan);
// aryan2.height = 6;
//console.log(aryan2.height);

interface Dog {
    legs:number;
    ears:number;
    colour:string;
}

//@ts-ignore
const jack:Dog = {
    legs:4,
    ears:2,
    colour:"white-brown"
}

const props: keyof Dog = "colour"
console.log(jack[props]);

//@ts-ignore
const getvalue = <T extends object>(obj:T, props: keyof T) : T[typeof T] => {
    return obj[props];
}

console.log(getvalue(jack,"ears"));
