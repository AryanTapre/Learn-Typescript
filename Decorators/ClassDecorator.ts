function PrintDecorator(target:Function, context: ClassDecoratorContext) {
    console.log("target : ",target);
    console.log("Context:",context);

    //@ts-ignore
    context.addInitializer(() => {
        console.log(target.name);
    })
}

function withEmployeeDateOnPrototype(target:Function, context: ClassDecoratorContext) {
    target.prototype.employeeDate = new Date().toISOString();
    console.log("decorator => ",target);
    console.log("context=>",context);
}

//FIXME: Adding data through constructor.
const withEmployeeDate = <T extends {new(...args:any[]): {}}>(BaseClass:T,context:ClassDecoratorContext) => {
    return class extends BaseClass {

                private dateOfEmployee: unknown;
                constructor(...args:any[]) {
                    super(...args);
                    this.dateOfEmployee = new Date().toISOString();
                    console.log("Added new property using constructor function :",BaseClass.name);
            
                }
    }
}

//@PrintDecorator
//@ts-ignore
@withEmployeeDateOnPrototype
//@ts-ignore
@withEmployeeDate
class Manager {
    
    private project:string;
    private task : number;
    
    constructor(project:string, task:number) {
        this.project = project;
        this.task = task;
        
        console.log("instance of Manager class reverse Heap Memory!.");
    }
}

const manager : Manager = new Manager("store",12);
console.log(manager);


//----------------------------Another Example...............................


function CreateFieldsUsingConstructor (target: typeof Rocket, context : ClassDecoratorContext) {
    return class extends target {
        fuelCapacity:number = 35;
        getFuelCapacity() : number {
            return this.fuelCapacity;
        }
    }
}

function CreateFieldsUsingPrototype(target: typeof Rocket, context: ClassDecoratorContext) {
    console.log("printing the context:",context);
    
    //@ts-ignore
    target.prototype.taskID = 45;
    //@ts-ignore
    target.prototype.getTaskID = () : number => {
        //@ts-ignore
        return this.taskID;
    }
}

//@ts-ignore
@CreateFieldsUsingConstructor
//@ts-ignore
@CreateFieldsUsingPrototype
class Rocket {
    public name: string;
    constructor(msg: string) {
        this.name = msg;
    }
};


const rocket = new Rocket("rocket");
console.log(rocket);
//@ts-ignore
console.log(rocket.taskID);
//@ts-ignore
console.log(`taskID is : ${rocket.getTaskID()}`);

//@ts-ignore
console.log(rocket.getFuelCapacity());

export {};