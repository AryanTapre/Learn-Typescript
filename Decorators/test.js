var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LogFuel(target, context) {
    var _this = this;
    var originAddFuel = target.prototype.addFuel;
    target.prototype.addFuel = function (qty) {
        //@ts-ignore
        console.log("before Fuel status: ".concat(_this.fuel));
        //@ts-ignore
        originAddFuel.apply(_this);
        //@ts-ignore
        console.log("After Fuel status: ".concat(_this.fuel));
    };
}
//@ts-ignore
var Rocket = /** @class */ (function () {
    function Rocket(fuel) {
        this.fuel = fuel;
    }
    Rocket.prototype.addFuel = function (quantity) {
        this.fuel += quantity;
    };
    Rocket = __decorate([
        LogFuel
    ], Rocket);
    return Rocket;
}());
