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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
function PrintDecorator(target, context) {
    console.log("target : ", target);
    console.log("Context:", context);
    //@ts-ignore
    context.addInitializer(function () {
        console.log(target.name);
    });
}
function withEmployeeDateOnPrototype(target, context) {
    target.prototype.employeeDate = new Date().toISOString();
    console.log("decorator => ", target);
    console.log("context=>", context);
}
//FIXME: Adding data through constructor.
var withEmployeeDate = function (BaseClass, context) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.dateOfEmployee = new Date().toISOString();
            console.log("Added new property using constructor function :", BaseClass.name);
            return _this;
        }
        return class_1;
    }(BaseClass));
};
//@PrintDecorator
//@ts-ignore
var Manager = /** @class */ (function () {
    function Manager(project, task) {
        this.project = project;
        this.task = task;
        console.log("instance of Manager class reverse Heap Memory!.");
    }
    Manager = __decorate([
        withEmployeeDateOnPrototype
        //@ts-ignore
        ,
        withEmployeeDate
    ], Manager);
    return Manager;
}());
var manager = new Manager("store", 12);
console.log(manager);
//----------------------------Another Example...............................
function CreateFieldsUsingConstructor(target, context) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.fuelCapacity = 35;
            return _this;
        }
        class_2.prototype.getFuelCapacity = function () {
            return this.fuelCapacity;
        };
        return class_2;
    }(target));
}
function CreateFieldsUsingPrototype(target, context) {
    var _this = this;
    console.log("printing the context:", context);
    //@ts-ignore
    target.prototype.taskID = 45;
    //@ts-ignore
    target.prototype.getTaskID = function () {
        //@ts-ignore
        return _this.taskID;
    };
}
//@ts-ignore
var Rocket = /** @class */ (function () {
    function Rocket(msg) {
        this.name = msg;
    }
    Rocket = __decorate([
        CreateFieldsUsingConstructor
        //@ts-ignore
        ,
        CreateFieldsUsingPrototype
    ], Rocket);
    return Rocket;
}());
;
var rocket = new Rocket("rocket");
console.log(rocket);
//@ts-ignore
console.log(rocket.taskID);
//@ts-ignore
console.log("taskID is : ".concat(rocket.getTaskID()));
//@ts-ignore
console.log(rocket.getFuelCapacity());
