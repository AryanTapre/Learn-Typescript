"use strict";
//TODO: readOnly properties
let writiabelPerson = {
    name: "aryan tapre",
    age: 21,
};
let readOnlyPerson = writiabelPerson;
readOnlyPerson = {
    name: "hello",
    age: 23,
};
console.log(readOnlyPerson.name);
console.log(readOnlyPerson.age);
const aryan = {
    name: "aryan",
    age: 21,
    status: false,
    10: "go",
};
const tapre = {
    name: "aryan",
    rollno: 103
};
const dataX = [210160107518, "Aryan Sanjay Tapre"];
console.log(dataX);
function doSomething(one, two) {
    console.log(one);
    console.log(two);
}
doSomething("aryan", 12);
