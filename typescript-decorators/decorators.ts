// TODO: class decorator
import {log} from "node:util";
import {FinishedOptions} from "node:stream";

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

function issueDL<Type extends {(...args:any[])}>(target:Function, context:ClassMethodDecoratorContext) {
    return function (...args:any) {
        const instance = this as Type;
        const applicationNo = args[0];

        //@ts-ignore
        if(!(instance?.isDLTestPass && instance?.isLCPresent)) {
            console.error("Sorry RTO can't issue you a Driving License...");
        } else {
            return target.apply(instance, args);
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

const rto:RTO = new RTO(false, true);
rto.issueDL(1234);