import {Validaion} from './one'
/// <reference path = "one.ts"/>


class Example implements Validaion.StringValidator {
    isAcceptable(s: string): boolean {
        return true;
    }
}





