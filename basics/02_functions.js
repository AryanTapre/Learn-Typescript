"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
const addTwoNumbers = (a, b) => {
    if (b != undefined) {
        return a + b;
    }
    return a;
};
const res = addTwoNumbers(15);
console.log(res);
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    return new Promise((resolve, reject) => {
        resolve("hello from promise");
    });
});
const Car = {
    getName() {
        return "aryan";
    },
    greet: "hello from aryan"
};
console.log(Car.getName());
console.log(Car.greet);
function compute(prefix) {
    return prefix === null || prefix === void 0 ? void 0 : prefix.map((response) => {
        console.log("inside map function..");
        return response;
    });
}
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name;
    }
}
const callMe = (name) => {
    return name;
};
console.log(callMe("aryan"));
function info(d) {
    console.log("description is :", d.description);
    console.log("insurane:", d.isInsurance());
}
const d = {
    description: "honda",
    isInsurance: () => {
        return true;
    }
};
info(d);
// TODO: Generics
const subSet = (str, start, end) => {
    return str.slice(start, end);
};
console.log(subSet(["1", "2", "3", "4", "5"], 2, 3));
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(combine(["1", "2"], ["a", "b"]));
function firstElement(str) {
    return str[0];
}
console.log(typeof firstElement([1, 2, 3]));
//TODO: define a generic function that deletes any element present in any type of Array
//@ts-ignore
const deleteElement = (input, position, deleteCount) => {
    return input.splice(position, deleteCount);
};
const input = ["a", "b", "c", "d", "e"];
console.log(deleteElement(input, 0, 1));
