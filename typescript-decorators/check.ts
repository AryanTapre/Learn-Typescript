// Import required decorator types
import 'reflect-metadata';

function LogParams(
  target: Object,
  context: ClassMethodDecoratorContext
) {


  // Wrapping the method
  return function (this: any, ...args: any[]) {
    console.log(`Method ${String(context.name)} called with parameters:`, args);
    // Call the original method
    const result = context.originalMethod!.apply(this, args);
    // Optionally log the return value
    console.log(`Method ${String(context.name)} returned:`, result);
    return result;
  };
}

class Example {
  // Applying the method decorator
  @LogParams
  someMethod(param1: string, param2: number) {
    console.log("Executing someMethod...");
    return param1 + param2;
  }
}

// Test the decorated method
const obj = new Example();
obj.someMethod('Hello', 42);
