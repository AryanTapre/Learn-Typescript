"use strict";
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
function PrintDecorator(target, context) {
    console.log("target : ", target);
    console.log("Context:", context);
    //@ts-ignore
    context.addInitializer(() => {
        console.log(target.name);
    });
}
function withEmployeeDateOnPrototype(target, context) {
    target.prototype.employeeDate = new Date().toISOString();
    console.log("decorator => ", target);
    console.log("context=>", context);
}
//FIXME: Adding data through constructor.
const withEmployeeDate = (BaseClass, context) => {
    return class extends BaseClass {
        constructor(...args) {
            super(...args);
            this.dateOfEmployee = new Date().toISOString();
            console.log("Added new property using constructor function :", BaseClass.name);
        }
    };
};
//@PrintDecorator
//@ts-ignore
let Manager = (() => {
    let _classDecorators = [withEmployeeDateOnPrototype, withEmployeeDate];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Manager = _classThis = class {
        constructor(project, task) {
            this.project = project;
            this.task = task;
            console.log("instance of Manager class reverse Heap Memory!.");
        }
    };
    __setFunctionName(_classThis, "Manager");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Manager = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Manager = _classThis;
})();
const manager = new Manager("store", 12);
console.log(manager);
//----------------------------Another Example...............................
function CreateFieldsUsingConstructor(target, context) {
    return class extends target {
        constructor() {
            super(...arguments);
            this.fuelCapacity = 35;
        }
        getFuelCapacity() {
            return this.fuelCapacity;
        }
    };
}
function CreateFieldsUsingPrototype(target, context) {
    console.log("printing the context:", context);
    //@ts-ignore
    target.prototype.taskID = 45;
    //@ts-ignore
    target.prototype.getTaskID = () => {
        //@ts-ignore
        return this.taskID;
    };
}
//@ts-ignore
let Rocket = (() => {
    let _classDecorators = [CreateFieldsUsingConstructor, CreateFieldsUsingPrototype];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Rocket = _classThis = class {
        constructor(msg) {
            this.name = msg;
        }
    };
    __setFunctionName(_classThis, "Rocket");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Rocket = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Rocket = _classThis;
})();
;
const rocket = new Rocket("rocket");
console.log(rocket);
//@ts-ignore
console.log(rocket.taskID);
//@ts-ignore
console.log(`taskID is : ${rocket.getTaskID()}`);
//@ts-ignore
console.log(rocket.getFuelCapacity());
