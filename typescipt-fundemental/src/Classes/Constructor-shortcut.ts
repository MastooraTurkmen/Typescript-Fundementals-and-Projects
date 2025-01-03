class Book {
  private checkedOut: boolean = false;
  constructor(
    readonly title: string,
    public author: string,
    private someValue: number
  ) {}
  public getSomeValue() {
    return this.someValue;
  }
}

const deepWork = new Book("Deep work", "Cal Newport", 22);
console.log(deepWork.getSomeValue());
