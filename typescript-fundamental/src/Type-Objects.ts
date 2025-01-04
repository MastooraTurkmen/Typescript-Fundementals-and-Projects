let car: { brand: string; year: number } = {
  brand: "toyota",
  year: 2020,
};

let car1: { brand: string; year: number } = {
  brand: "toyota",
  year: 2020,
};

let book = {
  title: "book",
  cost: 30,
};

let pen = {
  title: "pen",
  cost: 20,
};

let notebook = {
  title: "notebook",
};

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

console.log(items);

// Challenge

let bike: { brand: string; year: number } = { brand: "newOF", year: 3030 };

bike.brand = "old";
let laptop: { brand: string; year: number } = { brand: "hp", year: 3030 };
let laptop2: { brand: string; year: number } = { brand: "hp", year: 3030 };

let product = { item: "food", cost: 30 };
let product2 = { item: "fruit" };

let products: { item: string; cost?: number }[] = [product, product2];
