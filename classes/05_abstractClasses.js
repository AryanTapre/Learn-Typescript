/**
 *  @abstract classes are not instantiated
 *  @abstract classes are generally the base class
 *  @abstract classes will only have abstract fields and methods
 *
 */
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
var Animal = /** @class */ (function () {
    function Animal() {
        console.log("abstract class Aniaml invoked");
    }
    return Animal;
}());
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        var _this = _super.call(this) || this;
        //@ts-ignore
        _this.birdName = "Angle";
        console.log("child class Bird invoked");
        return _this;
    }
    Bird.prototype.eat = function () {
        console.log("bird is eating..");
    };
    Bird.prototype.walk = function () {
        console.log("bird is walking");
    };
    return Bird;
}(Animal));
var BirdFactory = /** @class */ (function () {
    function BirdFactory() {
    }
    BirdFactory.createBird = function () {
        return new Bird();
    };
    return BirdFactory;
}());
var b = new Bird();
b.walk();
// const bird1 = BirdFactory.createBird();
// bird1.eat();
// bird1.walk();
