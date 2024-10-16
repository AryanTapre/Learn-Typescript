//TODO: readOnly properties
var writiabelPerson = {
    name: "aryan tapre",
    age: 21,
};
var readOnlyPerson = writiabelPerson;
readOnlyPerson = {
    name: "hello",
    age: 23,
};
console.log(readOnlyPerson.name);
console.log(readOnlyPerson.age);
var aryan = {
    name: "aryan",
    age: 21,
    status: false,
    10: "go",
};
var tapre = {
    name: "aryan",
    rollno: 103
};
var dataX = [210160107518, "Aryan Sanjay Tapre"];
console.log(dataX);
function doSomething(one, two) {
    console.log(one);
    console.log(two);
}
doSomething("aryan", 12);
