export function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}

export let person = "susan";

export type Student = {
  name: string;
  age: number;
};

const newStudent: Student = {
  name: "John",
  age: 25,
};

export default newStudent;
