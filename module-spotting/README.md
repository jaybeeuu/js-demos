
# Modules

## What are we trying to solve?

As JS applications grow managing them in a single file becomes unwieldy. We all know the benefits of breaking things down into small easliy understood cohertent components which can be editted with confidence. In the old days JS had no builtin way of doing this.

The best attempt in the browser was to "import" modules using a series of script tags from you html. This encouraged large JS files, whose dependencies often weren't clear. If the dependencies changed there was no automatic way to go and update all of the places they were used, and the order of imports was sacrosanct. Utility files in projects would grow and grow and oftenbe imported on every page. dead code was hard to identify and eliminate.

Because there was no definition of a module there was also no definition of how a file should export public code. The global scope became a dumping ground. of course this quickly led to name collisions and javascript being what it is - `dynamic` that perfectly OK, from the point of view of the interpreter. Even Libraries like `jQuery` and `Underscore` whose exports and aliases were well known ran into others using their names. Techniques were used like namespacing to try and avoid collisions, but inevitably someone would overwrite someone elses behaviour, bugs would eat up whole applications, tempers flared and words were said which could never be taken back.

Something had to give.

## What do we look for in a good module system?



## Styles of Module you might see in the wild

### AMD

Asynchronous Module Definitions. Most notably implemented by [Require.js](https://requirejs.org/). The idea here is to allow modules to be loaded in a lazy manner - i.e. as late as possible. The goal being to increase page load times by not loading anything until it is required.

Here's what a module looks like:

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

The syntax is complex, setting it up is finicky and it's not a popular way of doing modules so let's not dwell on it.

### CommonJS

This is a much more popular module type. As implemented by [Node.js](https://nodejs.org/en/).

This syntax is much easier to understand and because of node's populartiy it is a much more common method of defining and using modules.

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

### UMD

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

### ES6 (Harmony)