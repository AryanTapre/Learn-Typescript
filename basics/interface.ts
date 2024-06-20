interface Point {
    new(x:number,y:number):Point;
}

class Point implements Point {
    public x:number;
    public y:number;

    constructor(x:number,y:number) {
        this.x = x;
        this.y = y;
    }
}

const p1:Point = new Point(1,2);
console.log(typeof p1);

console.log(p1.x);
console.log(p1.y);





export{}
