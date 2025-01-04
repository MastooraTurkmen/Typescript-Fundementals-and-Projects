import newStudent, { sayHello, person, type Student } from "./Modules";

sayHello("Typescript");
console.log(newStudent);
console.log(person);

const anotherStudent: Student = {
  name: "bob",
  age: 23,
};

console.log(anotherStudent);
