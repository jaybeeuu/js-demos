(function() {
  console.log("A bare this", this === window);
});

///////////////////////////////////////////////////////////////////////

(function() {
  function whatDoesThisBelongTo() {
    console.log("In a function", this === window);
  }

  whatDoesThisBelongTo();
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

  const specificClassyFoo = new ClassyFoo("Cici");
  specificClassyFoo.sayHi();
});

/////////////////////////////////////////////////////////////////////////

(function() {
  function hiSayer () {
    console.log(`Um... hi. I'm just ${this.name}, I guess.`);
  }

  const json = {
    name: "Jason",
    sayHi: hiSayer
  };

  hiSayer();
  json.sayHi();
});

///////////////////////////////////////////////////////////////////////

(function() {
  const button = document.getElementById("eventful-button");

  function onButtonClick() {
    console.log("This in a button click", this === window, this);
  }

  button.addEventListener("click", onButtonClick);
})();

/////////////////////////////////////////////////////////////////////////

(function(){
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

/////////////////////////////////////////////////////////////////////////

(function() {
  function FunFoo(name) {
    this.name = name;

    this.sayHi = function() {
      console.log(`Hello I'm ${this.name} and I like mushrooms.`);
    }
  }

  const funGuy = new FunFoo('Eric');
  // funGuy.sayHi();
})();

///////////////////////////////////////////////////////////////////////

(function() {
  "use strict";

  function whatDoesThisBelongTo() {
    console.log("In a function", this === window, this);
  }

  // whatDoesThisBelongTo();
})();

/////////////////////////////////////////////////////////////////////////

(function() {
  // "use strict";

  function impressionable() {
    console.log("Today I am bound eternally to...", this);
  }

  // myVeryImpressionableFunction();

  // myVeryImpressionableFunction.call(null);
  // myVeryImpressionableFunction.call("A message");

  // impressionable.apply("Something completely different.");

  const bound = impressionable.bind({ id: "This is an object now..."});
  // bound();
  // impressionable();
})();

/////////////////////////////////////////////////////////////////////////

(function() {
  // "use strict";
  const arrowThis = (message) => {
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
      return "Here I am!";
    }

    this.someUtilityFunction = () => {
      return `I need my buddy to work...${this.otherFunction()}`;
    }
  }

  function DiyFunctionUser(someUtilityFunction) {
    this.someUtilityFunction = someUtilityFunction;

    this.doSomeDiy = function () {
      return `I just reach for that function i got from the shop...${this.someUtilityFunction()}`;
    }
  }

  const hireShop = new FunctionHireShop();
  const eagerDiyer = new DiyFunctionUser(hireShop.someUtilityFunction);

  console.log(eagerDiyer.doSomeDiy());
})();

