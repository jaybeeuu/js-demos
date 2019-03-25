
# Modules

[From w3schools](https://www.w3schools.com/js/js_this.asp):

> The JavaScript `this` keyword refers to the object it belongs to.
> It has different values depending on where it is used:
>
> * In a method, this refers to the owner object.
> * Alone, `this` refers to the global object.
> * In a function, `this` refers to the global object.
> * In a function, in strict mode, `this` is `undefined`.
> * In an event, `this` refers to the element that received the event.
> * Methods like `call()`, and `apply()` can refer `this` to any object.

## But what about ES6 arrow functions

They are much simpler. They inherit `this` from their declaration.
[From MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this):
> An arrow function does not have its own `this`.
> The `this` value of the enclosing lexical scope is used;
> arrow functions follow the normal variable lookup rules.
> So while searching for `this` which is not present in current
> scope they end up finding `this` from its enclosing scope.