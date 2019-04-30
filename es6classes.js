// function Circle(radius) {
//   this.radius = radius
//   this.draw = function() {
//     console.log('draw')
//   }
// }

// In ES6, the above constructor function will be:
// Class Declaration - Hoisted
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function() {
      console.log("move");
    };
  }

  // Instance method - in the object:
  draw() {
    console.log("draw");
  }

  // Static method - in the Class:
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

//const c = new Circle(1);
// since parse() is static, I CANNOT call it for c (c.parse())
// I CAN call Circle.parse()

const circle = Circle.parse('{"radius":1}');
console.log(circle);
// Class Expression
const Square = class {};

// Function Declaration - no semicolon in the end - Hoisted: function can be called anywhere, even before the declaration
function sayHello() {}

// Function Expression - semicolon in the end - function can only be called after the expression
const sayGoodbye = function() {};

// An example of how the Math built-in object would be created as class:
// static methods aren't related to an object, but to the class itself! They're utility functions
class Math2 {
  static abs(value) {
    //...
  }
}

Math2.abs();
