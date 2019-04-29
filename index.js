let person = { name: ["Ana", "Mosh"], age: 35 };
console.log(Object.keys(person), Object.values(person));

// Factory Function: returns something
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}
//const circle = createCircle(1);

// Constructor Function: use 'this'
// function Circle(radius) {
//   this.radius = radius;

//   this.defaultLocation = { x: 0, y: 0 };

//   this.computeOptimumLocation = function() {
//     console.log("this is a test");
//   };

//   this.draw = function() {
//     this.computeOptimumLocation();
//     console.log("draw1");
//   };
// }

//Private properties and methods (changing 'this' for 'let')
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  // this.getDefaultLocation = function() {
  //   return defaultLocation;
  // };

  let computeOptimumLocation = function(el) {
    console.log("this is a test " + el);
  };

  this.draw = function() {
    computeOptimumLocation(0.1);
    console.log("draw1", defaultLocation);
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) throw new Error("Invalid location");
      defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
circle.draw();
//console.log(circle.getDefaultLocation());
console.log(circle.defaultLocation);
circle.defaultLocation = { x: 3, y: 3 };
console.log(circle.defaultLocation);
circle.location = { x: 1 };
circle["center-location"] = { x: circle.radius / 2, y: circle.radius / 2 };
delete circle["location"];

// We can add properties to a prototype, but it won't show in the Object.keys (only shows instance members)
Circle.prototype.move = function() {
  console.log("move");
};
console.log(circle.move());

const keys = Object.keys(circle);
console.log(keys);

// It will show in the let key in -for in loop - as it shows all members, instance and prototype)
for (let key in circle) {
  if (typeof circle[key] === "function") {
    console.log(key, circle[key]);
  }
}

if ("radius" in circle) {
  console.log("circle has a radius");
}

// JS has some inbuilt constructor functions.
// for example, let x = {}; is read as:
// let x = new Object()

// the inbuild function relative to our Circle would be:
const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
  this.draw = function() {
    console.log("draw1");
  };
  `
);
//const circle = new Circle1(1);

// the 'new' before the function name is read as:
// Circle.call({}, 1)
// where curly braces represent you're creating an object and 1 is the value of the argument.

let obj = { value: 10 };

function increase(number) {
  number.value++;
}

increase(obj);
console.log(obj);
