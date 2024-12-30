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
