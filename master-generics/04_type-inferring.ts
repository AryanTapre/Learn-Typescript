// You don't need to always pass Types to generic function!.

const addIdToObject = <TObj>(obj:TObj) => {
    return {
        ...obj,
        id:"123"
    }
}

const result = addIdToObject({firstName:"aryan",lastName:"tapre"});
console.log(result);





export {};

