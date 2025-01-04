let array1: string[] = ["Apple", "Banana", "Mango"];
let array2: number[] = [2, 5, 4];
let array3: boolean[] = [true, false, true];

let arrays: Array<string> = ["Apple", "Banana", "Mango"];

// Type Generics - Type Constraints second example
type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: "Toyota",
  model: "Corolla",
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "shoes",
  price: 2.22,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "John",
  age: 25,
};

function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

printName(student);
printName(product);
// printName(car); // Error: Argument of type 'Car' is not assignable to parameter of type 'Student'.

// Generic - Default Type

interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};

const storeStrings: StoreData = {
  data: ["Apple", "Banana", 1],
};
