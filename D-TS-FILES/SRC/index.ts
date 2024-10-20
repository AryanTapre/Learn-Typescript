import * as T from './types'

const input:T.MyCodeInput = {
    
    something:"hello",
    greet(name:string):string {
        return "hello" + name;
    }
}

console.log(input.greet("Aryan"));
