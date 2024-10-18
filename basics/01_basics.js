"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let namee;
namee = "aryan tapre";
console.log(namee);
const user = {
    name: "aryan",
    age: 21,
    roll: 21
};
console.log(user);
//@ts-ignore
const getUserData = (data) => {
    console.log(typeof data);
    console.log(typeof data);
};
getUserData(1234);
class FbUser {
    constructor(displayName, phoneNumber, email, createdAt) {
        this.displayName = displayName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        const today = new Date(Date.now());
        this.createdAt = today.toLocaleString();
        console.log(this.createdAt);
    }
}
const aryan = new FbUser("aryan sanjay tapre", 12356, "taoer@gmail.com", new Date(Date.now()));
const winStat = "restore down";
console.log(winStat);
const data = [12, 12, 21];
console.log(data);
const rabbit = {
    name: "hello",
    leg: 4
};
console.log("rabbit is here:", rabbit);
var Direction;
(function (Direction) {
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
