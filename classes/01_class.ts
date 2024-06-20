//TODO: --strictPropertyInitialization
class Point {
    x!:number;
    constructor(){
        this.x = 0;
    }
}


//TODO: readonly

//readonly- cannot update/reassign readonly property outside the constructor!
class Greater {
    readonly name:string = "hello world";
    constructor() {
        this.name = "change";
        this.name = "change2";

    }

    // update(){
    //     this.name = "change 1";
    // }
}

// TODO: super();
class Base {
    x:number = 0;
}

class Derived extends Base {
    constructor() {
         super();
         console.log(this.x);
         
    }
}
let d : Derived = new Derived();


//TODO: this

let y:string = "global";
class X {
     y:string = "hello";
     
     getY() {
        console.log(this.y); // access y as X.y
        console.log(y);// access global y
     }
}

//TODO: getters and setters

class Course {
    private name:string;
    private price: number;

    constructor(name:string, price:number) {
        this.name = name;
        this.price = price;
    }

    public set setTitle(title:string) {
        this.name = title;
    }

    public get getTitle(): string {
        return this.name;
    }

    public set setPrice(price:number) {
        this.price = price;
    }

    public get getPrice(): number {
        return this.price
    }
}

const c:Course = new Course("backend",399);
console.log(c.getTitle);



// TODO: implements clause

interface CarStructure {
    name:string;
    brand:string;
    price:number;
    fuelType: "petrol" | "diesel" | "CNG" | "electric";

    setMode():boolean
}

class Xuv700 implements CarStructure {
    name:string;
    brand:string;
    price:number;
    fuelType: "petrol" | "diesel" | "CNG" | "electric";

    constructor(name:string, brand:string, price:number, fuelType:"petrol" | "diesel" | "CNG" | "electric") {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.fuelType = fuelType
    }

    setMode(): boolean {
        return true;
    }
}

interface A {
    x:number;
    y?:number;
}
class C implements A {
    x: number;
    constructor(x: number) {this.x = x;}
}


//TODO: extends clauses

class Animal {
    name:string = "hello";
    constructor() {
        console.log("parent constructor called");
        
    }
   
    bark():void {
        console.log("animal barking....");
    }
}

class Dog extends Animal {
    name: string;
    constructor(name:string) {
        console.log("child constructor called");
        
        super();
        this.name = name;
    }

    bark() {
        console.log("Dog is barking...");
    }
}

const dog = new Dog("kalu");
dog.bark();


export {}