type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: "Ali",
  isActive: true,
};

const susan: User = {
  id: 1,
  name: "Susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()}`);
  return user;
}

type StringOrNumber = string | number;

let value: StringOrNumber;
value = "Hello";
value = 10;

type UserOrAdmin = "user" | "admin";

let userOrAdmin: UserOrAdmin;
userOrAdmin = "user";
userOrAdmin = "admin";

function userFunction(t: UserOrAdmin) {
  userOrAdmin = t;
}

userFunction("admin");

// Challenge

type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

const ali: Employee = { id: 1, name: "ali", department: "IT" };
const steven: Employee = { id: 2, name: "steven", department: "Sales" };

const bob: Manager = { id: 1, name: "Bob", employees: [ali, steven] };

type Staff = Employee | Manager;

function printStaffDetails(user: Staff): void {
  if ("employees" in user) {
    console.log(
      `${user.name} is an manager in the ${user.employees.length} employees`
    );
  } else {
    console.log(
      `${user.name} is an employee in the ${user.department} department`
    );
  }
}

printStaffDetails(bob);

// Computed Properties

const propName = "age";

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 13 };

//

type Book = {
  id: number;
  name: string;
  price: number;
};

type BookWithDiscount = Book & { discount: number };

const bookOne: Book = {
  id: 1,
  name: "How to be a great developer",
  price: 100,
};

const bookTwo: Book = {
  id: 2,
  name: "How to be a great designer",
  price: 30,
};

const bookDiscounted: BookWithDiscount = {
  id: 1,
  name: "Harry Potter",
  price: 40,
  discount: 0.23,
};
