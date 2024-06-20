//------------------------------class decorator------------------------------------------------



function withFuel(target:typeof Rocket, context: ClassDecoratorContext) : typeof Rocket {
    return class extends target {
        fuel : number = 50;
        isEmpty() : boolean {
            return this.fuel == 0;
        }
    }
}

const addDate = <T extends {new(...args:any[]):{}}>(target:T, context: ClassDecoratorContext) : T => {
    return class extends target {
        private newDate:Date;
        constructor(...args:any[]) {
            super(...args);
            //@ts-ignore
            this.newDate = new Date().toISOString();
            console.log("newDate added Successfully!.");
        }
    }
}



@withFuel
@addDate
class Rocket {}

const rocket : Rocket = new Rocket();
//@ts-ignore
console.log(rocket.isEmpty());
//@ts-ignore
console.log(rocket.fuel);
//@ts-ignore
console.log(rocket.newDate);



//-----------------------------------------method decorator----------------------------------------------

function checkRollno<T extends {new(...args:any[]):{}}>(constructor : T):void {
    //@ts-ignore
    return class  extends constructor,Error {
        constructor(...args:any[]) {
            super(args);
            if(String(args[0]).length < 5) {
                throw new Error("rollno must be atleast");
                
            }
        }
    }
}


// function PassValidator(pass:boolean) { // older syntax
//     return function(target:Function, propertyName:string, descriptor:PropertyDescriptor) {
        
        
//         const ori = descriptor.value;
//         descriptor.value = function(...args:any[]) {
//             if(pass === false) {
//                 throw new Error("can not update your name");
//             }
//             return ori.apply(this,args);
//         }
//         return descriptor;
//     }
// }

function PassValidator(pass:boolean) {
    return function(target:Function, context:ClassMethodDecoratorContext) {
        if(pass == false) {
            throw new Error("cannot update name, you haven't cleared the exam!");
        }
    }
}


//@ts-ignore
@checkRollno
class Student {
    private _rollno:number;
    private _name:string;
    private _isPass:boolean;

    constructor(rollno:number, name:string,pass:boolean) {
        this._rollno = rollno;
        this._name = name;
        this._isPass = pass;
    }

    
    //@ts-ignore
    @PassValidator(this._isPass)
    public updateName(name:string) {
        this._name = name;
    }

    public get name():string {
        return this._name;
    }

}

const aryan:Student = new Student(23355,"aryan",true);
aryan.updateName("harshad");
console.log(aryan.name);


export {}
