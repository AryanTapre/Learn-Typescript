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

const greetings4:Greetings2<String> = function(val) {
    console.log("hello "+val);
}

greetings4("aryantapre")

const pass = new Boolean(true);
console.log(pass);