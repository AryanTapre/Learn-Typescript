"use strict";
// understanding uses cases of keyof operator
// only used with 1. objects 2. interfaces
// FIXME: used to extract properties of object and interfaces..
Object.defineProperty(exports, "__esModule", { value: true });
const userHero = {
    name: "aryan",
    age: 21,
    isMarried: false
};
const data1 = "age";
//2. generic and mapped functions
function getvalues(obj, key) {
    return obj[key];
}
console.log(getvalues(userHero, "name"));
