var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var p1 = new Point(1, 2);
console.log(typeof p1);
console.log(p1.x);
console.log(p1.y);


Object.Array.prototype = function greet() {
    console.log("hello from other side..");
}

const x = [1,2].greet();