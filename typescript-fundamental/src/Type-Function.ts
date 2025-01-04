function sayHi(name: any) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

// -any
// - config
// - type

sayHi("john");
// sayHi(3)

function calculateDiscount(price: number): number {
  const hasDiscount = true;
  if (hasDiscount) {
    return price;
    // return "Discount applied";
  }
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

// Type Any Example

function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}

const result = addThree(3);
const someValue = result;

console.log(someValue);

// Challenge

const names: string[] = ["Barbara", "Keven", "Tracey"];

function functionName(name: string): boolean {
  return names.includes(name);
}

const result1 = functionName("Keven");

if (result1) {
  console.log(`Keven is in the list`);
} else {
  console.log(`Keven is not in the list`);
}

// Function Optional Parameters

function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount);

// Function Default Parameters

function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(1002);
console.log(scoreAfterPenalty, scoreWithoutPenalty);

// Function - Reset Parameters

function sum(message: string, ...rest: number[]): string {
  const doubled = rest.map((num) => num * 2);
  console.log(doubled);

  let total = rest.reduce((previous, current) => {
    return previous + current;
  }, 0);

  return `${message}${total}`;
}

let myResult = sum("The total is: ", 1, 2, 3, 4, 5);
console.log(myResult);

// Function - Void Keyword

function logMessage(message: string) {
  console.log(message);
}

logMessage("Hello, TypeScript");

// Function - Type Guards

function processInput(process: string | number) {
  if (typeof process === "number") {
    const result = process * 2;
    console.log(result);
  } else {
    const result = process.toUpperCase();
    console.log(result);
  }
}

processInput("Hello");
processInput(2);

// Function - Objects As Parameters

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });

console.log(first, second);

// alternative

function createStudents(student: { id: number; name: string }): void {
  console.log(`The student name is ${student.name.toUpperCase()}`);
}

const newStudent = { id: 3, name: "Keven" };

createStudents(newStudent);

// Challenge

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processData(3));
console.log(processData("Hello", { reverse: true }));
