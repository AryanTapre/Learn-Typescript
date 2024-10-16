"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var namee;
namee = "aryan tapre";
console.log(namee);
var user = {
    name: "aryan",
    age: 21,
    roll: 21
};
console.log(user);
//@ts-ignore
var getUserData = function (data) {
    console.log(typeof data);
    console.log(typeof data);
};
getUserData(1234);
var FbUser = /** @class */ (function () {
    function FbUser(displayName, phoneNumber, email, createdAt) {
        this.displayName = displayName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        var today = new Date(Date.now());
        this.createdAt = today.toLocaleString();
        console.log(this.createdAt);
    }
    return FbUser;
}());
var aryan = new FbUser("aryan sanjay tapre", 12356, "taoer@gmail.com", new Date(Date.now()));
var winStat = "restore down";
console.log(winStat);
var data = [12, 12, 21];
console.log(data);
var rabbit = {
    name: "hello",
    leg: 4
};
console.log("rabbit is here:", rabbit);
