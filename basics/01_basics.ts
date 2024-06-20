let namee:string;
namee = "aryan tapre";
console.log(namee);

//TODO: defining structure for object using interface..
interface User {
    name: string;
    age: number;
    roll:unknown
}

const user: User = {
    name:"aryan",
    age: 21,
    roll:21
}
console.log(user);


//@ts-ignore
const getUserData = (data:unknown):never => {
    console.log(typeof data);
    console.log(typeof data as string)
}
getUserData(1234);


interface FacebookUser {
    displayName: string;
    phoneNumber: number;
    email: string;
    createdAt:Date
}

class FbUser {
    displayName:string;
    phoneNumber: number;
    email: string;
    createdAt: string;
    constructor(displayName:string,phoneNumber:number,email:string,createdAt:Date) {
        this.displayName = displayName;
        this.phoneNumber = phoneNumber;
        this.email = email
        const today = new Date(Date.now());
        this.createdAt = today.toLocaleString();
        console.log(this.createdAt);
    }
}
const aryan = new FbUser("aryan sanjay tapre",12356,"taoer@gmail.com",new Date(Date.now()));

type windowStates = "open" | "close" | "restore down" | "minimized";
const winStat: windowStates = "open" ;
console.log(winStat);

type rollno = Array<number> | Array<string>;
const data : rollno = [12,12,21];
console.log(data);


// checking interface and type for shaping the object!.
interface Animal {
    name:string;
}


interface Rabbit extends Animal {
    leg:number;
}

const rabbit:Rabbit = {
    name:"hello",
    leg:4
}
console.log("rabbit is here:",rabbit);

type lex = "open";

export {}