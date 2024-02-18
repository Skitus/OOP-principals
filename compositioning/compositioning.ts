/*
    Composition
    Composition is a design principle in which a class consists of one or more objects of other classes as fields, 
    thereby achieving more complex behavior through a combination of features and behaviors of those objects. This
    approach follows "has" or "consists of" logic, as opposed to inheritance, which uses "is a type" logic.
*/

class Engine {
  start() {
    console.log("Engine starts");
  }
}

class Car2 {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  start() {
    console.log("Car starts");
    this.engine.start();
  }
}

const engine = new Engine();
const car = new Car2(engine);
car.start();
