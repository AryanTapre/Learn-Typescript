// Generic regular / arrow functions.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greetings(val) {
    console.log("hello, " + val);
}
var greetings2 = function (val) {
    console.log("hello, " + val);
};
var greetings3 = function (val) {
    console.log("hello, " + val);
};
var greetings4 = function (val) {
    console.log("hello " + val);
};
greetings4("aryantapre");
// const pass = new Boolean(true);
// console.log(pass);
// generic classes
var Example = /** @class */ (function () {
    function Example() {
        console.log("constructor called!.");
    }
    Example.prototype.greet = function (person) {
        console.log("good afternoon, " + person);
    };
    return Example;
}());
var p1 = new Example();
p1.greet("aryan-tapre");
function createObject(instance) {
    return new instance();
}
var p2 = createObject(Example);
p2.greet("harshad mehta");
var Person = /** @class */ (function () {
    function Person() {
        this.height = 5;
    }
    return Person;
}());
var Aryan = /** @class */ (function (_super) {
    __extends(Aryan, _super);
    function Aryan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Aryan";
        return _this;
    }
    return Aryan;
}(Person));
var getInstance = function (instance) {
    return new instance();
};
//@ts-ignore
var jack = {
    legs: 4,
    ears: 2,
    colour: "white-brown"
};
var props = "colour";
console.log(jack[props]);
//@ts-ignore
var getvalue = function (obj, props) {
    return obj[props];
};
console.log(getvalue(jack, "ears"));
