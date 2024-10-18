
const doSomething = (target:typeof  Example, context:ClassDecoratorContext): typeof Example=> {
    if(context.kind == "class") {
        return class extends target {
            name: string = "example";
            rollno: number = 123;
            constructor() {
                super();
                this.name = "aryan-tapre"
                this.rollno = 1;
            }
        }
    }

}
@doSomething
class Example {
    public date:number;
    public name:string = "demo";
    constructor() {
        this.date = Date.now();
    }

    public   getDetails(): void {
        //@ts-ignore
        console.log(this.name + " " + this.rollno + " " + this.date);
    }
}

const example:Example = new Example();
//@ts-ignore
console.log(example.name);
//@ts-ignore
console.log(example.rollno);

console.log(example.date);

example.getDetails();