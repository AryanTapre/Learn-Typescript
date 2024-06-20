
function LogFuel (target:Function, context: ClassDecoratorContext)  {
  const originAddFuel = target.prototype.addFuel;
  target.prototype.addFuel = (qty:number) => {
    //@ts-ignore
    console.log(`before Fuel status: ${this.fuel}`);
    //@ts-ignore
    originAddFuel.apply(this)
    //@ts-ignore
    console.log(`After Fuel status: ${this.fuel}`);
  } 
}

//@ts-ignore
@LogFuel
class Rocket {
  private fuel:number;
  constructor(fuel:number) {
    this.fuel = fuel;
  }

  public addFuel(quantity:number) {
    this.fuel += quantity;
  }
}

