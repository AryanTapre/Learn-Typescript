// TODO: class decorator

const doSomething = <Type extends {new(...args:any[]):{}}>(target:Type, context:ClassDecoratorContext)=> {
    if(context.kind == "class") {
        return class extends target {
            name: string = "example";
            rollno: number = 123;
            constructor(...args:any[]) {
                super(args);
                this.name = "aryan-tapre"
                this.rollno = 1;
            }
        }
    }
}

//TODO: add specific task here!.
function doSomethingAnother () {
    console.log("do-someting")
}
@doSomething
class Example {
    public date:number;
    public name:string = "demo";
    public age:number;
    constructor(age:number) {
        this.date = Date.now();
        this.age = age;
    }

    public   getDetails(): void {
        //@ts-ignore
        console.log(this.name + " " + this.rollno + " " + this.date + " " + this.age);
    }
}

const example:Example = new Example(22);
//@ts-ignore
console.log(example.name);
//@ts-ignore
console.log(example.rollno);
console.log(example.date);
example.getDetails();




// TODO: method decorator
// TODO: Requirements: create a class named 'RTO' that issues driving license according to checking of whether candidate has (Learners's License -< passes the DL test) ? log: issuing you a DL : return an error

//@ts-ignore
function issueDL<Type extends {(...args:any[])}>(target:Function, context:ClassMethodDecoratorContext) {

    return function (...args:any) {
        console.log("before changing anythng => ");
        //@ts-ignore
        const instance = this as Type;
        const applicationNo = args[0];

        //@ts-ignore
        if(!(instance?.isDLTestPass && instance?.isLCPresent)) {
            console.error("Sorry RTO can't issue you a Driving License...");
        } else {
            const newMethod = target.apply(instance, args);
            console.log("after changing anything");
            return newMethod;
        }
    }
}
class RTO {
    private isDLTestPass: boolean;
    private isLCPresent : boolean;

    constructor(isDLTestPass: boolean, isLCPresent:boolean) {
        this.isDLTestPass = isDLTestPass;
        this.isLCPresent = isLCPresent;
    }
    @issueDL
    public issueDL (applicationNo:number) {
        console.log("issued your DL, thank you for visiting");
    }
}

const rto:RTO = new RTO(true, true);
rto.issueDL(1234);



// another example
interface product {
    name:string;
    brand:string;
    price:number;
}

function role(personRole:string) {
    return function <Type>(target:Function, context:ClassMethodDecoratorContext<Type>) {
        return function (...args:any) {
            //@ts-ignore
                const instance = this as Type;
                console.log("The instance is => " + JSON.stringify(instance));
                if(personRole != "admin") {
                    console.error("You are not permissible to push products, as you are a "+personRole);
                }else {
                    console.log("You are admin, item pushed!.");
                    return target.apply(instance, args);
                }
        }
    }
}

class Product {
    public  products:product[] = [];

    @role("staff")
    public addProducts(items:product) {
        this.products.push(items);
        this.products.forEach(e => console.log(e))
    }
}

const p:Product = new Product();
p.addProducts({name:"laptop",price:690000,brand:"HP"});


// TODO: Field decorators

function addOne<T>(target:undefined, context:ClassFieldDecoratorContext<T,number>) {
    return function (this:T, value:number) {
        console.log("add one: "+value);
        return value + 1; 
    }
}

class Demo {
    //@ts-ignore  
    @addOne
    data = 0;
}

const demo:Demo = new Demo();
console.log(demo.data);

function addTwo<Type>(target: undefined, context: ClassFieldDecoratorContext<Type, number>) {
    return function(this:Type, value:number) {
        console.log("add two: "+value);
        return value + 2;
    }
}