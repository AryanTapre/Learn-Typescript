//TODO: readOnly properties

interface Person {
    name:string;
    age:number;
}

interface ReadonlyPerson {
    readonly name:string;
    readonly age:number;
}

let writiabelPerson:Person = {
    name: "aryan tapre",
    age:21,
}

let readOnlyPerson:ReadonlyPerson = writiabelPerson;

readOnlyPerson  = {
    name:"hello",
    age:23,
}

console.log(readOnlyPerson.name);
console.log(readOnlyPerson.age);


// function updateUser(user:ReadonlyPerson,name:string,age:number){
//     user.name = name; // can't update due to readOnly property
//      // can't update due to readOnly property
//     user.age = age;
// }   



//TODO: index Signature..
interface UserSign {
    [props:string|number]: number | string | boolean;
}

const aryan:UserSign = {
    name:"aryan",
    age:21,
    status:false,
    10:"go"
}


// TODO: tuples..
type rollPair = [number,string];

const dataX:rollPair = [210160107518,"Aryan Sanjay Tapre"];



function doSomething<T>(one:T,two:T) : void {
    console.log(one);
    console.log(two);
}

doSomething<string|number>("aryan",12);
