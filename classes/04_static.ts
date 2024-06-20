class Foo {
    public static good : string;
    public static updateGood(update: unknown) {
        Foo.good = update as string; 
    }
}


class Gen<type> {
    data:type;
    constructor(data:type) {
        this.data = data;
    }
}

const gen : Gen<string> = new Gen<string>("hello");

console.log(Foo.updateGood("hello"));
console.log(Foo.good);

// prevents auto exports
export{}