# this

## What is it?

`this` is usually the class on which a function has been declared:

That is not always the case in Javascript.

```js
class Foo {
  constructor(datum) {
    this.name = "foo";
    this.datum = datum;
  }

  printDatum() {
    console.log(this.datum);
  }
}

class Bar {
  constructor(callback) {
    this.name = "bar";
    this.callback = callback;
  }

  call() {
    this.callback();
  }
}

const foo = new Foo(10);
const bar = new Bar(foo.printDatum);
foo.printDatum();
bar.call();
```

Bad times.