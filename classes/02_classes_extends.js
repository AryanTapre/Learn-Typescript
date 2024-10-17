"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
//FIXME: extends clause
var Animal = /** @class */ (function () {
    function Animal() {
        console.log("base class constructor called");
    }
    Animal.prototype.eat = function () {
        console.log("Animal is eating!.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super.call(this) || this;
        console.log("derived class constructor called");
        return _this;
    }
    Dog.prototype.walk = function () {
        console.log("dog is walking..");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.eat();
// TODO: method overriding
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.write = function () {
        console.log("person is writing");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.write = function () {
        console.log("Student is writing..");
    };
    return Student;
}(Person));
var aryan = new Student();
aryan.write();
//TODO: Type-only fiels declaration
// declare keyword
var A = /** @class */ (function () {
    function A() {
        this.address = "Raj Abhishek City Homes";
        this.hello = "hello";
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.one = "one";
        return _this;
    }
    return B;
}(A));
var a = new B(); // up-casting
console.log(a.address);
