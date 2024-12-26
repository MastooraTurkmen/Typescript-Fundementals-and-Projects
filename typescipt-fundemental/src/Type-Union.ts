// Type Union
let tax: number | string = 10;
tax = 100;
tax = "Something";

// Type Any
let notSure: any = true;
notSure = "maybe";
notSure = 33;
notSure = [false, "handle", 32];

// Example
const books = ["1902", "Bar ee now", "Ali"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1992") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);

// Challenge

let orderStatus: "processing" | "shipped" | "delivered" = "processing";

orderStatus = "shipped";
orderStatus = "delivered";

let discount: number | string = 20;
discount = "20%";
