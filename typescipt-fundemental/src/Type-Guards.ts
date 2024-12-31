type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.334 : true;

function checkValue(value: ValueType): void {
  if (typeof value === "string") {
    console.log(value.toLocaleLowerCase());
    return;
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2));
    return;
  }
  console.log(`boolean: ${value}`);
}

checkValue(value);

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//   if (animal.type === "dog") {
//     animal.bark();
//     return;
//   } else {
//     animal.meow();
//   }
// }

function makeSound(animal: Animal) {
  if ("bark" in animal) {
    animal.bark();
    return;
  } else {
    animal.meow();
  }
}

makeSound({ type: "dog", name: "dog", bark: () => console.log("bark") });

// Challenge Truthy and Falsy

function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log("no value");
  }
}

printLength("w");
printLength("");
printLength(null);
// printLength();
printLength(undefined);

// Type Guards - Type Instanceof

try {
  throw new Error("This is an error");
} catch (error) {
  if (error instanceof Error) {
    console.log(`Caught an Error object: ${error.message}`);
  } else {
    console.log(`Unknown Error`);
  }
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const randomYear = checkInput(`2020-03-30`);

console.log(year);
console.log(randomYear);

// Type Guards - Type Predicate

type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("Studying") }
    : { name: "mary", study: () => console.log("Logging in") };
};

const person = randomPerson();

console.log(person);

function isStudent(person: Person): person is Student {
  return (person as Student).study !== undefined;
}

if (isStudent(person)) {
  person.study();
} else {
  person.login();
}
