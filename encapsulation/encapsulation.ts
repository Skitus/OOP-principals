/*
    Encapsulation in object-oriented programming is the principle of hiding the internal state and behavior 
    of an object from the outside world. This is achieved by restricting access to the object's data only through 
    its methods, which allows you to control changes to these data and simplifies the management of dependencies in the code.
    In TypeScript, encapsulation is implemented using public, private, and protected access modifiers, as well as a TypeScript innovation - the readonly modifie
*/

class Animal {
  public name: string;
  private age: number;
  protected type: string;
  readonly birthYear: number;

  constructor(name: string, age: number, type: string, birthYear: number) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.birthYear = birthYear;
  }

  public describe(): void {
    console.log(`${this.name} is a ${this.age}-year-old ${this.type}.`);
  }

  private calculateAgeNextYear(): number {
    return this.age + 1;
  }

  protected animalSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Lion extends Animal {
  constructor(name: string, age: number, birthYear: number) {
    super(name, age, "lion", birthYear);
  }

  public roar(): void {
    console.log(`${this.name} roars.`);
    this.animalSound();
  }
}

const simba = new Lion("Simba", 3, 2019);
simba.describe();
simba.roar();
console.log(`Birth year of ${simba.name} is ${simba.birthYear}.`);
