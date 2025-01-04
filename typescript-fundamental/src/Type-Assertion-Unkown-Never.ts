let someValue: any = "the";

let strLength: number = (someValue as string).length;

type Bird = {
  name: string;
};

let birdString = `{"name": "Eagle"}`;
let dogString = `{"breed": "Poodle"}`;

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type User = {
  name: string;
  status: Status;
};

const statusValue = "pending";

const user: User = {
  name: "john",
  status: statusValue as Status,
};

// Unknown

let unknownValue: unknown;

unknownValue = "string";
unknownValue = [22, 223, 94];
unknownValue = 392.2234;

if (typeof unknownValue === "number") {
  unknownValue.toFixed(2);
}

function runSomeCode() {
  const random = Math.random();

  if (random < 0.5) {
    throw new Error("There was an Error");
  } else {
    throw "Some Error";
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}

// Type Never

// let neverValue: never = 2

type Theme = "light" | "dark";

function checkTheme(theme: Theme) {
  if (theme === "light") {
    console.log("light theme");
    return;
  }
  if (theme === "dark") {
    console.log("dark theme");
    return;
  }
  theme;
}

checkTheme("light");

enum Color {
  Red,
  Blue,
  Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Blue:
      return "Blue";
    case Color.Red:
      return "Red";
    case Color.Green:
      return "Green";
    default:
      // at build time
      let unexpectedColor: never = color;
      throw new Error(`Unexpected color value: ${color}`);
  }
}

console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
