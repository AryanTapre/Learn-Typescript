//.................................Generic Functions...................................

function identity<Type>(data: Type) : Type {
    return data;
}

identity<string>("aryan"); // explictly specifying the type
identity("tapre"); // compiler automatically infer the type at compile type


let myIdentity: <type>(arg:type) => type = identity;
myIdentity("hello");

interface GenericIdentity {
    <type>(arg: type) : type;
}

let myIdentityTwo : GenericIdentity = identity;


// TODO:  making interface generic
interface GenericIdentityFn<type> {
    (arg: type) : type; // type is avaliable to entire interface
}

let myIdentityThree : GenericIdentityFn<number>  = identity;

//.................................Generic Classes...................................

class Hello<type> {
    constructor() {
        console.log("I am instance of Hello class");
    }
    greet(user:type) {
        console.log("Good Morning",user);
    }
}

interface CreateInstance<type> {
    new () : type // Constructor function used to create Objects.
}

const create = <type>(instance : CreateInstance<type>) : type => {
    return new instance();
}

const obj : Hello<string> = create(Hello);
obj.greet("aryan");


// class property holds the instance of other class
class BeeKeeper {
    hasMaks : boolean = true;
}

class ZooKeeper {
    nameTag: string = "aryan tapre";
}

class Animal {
    numsLeg:number = 2;
}

class Lion extends Animal {
    numsLeg = 4;
    keeper : BeeKeeper = new BeeKeeper();
}

class Dog extends Animal {
    numsLeg = 4;
    keeper : ZooKeeper = new ZooKeeper();
}

const createInstance = <type extends Animal>(instance : CreateInstance<type>) : type => {
    return new instance();
}

console.log(createInstance(Lion).keeper.hasMaks);
console.log(createInstance(Dog).keeper.nameTag);
