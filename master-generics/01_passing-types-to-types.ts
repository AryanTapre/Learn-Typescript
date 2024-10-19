//TODO: You pass the types to other types

type MyGenericType<T> = {
    data: T;
}

type example = MyGenericType<{firstName:  string; lastName:   string;}>;
//    ^?

console.log(example);



export {};