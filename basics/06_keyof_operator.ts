// understanding uses cases of keyof operator
// only used with 1. objects 2. interfaces
// FIXME: used to extract properties of object and interfaces..

//1. extracting properties name from object/interface
interface User1 {
    name : string;
    age : number;
    isMarried: boolean;
}

const userHero : User1 = {
    name : "aryan",
    age : 21,
    isMarried : false
}

type keys = keyof User1;
const data1: keys = "age";

//2. generic and mapped functions

function getvalues<type extends object>(obj: type, key: keyof type) : type[keyof type] {
    return obj[key];   
}

console.log(getvalues(userHero,"name"));

export {}