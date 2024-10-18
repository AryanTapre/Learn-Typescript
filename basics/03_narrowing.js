"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFish = (pet) => {
    return pet.swim != undefined;
};
function getFood(pet) {
    if (isFish(pet)) {
        console.log("Fish Food!.");
        pet;
    }
    else {
        pet;
        console.log("bird Food!.");
    }
}
const data = {
    swim: function () {
        console.log("hello from fish!.");
    }
};
getFood(data);
function consoleError(errMsg) {
    throw new Error(errMsg);
}
const result = greet();
console.log("result will be:", result);
function greet() {
    console.log("hello ,Aryan");
}
console.log(typeof null);
