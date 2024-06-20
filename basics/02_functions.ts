// Source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
const addTwoNumbers = (a:number, b?:number):number => {
    if(b!= undefined) {
        return a+b;
    }
    return a;
}
const res : number = addTwoNumbers(15);
console.log(res);

const connectDB = async () => {
    // @ts-ignore
    return new Promise((resolve:any, reject:any) => {
        resolve("hello from promise");
    })
}



// call signatures
interface Info {
    getName():string;
    greet:string
}

const Car:Info = {
    getName(): string {
        return "aryan";
    },
    greet:"hello from aryan"
};

console.log(Car.getName());
console.log(Car.greet);


function  compute(prefix:number[]):any {
    return prefix?.map((response) => {
        console.log("inside map function..");
        return response;
    });

    
}





class User {
    private name:string;
    private email:string;

    constructor(name:string,email:string) {
        this.name = name;
        this.email = email;
    }

    public get getName():string {
        return this.name;
    } 
}


//TODO: type and interface using callable functions..

// interface USeMe {
//     useMe(name:string):string
// }

type useMe = (name:string) => string;

const callMe:useMe = (name:string) => {
    return name;
}
console.log(callMe("aryan"));


interface Vehicle  {
    description:string;
    isInsurance():boolean
}

function info(d:Vehicle) {
    console.log("description is :",d.description);
    console.log("insurane:",d.isInsurance());
        
}

const d:Vehicle = {
    description:"honda",
    isInsurance:() => {
        return true;
    }
}

info(d);

// TODO: Generics

const subSet = <type extends {slice:unknown}>(str:type[],start:number,end?:number): type[] | undefined => {
    return str.slice(start,end);
}

console.log(subSet(["1","2","3","4","5"],2,3));


function combine<type>(arr1:type[],arr2:type[]):type[] {
    return arr1.concat(arr2);
}


console.log(combine<number|string>(["1","2"],["a","b"]));

function firstElement<type>(str:type[]) : type {
    return str[0];
}

console.log( typeof firstElement([1,2,3]));



