"use strict";
//.................................Generic Functions...................................
function identity(data) {
    return data;
}
identity("aryan"); // explictly specifying the type
identity("tapre"); // compiler automatically infer the type at compile type
let myIdentity = identity;
myIdentity("hello");
let myIdentityTwo = identity;
myIdentityTwo("aryan");
let myIdentityThree = identity;
const printAnyThing = (data) => {
    return data;
};
console.log(printAnyThing(123));
//.................................Generic Classes...................................
class Hello {
    constructor() {
        console.log("I am instance of Hello class");
    }
    greet(user) {
        console.log("Good Morning", user);
    }
}
const create = (instance) => {
    return new instance();
};
const obj = create(Hello);
obj.greet("aryan");
// class property holds the instance of other class
class BeeKeeper {
    constructor() {
        this.hasMaks = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nameTag = "aryan tapre";
    }
}
class Animal {
    constructor() {
        this.numsLeg = 2;
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.numsLeg = 4;
        this.keeper = new BeeKeeper();
    }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.numsLeg = 4;
        this.keeper = new ZooKeeper();
    }
}
const createInstance = (instance) => {
    return new instance();
};
console.log(createInstance(Lion).keeper.hasMaks);
console.log(createInstance(Dog).keeper.nameTag);
