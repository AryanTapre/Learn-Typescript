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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
var doSomething = function (target, context) {
    if (context.kind == "class") {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.call(this, args) || this;
                _this.name = "example";
                _this.rollno = 123;
                _this.name = "aryan-tapre";
                _this.rollno = 1;
                return _this;
            }
            return class_1;
        }(target));
    }
};
//TODO: add specific task here!.
function doSomethingAnother() {
    console.log("do-someting");
}
var Example = function () {
    var _classDecorators = [doSomething];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Example = _classThis = /** @class */ (function () {
        function Example_1(age) {
            this.name = "demo";
            this.date = Date.now();
            this.age = age;
        }
        Example_1.prototype.getDetails = function () {
            //@ts-ignore
            console.log(this.name + " " + this.rollno + " " + this.date + " " + this.age);
        };
        return Example_1;
    }());
    __setFunctionName(_classThis, "Example");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Example = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Example = _classThis;
}();
var example = new Example(22);
//@ts-ignore
console.log(example.name);
//@ts-ignore
console.log(example.rollno);
console.log(example.date);
example.getDetails();
// TODO: method decorator
// TODO: Requirements: create a class named 'RTO' that issues driving license according to checking of whether candidate has (Learners's License -< passes the DL test) ? log: issuing you a DL : return an error
//@ts-ignore
function issueDL(target, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("before changing anythng => ");
        //@ts-ignore
        var instance = this;
        var applicationNo = args[0];
        //@ts-ignore
        if (!((instance === null || instance === void 0 ? void 0 : instance.isDLTestPass) && (instance === null || instance === void 0 ? void 0 : instance.isLCPresent))) {
            console.error("Sorry RTO can't issue you a Driving License...");
        }
        else {
            return target.apply(instance, args);
            console.log("after changing anything");
        }
    };
}
var RTO = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _issueDL_decorators;
    return _a = /** @class */ (function () {
            function RTO(isDLTestPass, isLCPresent) {
                this.isDLTestPass = __runInitializers(this, _instanceExtraInitializers);
                this.isDLTestPass = isDLTestPass;
                this.isLCPresent = isLCPresent;
            }
            RTO.prototype.issueDL = function (applicationNo) {
                console.log("issued your DL, thank you for visiting");
            };
            return RTO;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _issueDL_decorators = [issueDL];
            __esDecorate(_a, null, _issueDL_decorators, { kind: "method", name: "issueDL", static: false, private: false, access: { has: function (obj) { return "issueDL" in obj; }, get: function (obj) { return obj.issueDL; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var rto = new RTO(true, true);
rto.issueDL(1234);
function role(personRole) {
    return function (target, context) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            //@ts-ignore
            var instance = this;
            console.log("The instance is => " + JSON.stringify(instance));
            if (personRole != "admin") {
                console.error("You are not permissible to push products, as you are a " + personRole);
            }
            else {
                console.log("You are admin, item pushed!.");
                return target.apply(instance, args);
            }
        };
    };
}
var Product = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _addProducts_decorators;
    return _a = /** @class */ (function () {
            function Product() {
                this.products = (__runInitializers(this, _instanceExtraInitializers), []);
            }
            Product.prototype.addProducts = function (items) {
                this.products.push(items);
                this.products.forEach(function (e) { return console.log(e); });
            };
            return Product;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _addProducts_decorators = [role("staff")];
            __esDecorate(_a, null, _addProducts_decorators, { kind: "method", name: "addProducts", static: false, private: false, access: { has: function (obj) { return "addProducts" in obj; }, get: function (obj) { return obj.addProducts; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var p = new Product();
p.addProducts({ name: "laptop", price: 690000, brand: "HP" });
// TODO: Field decorators
function addOne(target, context) {
    return function (value) {
        console.log("add one: " + value);
        return value + 1;
    };
}
var Demo = function () {
    var _a;
    var _data_decorators;
    var _data_initializers = [];
    var _data_extraInitializers = [];
    return _a = /** @class */ (function () {
            function Demo() {
                //@ts-ignore  
                this.data = __runInitializers(this, _data_initializers, 0);
                __runInitializers(this, _data_extraInitializers);
            }
            return Demo;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _data_decorators = [addOne];
            __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var demo = new Demo();
console.log(demo.data);
