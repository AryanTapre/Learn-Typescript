//FIXME: extends clause
class Animal {
    eat() {
        console.log("Animal is eating!.");
    }
}

class Dog extends Animal {
   walk() {
    console.log("dog is walking..");
   }
}

const dog: Dog = new Dog();
dog.eat();



// TODO: method overriding
class Person {
    //@ts-ignore
    name:string;    
    write() : void {
        console.log("person is writing");
    }
}

class Student extends Person {
    //@ts-ignore
    name: string;
    write(): void { // method overriding from Person class.
        console.log("Student is writing..");
    }
}
const aryan : Student = new Student();
aryan.write();


//TODO: Type-only fiels declaration
// declare keyword

class A {
    address = "Raj Abhishek City Homes";
    hello : string = "hello";
}

class B extends A {
    declare address : string;
    one : string = "one";
}

const a : A = new B(); // up-casting
console.log(a.address);

// const b : B = new A();


//prevents auto exports
export{}