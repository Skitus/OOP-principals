/*
  Polymorphism
  Polymorphism is the ability of objects of different classes to have different implementations 
  of methods with the same names. This allows you to work with objects of different classes using the same interface, 
  which simplifies software development and support. In the context of OOP, polymorphism can manifest itself in two main forms:
  Run-time polymorphism (dynamic polymorphism): is achieved by re-defining methods in subclasses.
  Compile-time polymorphism (static polymorphism): is achieved by overloading methods within the class.


  Polymorphism is a key concept of object-oriented programming that allows objects of different classes to respond 
  to the same messages (method calls) in different ways. There are two main types of polymorphism: dynamic (runtime polymorphism) 
  and static (compile-time polymorphism). Each of them has its own advantages and disadvantages, and the choice between them depends on the specific task.

Dynamic polymorphism
Advantages:

Flexibility: Allows objects of different classes that inherit from the same base class or interface to have 
their own unique implementation of methods. This makes it easy to add new types without changing the existing code that uses those objects.
Intuitive: Easy to understand and use, especially when working with complex class hierarchies.
Runtime support: With the virtual method mechanism, dynamic binding is supported, allowing decisions about method selection to be made at runtime.
Disadvantages:

Performance: Dynamic polymorphism can affect performance because it requires additional time to determine the right method at runtime.
Debugging complexity: Determining which method will be called may not be obvious, making it difficult to debug the program.
Static polymorphism
Advantages:

Performance: Method overloading and function templates (in languages that support templates, such as C++) are handled at compile 
time, which improves performance because there is no need to dynamically define the method to be called.
Clarity: Overloaded methods make it clear which operations are supported by the class and what arguments they can accept.
Disadvantages:

Limitation: Method overloading is limited to a single class and does not support scenarios where you need to change behavior based on a 
subclass without changing the class itself.
Code complexity: Using a large number of overloaded methods can make code harder to understand and maintain.
When to use
Dynamic polymorphism is ideal for situations where you want objects of different classes to be able to be treated uniformly but behave differently. 
It is especially useful in designing extensible systems where new types can be added without changing the existing code that uses them.

Static polymorphism is best used when you know all the uses of your code in advance and want to maximize performance. It is also suitable for creating 
APIs where the types and operations that can be performed on those types are clearly defined.

The choice between static and dynamic polymorphism depends on performance requirements, system flexibility, and code design and maintenance preferences. 
In some cases, it may be appropriate to use both approaches in the same project, choosing the most appropriate one depending on the specific task at hand.
*/

/* Dyncamic Pholumorphism*/

class NewAnimal {
  constructor(protected name: string) {}

  speak(): void {
    console.log(`${this.name} makes some noise.`);
  }
}

class NewLion extends NewAnimal {
  speak(): void {
    console.log(`${this.name} roars.`);
  }
}

class Bird extends NewAnimal {
  speak(): void {
    console.log(`${this.name} chirps.`);
  }
}

const animals: NewAnimal[] = [
  new NewAnimal("Generic Animal"),
  new NewLion("Simba"),
  new Bird("Tweety"),
];

animals.forEach((animal) => animal.speak());
// Outpu:
// Generic Animal makes some noise.
// Simba roars.
// Tweety chirps.
