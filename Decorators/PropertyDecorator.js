"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// const withComplicatedTask = <T,V extends Task[]>(target: undefined, context: ClassFieldDecoratorContext<T,V>) => {      
//         return function(args: V) {
//             args.push({
//                 name:"PRATA SPOJ",
//                 level: "hard"
//             })
//             return args;
//         }
// }
//FIXME: OLDER SYNTAX:
var withComplicatedTask = function (target, propertyKey) {
    var tasks = target[propertyKey] || [];
    console.log(tasks);
    tasks.push({
        name: "PRATA SPOJ",
        level: "hard"
    });
};
var Manager = /** @class */ (function () {
    function Manager() {
        //@ts-ignore
        this.tasks = [];
    }
    __decorate([
        withComplicatedTask
    ], Manager.prototype, "tasks");
    return Manager;
}());
var manager = new Manager();
console.log(manager);
//-----------------Another example......................
//FIXME: newer Syntax not working!.
// const PasswordValidatorLength = (limit : number) => {
//     return <T,V extends string>(target:undefined, context:ClassFieldDecoratorContext<T,V>) => {
//         return function (this:T,args:V) {
//             let value : string;
//             Object.defineProperty(this,args,{
//                 get() {
//                     return value;
//                 },
//                 set(newVal: string) {
//                     if(newVal.length < limit) {
//                         console.error("password must be atleast of 8 characters!.")
//                     }
//                     value = newVal;
//                 },
//             })
//         }
//     }
// }
var PasswordValidatorLength = function (limit) {
    //FIXME: older syntax of property decorator1.
    return function (target, propertyKey) {
        var value;
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return value;
            },
            set: function (newVal) {
                if (newVal.length < limit) {
                    console.error("password must be atleast of 8 characters!.");
                }
                else {
                    value = newVal;
                }
            }
        });
    };
};
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    __decorate([
        PasswordValidatorLength(8)
    ], User.prototype, "password");
    return User;
}());
var user = new User("_aryanTapre", "12345678");
//@ts-ignore
console.log(user.password);
