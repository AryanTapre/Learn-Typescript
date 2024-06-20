type Fish = {
    swim() : void;
};

type Bird = {
    fly() : void
};


const isFish = (pet: Fish | Bird): pet is Fish => {
    return (pet as Fish).swim != undefined;
}

function getFood(pet: Fish|Bird) {
    if(isFish(pet)) {
        console.log("Fish Food!.");
        pet
    } else {
        pet
        console.log("bird Food!.");
    }
}

const data:Fish = {
    swim:function() {
        console.log("hello from fish!.");
        
    }
}

getFood(data);

function consoleError(errMsg:string) : never {
    throw new Error(errMsg);  
}

const result = greet();
console.log("result will be:",result);


function greet(): void {
    console.log("hello ,Aryan");
}
