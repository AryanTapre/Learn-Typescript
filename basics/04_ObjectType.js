//TODO: readOnly properties
var writiabelPerson = {
    name: "aryan tapre",
    age: 21
};
var readOnlyPerson = writiabelPerson;
readOnlyPerson = {
    name: "hello",
    age: 23
};
console.log(readOnlyPerson.name);
console.log(readOnlyPerson.age);
var demo = { name: "hello", isLoggedIn: true, length: 21 };
demo[0] = "helloZero";
demo[1] = "helloOne";
console.log("value at 0th index: ".concat(demo.name));
var dataX = [210160107518, "Aryan Sanjay Tapre"];
function doSomething(one, two) {
    console.log(one);
    console.log(two);
}
doSomething("aryan", 12);
