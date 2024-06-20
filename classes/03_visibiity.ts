class Base {
    //@ts-ignore
    public name:string;
    //@ts-ignore
    private age:number;
    //@ts-ignore
    protected rollno:number;

    public getName() : string {
        return this.name;
    }
}

class Derived extends Base {
   protected rollno = 21;

    constructor(value:number) {
        super();
        this.rollno = value;
    }

   public getRollNo() : number {
    return this.rollno;
   }
}

const base : Base = new Base();
const derived: Derived = new Derived(210160107518);
console.log(derived.getRollNo());




export{}