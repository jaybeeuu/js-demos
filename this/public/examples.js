
(function() {
  console.log("A bare this", this === window);
});

///////////////////////////////////////////////////////////////////////

(function() {
  function whatDoesThisBelongTo() {
    console.log("This is the window", this === window);
  }

  // whatDoesThisBelongTo();
});

///////////////////////////////////////////////////////////////////////

(function() {
  class ClassyFoo {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      console.log(`Enchanté. I'm ${this.name}`);
    }
  }

  const FunFoo = function(name) {
    this.name = name;

    this.sayHi = function() {
      console.log(`Hello I'm ${this.name} and I like mushrooms.`);
    }
  }

  const json = {
    name: "Jason",
    sayHi: function () {
      console.log(`Um... hi. I'm just ${this.name}, I guess.`);
    }
  }

  const classyFoo = new ClassyFoo("Cici");
  const funFoo = new FunFoo('Eric');

  // classyFoo.sayHi();
  // funFoo.sayHi();
  // json.sayHi();
})();

/////////////////////////////////////////////////////////////////////////

(function(){;
  const someObject = {
    i: 10,
    arrow: () => {
      console.log("From the arrow:", this.i);
    },
    func: function () {
      console.log("From the normal function:", this.i);
    }
  };

  // someObject.func();
  // someObject.arrow();
})();

///////////////////////////////////////////////////////////////////////

(function() {
  const button = document.getElementById("eventful-button");

  function onButtonClick() {
    console.log("This in a button click", this === window);
  }

  button.addEventListener("click", onButtonClick);
})();

///////////////////////////////////////////////////////////////////////

(function() {
  "use strict";

  function whatDoesThisBelongTo() {
    console.log("This is the window", this === window);
  }

  // whatDoesThisBelongTo();
})();

/////////////////////////////////////////////////////////////////////////

(function() {
  function myVeryImpressionableFunction() {
    console.log("Today I am bound eternally to...", this);
  }

  // myVeryImpressionableFunction();

  // myVeryImpressionableFunction.call(null);

  (function() {
    "use strict";
    // myVeryImpressionableFunction.call(null);
  })();

  // myVeryImpressionableFunction.apply("Something completely different.");

  const boundImpressionableFunction = myVeryImpressionableFunction.bind({ id: "This is an object now..."});
  // boundImpressionableFunction();
  // myVeryImpressionableFunction();
})();

/////////////////////////////////////////////////////////////////////////

(function() {
  const arrowThis = (message) => {
    // "use strict";
    console.log(message, this);
  };

  // arrowThis("If an arrow points at this what does it become?");

  // arrowThis.bind("Is it me?")("Is it this this?");
  // arrowThis.call("Let it be me!", "If not that this What about this this?");
  // arrowThis.apply("Surely it'll be me?", ["If not that this What about this this?"]);
})();

//////////////////////////////////////////////////////////////////////////

(function() {
  function FunctionHireShop() {
    this.otherFunction = function () {
      console.log("Here I am!")
    }

    this.someUtilityFunction = function () {
      console.log("I need my buddy to work...", this.otherFunction())
    }
  }

  function DiyFunctionUser(someUtilityFunction) {
    this.someUtilityFunction = someUtilityFunction;

    this.doSomeDiy = function () {
      console.log("I just reach for that function i got from the shop...", this.someUtilityFunction())
    }
  }

  const hireShop = new FunctionHireShop();
  const eagerDiyer = new DiyFunctionUser(hireShop.someUtilityFunction);

  eagerDiyer.doSomeDiy();
});

