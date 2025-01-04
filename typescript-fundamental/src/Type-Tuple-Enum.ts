// Tuple

let person: [string, number] = ["john", 24];

let date: [number, number, number] = [12, 22, 34];

function getPerson(): [string, number] {
  return ["john", 22];
}

let randomPerson = getPerson();
console.log(randomPerson[1]);
console.log(randomPerson[0]);

let susan: [string, number?] = ["susan"];

console.log(person, date, susan);

// Enum

enum ServerResponseStatus {
  Success = 200,
  Error = "Error",
}

Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === "number") {
    console.log();
  }
});

console.log(ServerResponseStatus);

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["first item", "second item"],
  };
}

const response: ServerResponse = getServerResponse();

console.log(response.result);

// Challenge

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}

const user: User = createUser({
  id: 1,
  name: "john",
  role: UserRole.Admin,
  contact: ["john@test.com", "1234"],
});

console.log(user);
