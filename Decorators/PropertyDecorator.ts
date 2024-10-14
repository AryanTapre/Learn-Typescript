interface Task  {
    name:string;
    level: "low"|"medium"|"hard";
}

const withComplicatedTask = <T,V extends Task[]>(target: undefined, context: ClassFieldDecoratorContext<T,V>) => {      
        return function(args: V) {
           
            args.push({
                name:"PRATA SPOJ",
                level: "hard"
            })
            return args;
        }
}

class Manager {

    //@ts-ignore
    @withComplicatedTask
    tasks: Task[] = [];
}

const manager = new Manager();
console.log(manager);



//-----------------Another example......................

//FIXME: newer Syntax not working!.
// const PasswordValidatorLength = (limit : number) => {
//     return <T,V extends string>(target:undefined, context:ClassFieldDecoratorContext<T,V>) => {
//         return function (this:T,args:V) {
//             let value : string;

//             Object.defineProperty(this,args,{
//                 get() {
//                     return value;
//                 },
//                 set(newVal: string) {
//                     if(newVal.length < limit) {
//                         console.error("password must be atleast of 8 characters!.")
//                     }
//                     value = newVal;
                   
//                 },
//             })
//         }
//     }
    
// }

const PasswordValidatorLength = (limit: number) => {

    //FIXME: older syntax of property decorator1.
    return function (target:object, propertyKey:string) {
        let value: string;
        Object.defineProperty(target,propertyKey,{
            get() {
                    return value;
            },
            set(newVal:string) {
                if(newVal.length < limit) {
                    console.error("password must be atleast of 8 characters!.");
                } else {
                    value = newVal;
                }
            },
        })
    }
}

class User {
    private username:string;

    //@ts-ignore
    @PasswordValidatorLength(8)
    private password: string;

    constructor(username:string, password:string) {
        this.username = username;
        this.password = password;
    }
    
}   


const user : User = new User("_aryanTapre","12345678");
//@ts-ignore
console.log(user.password);


export {};