// TODO: Understanding method Decorator in detail!.

interface Products {

    name:string;
    price:string;
    type:"laptop" | "mobile" | "dekstop computer" | "mouse" ;
}

//@ts-ignore
@AddFields
class Product {
    
    public products:Products[] = [];
    //@ts-ignore
    @Role("admin")
    public addProduct(val:Products) {
        this.products.push(val);
    }

}

const product : Product = new Product();
console.log(product);
product.addProduct({
    name: "hp victus",
    price : "68000",
    type: "laptop"
})

product.addProduct({
    name: "dell",
    price : "30000",
    type: "laptop"
})
console.log(product.products);

function Role(role:string) { // higher order function returning
    return function (target:Function, context: ClassMethodDecoratorContext) {
        if(role != "admin") {
            throw new Error("Access Denied only Admin User is permissible!.")
        } 
    }
}


function AddFields(target: typeof Product, context : ClassDecoratorContext) {
    return class extends target {
        private productName: string;
        private productPrice : string;
        constructor() {
            super();
            this.productName = "product";
            this.productPrice = "123";
        }
    }
}

export {};