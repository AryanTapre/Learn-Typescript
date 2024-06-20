"use strict";
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
exports.__esModule = true;
//TODO: --strictPropertyInitialization
var Point = /** @class */ (function () {
    function Point() {
        this.x = 0;
    }
    return Point;
}());
//TODO: readonly
//readonly- cannot update/reassign readonly property outside the constructor!
var Greater = /** @class */ (function () {
    function Greater() {
        this.name = "hello world";
        this.name = "change";
        this.name = "change2";
    }
    return Greater;
}());
// TODO: super();
var Base = /** @class */ (function () {
    function Base() {
        this.x = 0;
    }
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = _super.call(this) || this;
        console.log(_this.x);
        return _this;
    }
    return Derived;
}(Base));
var d = new Derived();
//TODO: this
var y = "global";
var X = /** @class */ (function () {
    function X() {
        this.y = "hello";
    }
    X.prototype.getY = function () {
        console.log(this.y); // access y as X.y
        console.log(y); // access global y
    };
    return X;
}());
//TODO: getters and setters
var Course = /** @class */ (function () {
    function Course(name, price) {
        this.name = name;
        this.price = price;
    }
    Object.defineProperty(Course.prototype, "setTitle", {
        set: function (title) {
            this.name = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "getTitle", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "setPrice", {
        set: function (price) {
            this.price = price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "getPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    return Course;
}());
var c = new Course("backend", 399);
console.log(c.getTitle);
