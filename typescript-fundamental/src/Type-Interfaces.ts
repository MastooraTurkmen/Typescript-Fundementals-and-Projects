interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  print(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 123,
  title: "Deep Work",
  author: "cal newport",
  genre: "self-help",
  print() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${message} ${this.title}`;
  },

  // first option
  // printSomething(someValue) {
  //   return someValue;
  // },

  // second option
  // printSomething: function (someValue) {
  //   return someValue;
  // },

  // third option
  printSomething: (someValue) => {
    return someValue;
  },
};

// deepWork.isbn = 456; // Error: Cannot assign to 'isbn' because it is a read-only property

deepWork.print();
const work = deepWork.printTitle("is awesome book");
console.log(work);

console.log(deepWork.printSomething(123));

// Challenge

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(increase: number): number;
}

const macBook: Computer = {
  id: 123,
  brand: "Apple",
  ram: 8,
  storage: 256,
  upgradeRam(increase: number): number {
    return (this.ram += increase);
  },
};

const laptop: Computer = {
  id: 33,
  brand: "Dell",
  ram: 16,
  storage: 250,
  upgradeRam(increase) {
    return this.ram + increase;
  },
};

console.log(laptop);
console.log(macBook);

// Merge and Extend Interfaces

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "john",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: "jane",
  age: 24,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

console.log(employee.getDetails());

interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: "bob",
  age: 23,
  dogName: "buddy",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`;
  },
  managePeople() {
    console.log("I manage people");
  },
};

manager.managePeople();

// Challenges

interface Person1 {
  name: string;
}

interface DogOwner1 extends Person1 {
  dogName: string;
}

interface Manager1 extends Person1 {
  mangePeople(): void;
  delegateTasks(): void;
}

function getEmployee(): Person1 | DogOwner1 | Manager1 {
  let randomNumber = Math.random();

  if (randomNumber > 0.33) {
    return {
      name: "john",
    };
  } else if (randomNumber > 0.66) {
    return {
      name: "jane",
      dogName: "buddy",
    };
  } else {
    return {
      name: "bob",
      mangePeople() {
        console.log("I manage people");
      },
      delegateTasks() {
        console.log("I delegate tasks");
      },
    };
  }
}

const employee1: Person1 | DogOwner1 | Manager1 = getEmployee();
console.log(employee1);

// Type Predicate

function isManager(obj: Person1 | DogOwner1 | Manager1): obj is Manager1 {
  // return typeof obj === "object";
  return "managePeople" in obj;
}

console.log(isManager(employee1));

if (isManager(employee1)) {
  employee1.delegateTasks();
}
