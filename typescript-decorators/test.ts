// import {performance} from 'perf_hooks'

import { log } from "console";

// function measure(target:Function, context:ClassMethodDecoratorContext) {
//     if(context.kind == "method") {
//         return function(...args:any[]) {
//             const start = performance.now();
//             const end = performance.now();
//             const result = target.apply(this,args);
//             console.log("execution time is => ",end-start);
//             return result;
//         }
//     }
// }

// class Example {
//     @measure
//     public launch() {
//         console.warn("hey");
//     }
// }

// const e : Example = new Example();
// e.launch();

//------------------------------------------------------->

// const fill = (newVal:number) => {
//     return (target:undefined, context:ClassFieldDecoratorContext) => {
//         if(context.kind == "field") {
//             return (initVal:number) : number => {
//                 console.log(`initial value is: ${initVal}`);
                
//                 return initVal+newVal;  
//             }
//         }
//     }
// }


// class Example {
//     @fill(20)
//     fuel:number = 50;
// }

// const e:Example = new Example();
// console.log(e.fuel);

//######################################################--------#######################################


// function minimumFuel(level:number) {
//     return function (target:Function, context:ClassMethodDecoratorContext) {
//         if(context.kind == "method") {
//             return function (...args:any[]) {
//                 if(this.fuel > level) {
//                     return target.apply(this,args);
//                 }
//                 else {
//                     console.log(`Not enough fuel. Requried : ${level}, got : ${this.fuel}`);
                    
//                 }
//             }
//         }
//     }
// }

// class Rocket {
//     fuel : number = 76;

//     @minimumFuel(75)
//     launch() {
//         console.log("hello launch!");
        
//     }
// }

// const rocket = new Rocket();
// rocket.launch();

//###########################################################################################

// property decorator

function AddData<T,V extends number[]>(target:undefined, context:ClassFieldDecoratorContext<T,V>) {
    return function(d:V) {
        d.push(10);
        return d;
    }
}

function Hell(arg:number) {
    return function(target:Function, context: ClassMethodDecoratorContext) {
        return function (...args:any[]) {  
            this.x = arg;
             target.apply(this,args);
        }
    }
}


class Rocket {
    //@ts-ignore
    @AddData
    tank:number[] = [];
    private x:number = 100;

    @Hell(23)
    public hello() {
        console.log("say hello");
        console.log(this.x);
    
    }
}

const roc = new Rocket();
console.log(roc.tank);
roc.hello();

