
# Modules

## What are we trying to solve?

As JS applications grow managing them in a single file becomes unwieldy. We all know the benefits of breaking things down into small easliy understood cohertent components which can be editted with confidence. In the old days JS had no builtin way of doing this.

The best attempt in the browser was to "import" modules using a series of script tags from you html. This encouraged large JS files, whose dependencies often weren't clear. If the dependencies changed there was no automatic way to go and update all of the places they were used, and the order of imports was sacrosanct. Utility files in projects would grow and grow and often be imported on every page. dead code was hard to identify and eliminate.

Because there was no definition of a module there was also no definition of how a file should export public code. The global scope was the only real choice and soon became a dumping ground. Of course this quickly led to name collisions and javascript being what it is - `dynamic` that perfectly OK from the point of view of the interpreter. Even Libraries like `jQuery` and `Underscore` whose exports and aliases were well known ran into others using their names. Techniques were used like namespacing to try and avoid collisions, but inevitably someone would overwrite someone elses behaviour, bugs ate up whole applications, tempers flared and words were said which could never be taken back.

Something had to give. A few competing standards grew each with their own quirks and benefits. But the good news is that you don't need to know all of them. The two you will come in most contact with are CommonJS and ES6 Modules - and even then mostly only ES6 modules. The others are included below only because you may some across them so it's worth at least recognising the names and the syntax.

## So what actually is a module anyway?

THe Google definition is:

> module
> /ˈmɒdjuːl/
>
> noun
>
> 1. each of a set of standardized parts or independent units that can be used to construct a more complex structure, such as an item of furniture or a building.
>    - "ships are now built in modules rather than built in a whole from the base up"
> 2. a detachable self-contained unit of a spacecraft.
>    - "Spacelab, an extra module for the shuttle, will quadruple the experimental facilities on board"

The first definition is more relevant to JavaScript. A module is a unit of code which provides some cohesive reusable functionality. It might export a class or a group of functions. But whatever it contains should be closely related. In a similar fashion to classes in OO languages (like Java or C#) modules in javascript allow us to build up complex applications from smaller simpler components.

A module in JS allows the author to import the dependencies of the code they define - i.e. the modules on which the module's code relies. (It's turtles the whole way down.) It must then allow the execution of some JavaScript which defines the content of the module. Usually a group of functions or a class but the exports could just as easily be a configuration object some HTML or CSS. And finally the module defines which things will be exposed it to it's dependents or exported.

## Styles of Module you might see in the wild

### [AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition)

Asynchronous Module Definitions. Most notably implemented by [Require.js](https://requirejs.org/). One of the key features of this standard is to allow modules to be loaded in a lazy manner - i.e. as late as possible. The goal being to increase page load times by not loading anything until it is required.

Here's what an AMD module looks like:

```js
// Cat.js
define(["movement/prowl", "noises/miaow"],
    function (prowl, miaow) {
        class Cat {
          speak() {
            miaow();
          }

          move() {
            prowl();
          }

          isBetterThanADog() {
            return true;
          }
        }

        return Cat;
    }
);
```

The syntax is complex, setting it up is finicky and it's not a popular way of doing modules anymore so let's not dwell on it.

### [CommonJS](https://en.wikipedia.org/wiki/CommonJS)

Because this is the module system implemented by [Node.js](https://nodejs.org/en/) it is more likely you will come across it. It has a clean syntax and the `require` statements which pull in code can go anywhere in the file which can lend readbility. On the down side the require statements can go anywhere so the dependencies of a file are not necessarily obvious.

here's an example ripped almost exactly from the [node docs](https://nodejs.org/docs/latest/api/modules.html)...

```js
// circle.js
const { PI } = Math;

exports.area = (r) => PI * r ** 2;

exports.circumference = (r) => 2 * PI * r;
```

```js
// index.js
const circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
```

Cyclic dependencies

### [UMD]((https://github.com/umdjs/umd)

UMD (Unified Module Definitions) aims to join both - library authors needed to wrap their code up as modules which worked in as many environments as possible and so UMD was born. At it's core is a series of templates in a github [repo](https://github.com/umdjs/umd). They work fine - but getting your head around what they do can be tricky.

Here's an exmaple:

```js
// commonjsStrictGlobal.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'b'], function (exports, b) {
            factory((root.commonJsStrictGlobal = exports), b);
        });
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('b'));
    } else {
        // Browser globals
        factory((root.commonJsStrictGlobal = {}), root.b);
    }
}(typeof self !== 'undefined' ? self : this, function (exports, b) {
    // Use b in some fashion.

    // attach properties to the exports object to define
    // the exported module properties.
    exports.action = function () {};
}));
```

### [(]ES6 (Harmony)](http://exploringjs.com/es6/ch_modules.html)

This is the one to pay most attention to. This is the offically sanction module standard as per the ES6 specification. It has taken a while but many browsers now [support](https://caniuse.com/#search=modules) the spec. Because of [differences](https://hackernoon.com/node-js-tc-39-and-modules-a1118aecf95e) between node's CommonJS and ES6 modules it has taken longer for modules to be supported there, but it is now on it's [way](https://nodejs.org/api/esm.html).

Lets get down to brass tacks...

