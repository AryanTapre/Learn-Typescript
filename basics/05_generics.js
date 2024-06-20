//.................................Generic Functions...................................
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
function identity(data) {
    return data;
}
identity("aryan"); // explictly specifying the type
identity("tapre"); // compiler automatically infer the type at compile type
var myIdentity = identity;
myIdentity("hello");
var myIdentityTwo = identity;
var myIdentityThree = identity;
//.................................Generic Classes...................................
var Hello = /** @class */ (function () {
    function Hello() {
        console.log("I am instance of Hello class");
    }
    Hello.prototype.greet = function (user) {
        console.log("Good Morning", user);
    };
    return Hello;
}());
var create = function (instance) {
    return new instance();
};
var obj = create(Hello);
obj.greet("aryan");
// class property holds the instance of other class
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
        this.hasMaks = true;
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
        this.nameTag = "aryan tapre";
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.numsLeg = 2;
    }
    return Animal;
}());
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numsLeg = 4;
        _this.keeper = new BeeKeeper();
        return _this;
    }
    return Lion;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numsLeg = 4;
        _this.keeper = new ZooKeeper();
        return _this;
    }
    return Dog;
}(Animal));
var createInstance = function (instance) {
    return new instance();
};
console.log(createInstance(Lion).keeper.hasMaks);
console.log(createInstance(Dog).keeper.nameTag);
