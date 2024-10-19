import {Validaion} from './one'
/// <reference path = "one.ts"/>

//@ts-ignore
class Example implements Validaion.StringValidator {
    isAcceptable(s: string): boolean {
        return true;
    }
}





