"use strict";
exports.__esModule = true;
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.updateGood = function (update) {
        Foo.good = update;
    };
    return Foo;
}());
var Gen = /** @class */ (function () {
    function Gen(data) {
        this.data = data;
    }
    return Gen;
}());
var gen = new Gen("hello");
console.log(Foo.updateGood("hello"));
console.log(Foo.good);
