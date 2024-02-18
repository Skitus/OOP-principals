class Driver2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Car3 {
  driver: Driver2;

  constructor(driver: Driver2) {
    this.driver = driver;
  }

  displayDriverInfo() {
    console.log(`The driver of this car is ${this.driver.name}.`);
  }
}

const driver = new Driver2("John");
const car1 = new Car3(driver);
car1.displayDriverInfo();
