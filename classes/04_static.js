"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Foo {
    static updateGood(update) {
        Foo.good = update;
    }
}
class Gen {
    constructor(data) {
        this.data = data;
    }
}
const gen = new Gen("hello");
console.log(Foo.updateGood("hello"));
console.log(Foo.good);
