class Worker1 {
  doWork() {
    console.log("Work is done!");
  }
}

class Manager {
  worker: Worker1;

  constructor(worker: Worker1) {
    this.worker = worker;
  }

  manageWork() {
    console.log("Manager delegating work...");
    this.worker.doWork();
  }
}

const worker = new Worker1();
const manager = new Manager(worker);
manager.manageWork(); // Выводит: Manager delegating work... Work is done!
