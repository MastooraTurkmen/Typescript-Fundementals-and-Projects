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

// Enum

enum ServerResponseStatus {
  Success = 200,
  Error = "Error",
}

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
