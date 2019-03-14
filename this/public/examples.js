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
classyFoo.sayHi();
const funFoo = new FunFoo('Eric');
funFoo.sayHi();
json.sayHi();

///////////////////////////////////////////////////////////////////////

console.log("A bare this", this === window);

///////////////////////////////////////////////////////////////////////

function thisIsTheWindow() {
  // "use strict";
  console.log("This is the window", this === window);
}

thisIsTheWindow();

///////////////////////////////////////////////////////////////////////

const button = document.getElementById("eventful-button");

function onButtonClick() {
  console.log("This in a button click", this === window, this);
}

button.addEventListener("click", onButtonClick);

/////////////////////////////////////////////////////////////////////////

function myVeryImpressionableFunction() {
  console.log("Today I am bound eternally to...", this);
}

myVeryImpressionableFunction();


(function() {
  // "use strict";
  myVeryImpressionableFunction.call(null);
})();

myVeryImpressionableFunction.apply("Something completely different.");

const boundImpressionableFunction = myVeryImpressionableFunction.bind({ id: "This is an object now..."});
boundImpressionableFunction();
myVeryImpressionableFunction();

/////////////////////////////////////////////////////////////////////////

const arrowThis = (message) => {
  // "use strict";
  console.log(message, this);
};

arrowThis("If an arrow points at this what does it become?");

/////////////////////////////////////////////////////////////////////////

arrowThis.bind("Is it me?")("Is it this this?");
arrowThis.call("Let it be me!", "If not that this What about this this?");
arrowThis.apply("Surely it'll be me?", ["If not that this What about this this?"]);

/////////////////////////////////////////////////////////////////////////

const someObject = {
  i: 10,
  arrow: () => {
    console.log("From the arrow:", this.i);
  },
  func: function () {
    console.log("From the normal function:", this.i);
  }
};

someObject.func();
someObject.arrow();