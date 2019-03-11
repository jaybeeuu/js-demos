class Foo {
  constructor() {
    this.name = "foo";
  }

  printDatum() {
    console.log(this.name);
  }
}

var foo = new Foo();
foo.printDatum();

///////////////////////////////////////////////////////////////////////

class Bar {
  constructor(callback) {
    this.name = "bar";
    this.callback = callback;
  }

  call() {
    this.callback();
  }
}

var bar = new Bar(foo.printDatum);
bar.call();