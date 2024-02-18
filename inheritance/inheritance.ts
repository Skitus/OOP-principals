/*
  Inheritance in object-oriented programming (OOP) allows you to create a new class based on an existing class. 
  Inheritance provides a mechanism for reusing code and simplifying its management, allowing the child class to inherit 
  the properties and methods of the parent class, as well as add new ones or modify inherited ones.
  In TypeScript, as in many other programming languages, the extends keyword is used to create a class that inherits from a parent class.
 */

class Vehicle {
  constructor(protected brand: string, protected model: string) {}

  public start(): void {
    console.log(`The ${this.brand} ${this.model} is starting.`);
  }
}

class Car extends Vehicle {
  constructor(brand: string, model: string, private numberOfDoors: number) {
    super(brand, model); // this function allow to call constructor from parent class
  }

  public start(): void {
    super.start();
    console.log(
      `The ${this.brand} ${this.model} with ${this.numberOfDoors} doors is ready to go!`
    );
  }
}

class Motorcycle extends Vehicle {
  constructor(brand: string, model: string, private hasSidecar: boolean) {
    super(brand, model);
  }

  public start(): void {
    super.start();
    if (this.hasSidecar) {
      console.log(
        `The ${this.brand} ${this.model} with a sidecar is ready to ride!`
      );
    } else {
      console.log(`The ${this.brand} ${this.model} is ready to ride!`);
    }
  }
}

const myCar = new Car("Toyota", "Corolla", 4);
myCar.start();

const myMotorcycle = new Motorcycle("Harley-Davidson", "Street 750", false);
myMotorcycle.start();
