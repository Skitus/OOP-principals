/*
 Static polymorphism, or compile-time polymorphism, in object-oriented programming is implemented
 through the mechanism of method overloading. Overloading methods allows you to define several methods in a 
 class with the same name, but different parameter lists (different number of parameters or their types). Which of 
 the methods will be called is determined at the compilation stage based on the arguments passed when the method is called.
 In TypeScript, which is a strictly typed programming language, method overloading allows you to create more flexible and expressive 
 interfaces and classes by adapting the behavior of methods to different situations.


 Polymorphism is a key concept of object-oriented programming that allows objects of different classes to respond to the same messages 
 (method calls) in different ways. There are two main types of polymorphism: dynamic (runtime polymorphism) and static (compile-time polymorphism). Each of them has its own advantages and disadvantages, and the choice between them depends on the specific task.

Dynamic polymorphism
Advantages:

Flexibility: Allows objects of different classes that inherit from the same base class or interface to have their own unique implementation
 of methods. This makes it easy to add new types without changing the existing code that uses those objects.
Intuitive: Easy to understand and use, especially when working with complex class hierarchies.
Runtime support: With the virtual method mechanism, dynamic binding is supported, allowing decisions about method selection to be made at runtime.
Disadvantages:

Performance: Dynamic polymorphism can affect performance because it requires additional time to determine the right method at runtime.
Debugging complexity: Determining which method will be called may not be obvious, making it difficult to debug the program.
Static polymorphism
Advantages:

Performance: Method overloading and function templates (in languages that support templates, such as C++) are handled at compile time, which 
improves performance because there is no need to dynamically define the method to be called.
Clarity: Overloaded methods make it clear which operations are supported by the class and what arguments they can accept.
Disadvantages:

Limitation: Method overloading is limited to a single class and does not support scenarios where you need to change behavior based on a
 subclass without changing the class itself.
Code complexity: Using a large number of overloaded methods can make code harder to understand and maintain.
When to use
Dynamic polymorphism is ideal for situations where you want objects of different classes to be able to be treated uniformly but behave differently.
 It is especially useful in designing extensible systems where new types can be added without changing the existing code that uses them.

Static polymorphism is best used when you know all the uses of your code in advance and want to maximize performance. It is also suitable for 
creating APIs where the types and operations that can be performed on those types are clearly defined.

The choice between static and dynamic polymorphism depends on performance requirements, system flexibility, and code design and maintenance preferences. 
In some cases, it may be appropriate to use both approaches in the same project, choosing the most appropriate one depending on the specific task at hand.
*/

/* Static Pholumorphism*/

class Calculator {
  add(a: number, b: number): number;
  add(numbers: number[]): number;
  add(a: string, b: string): number;

  add(a: number | number[] | string, b?: number | string): number {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else if (Array.isArray(a)) {
      return a.reduce((acc, current) => acc + current, 0);
    } else if (typeof a === "string" && typeof b === "string") {
      return parseFloat(a) + parseFloat(b);
    }

    throw new Error("Invalid arguments");
  }
}

const calc = new Calculator();

console.log(calc.add(2, 3));
console.log(calc.add([1, 2, 3, 4, 5]));
console.log(calc.add("4.2", "5.8"));
