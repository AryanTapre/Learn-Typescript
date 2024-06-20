"use strict";
// import {performance} from 'perf_hooks'
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
Object.defineProperty(exports, "__esModule", { value: true });
// function measure(target:Function, context:ClassMethodDecoratorContext) {
//     if(context.kind == "method") {
//         return function(...args:any[]) {
//             const start = performance.now();
//             const end = performance.now();
//             const result = target.apply(this,args);
//             console.log("execution time is => ",end-start);
//             return result;
//         }
//     }
// }
// class Example {
//     @measure
//     public launch() {
//         console.warn("hey");
//     }
// }
// const e : Example = new Example();
// e.launch();
//------------------------------------------------------->
// const fill = (newVal:number) => {
//     return (target:undefined, context:ClassFieldDecoratorContext) => {
//         if(context.kind == "field") {
//             return (initVal:number) : number => {
//                 console.log(`initial value is: ${initVal}`);
//                 return initVal+newVal;  
//             }
//         }
//     }
// }
// class Example {
//     @fill(20)
//     fuel:number = 50;
// }
// const e:Example = new Example();
// console.log(e.fuel);
//######################################################--------#######################################
// function minimumFuel(level:number) {
//     return function (target:Function, context:ClassMethodDecoratorContext) {
//         if(context.kind == "method") {
//             return function (...args:any[]) {
//                 if(this.fuel > level) {
//                     return target.apply(this,args);
//                 }
//                 else {
//                     console.log(`Not enough fuel. Requried : ${level}, got : ${this.fuel}`);
//                 }
//             }
//         }
//     }
// }
// class Rocket {
//     fuel : number = 76;
//     @minimumFuel(75)
//     launch() {
//         console.log("hello launch!");
//     }
// }
// const rocket = new Rocket();
// rocket.launch();
//###########################################################################################
// property decorator
function AddData(target, context) {
    return function (d) {
        d.push(10);
        return d;
    };
}
function Hell(arg) {
    return function (target, context) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.x = arg;
            target.apply(this, args);
        };
    };
}
var Rocket = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _tank_decorators;
    var _tank_initializers = [];
    var _hello_decorators;
    return _a = /** @class */ (function () {
            function Rocket() {
                //@ts-ignore
                this.tank = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _tank_initializers, []));
                this.x = 100;
            }
            Rocket.prototype.hello = function () {
                console.log("say hello");
                console.log(this.x);
            };
            return Rocket;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _tank_decorators = [AddData];
            _hello_decorators = [Hell(23)];
            __esDecorate(_a, null, _hello_decorators, { kind: "method", name: "hello", static: false, private: false, access: { has: function (obj) { return "hello" in obj; }, get: function (obj) { return obj.hello; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _tank_decorators, { kind: "field", name: "tank", static: false, private: false, access: { has: function (obj) { return "tank" in obj; }, get: function (obj) { return obj.tank; }, set: function (obj, value) { obj.tank = value; } }, metadata: _metadata }, _tank_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var roc = new Rocket();
console.log(roc.tank);
roc.hello();
