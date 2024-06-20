"use strict";
// TODO: Understanding method Decorator in detail!.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product() {
        //@ts-ignore
        this.products = [];
    }
    Product.prototype.addProduct = function (val) {
        this.products.push(val);
    };
    __decorate([
        withTask
    ], Product.prototype, "products");
    __decorate([
        Role("admin")
    ], Product.prototype, "addProduct");
    Product = __decorate([
        AddFields
    ], Product);
    return Product;
}());
var product = new Product();
console.log(product);
product.addProduct({
    name: "hp victus",
    price: "68000",
    type: "laptop"
});
product.addProduct({
    name: "dell",
    price: "30000",
    type: "laptop"
});
console.log(product.products);
var withTask = function (target, context) {
    console.log("deco");
    return function (args) {
        args.push({
            name: "mouse",
            price: "359",
            type: "dekstop computer"
        });
        return args;
    };
};
function Role(role) {
    return function (target, context) {
        if (role != "admin") {
            throw new Error("Access Denied only Admin User is permissible!.");
        }
    };
}
function AddFields(target, context) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super.call(this) || this;
            _this.productName = "product";
            _this.productPrice = "123";
            return _this;
        }
        return class_1;
    }(target));
}
