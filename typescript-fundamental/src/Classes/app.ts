class Book {
  public readonly title: string;
  public author: string;
  private checkedOut: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public checkOut() {
    this.checkedOut = this.toggleCheckOut();
  }
  public isCheckedOut() {
    return this.checkedOut;
  }
  private toggleCheckOut() {
    return !this.checkedOut;
  }
}

const deepWork = new Book("Deep work", "Cal Newport");
deepWork.checkOut();
console.log(deepWork.isCheckedOut()); // true;
