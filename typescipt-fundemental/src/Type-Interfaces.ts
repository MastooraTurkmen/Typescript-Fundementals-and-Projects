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
