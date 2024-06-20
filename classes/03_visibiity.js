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
Object.defineProperty(exports, "__esModule", { value: true });
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.getName = function () {
        return this.name;
    };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived(value) {
        var _this = _super.call(this) || this;
        _this.rollno = 21;
        _this.rollno = value;
        return _this;
    }
    Derived.prototype.getRollNo = function () {
        return this.rollno;
    };
    return Derived;
}(Base));
var base = new Base();
var derived = new Derived(210160107518);
console.log(derived.getRollNo());
