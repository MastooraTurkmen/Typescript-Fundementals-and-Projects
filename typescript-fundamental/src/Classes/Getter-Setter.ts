class Book {
  private checkedOut: boolean = false;
  constructor(readonly title: string, public author: string) {}

  get info() {
    return `${this.title} by ${this.author}`;
  }
  private set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }
  get checkOut() {
    return this.checkedOut;
  }

  public get someInfo() {
    this.checkOut = true;
    return `${this.title} by ${this.author}`;
  }
}

const deepWork = new Book("Deep work", "Cal Newport");
console.log(deepWork.info);
// deepWork.checkOut = true;
console.log(deepWork);
console.log(deepWork.someInfo);
console.log(deepWork.checkOut);
